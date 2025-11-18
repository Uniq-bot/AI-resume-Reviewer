import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_KEY;
if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_KEY not set in .env");
  process.exit(1);
}

// Use the correct REST endpoint for generateContent
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`;

app.post("/api/ai-review", async (req, res) => {
  
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const body = {
      contents: [
        {
          parts: [
            { text: text }
          ]
        }
      ],
      // Optional: you can configure generation parameters
      generationConfig: {
        temperature: 0.7,
        // maxOutputTokens, stopSequences, etc.
      }
    };

    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,  // Use this header for API key auth :contentReference[oaicite:1]{index=1}
      },
      body: JSON.stringify(body),
    });

    const textResponse = await response.text();
    // Debug: what did the API actually return?
    console.log("Raw response:", textResponse);

    // Try to parse JSON — if not JSON, throw error
    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (parseErr) {
      console.error("Failed to parse JSON:", parseErr);
      return res.status(500).json({ error: "Invalid JSON response from Gemini API" });
    }

    // Gemini returns an array of candidates
    const candidate = data.candidates?.[0];
    const content = candidate?.content;
    const parts = content?.parts;
    const resultText = parts?.map(p => p.text).join("") ?? "";

    res.json({ result: resultText });
  } catch (err) {
    console.error("Error calling Gemini API:", err);
    res.status(500).json({ error: "Something went wrong calling Gemini API" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
