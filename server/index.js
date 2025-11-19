import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const token = "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";
const endpoint = "https://models.github.ai/inference";
const model = "gpt-3.5-turbo"; // or your deployment name

const client = ModelClient(endpoint, new AzureKeyCredential(token));
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required." });

    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: "" },
          { role: "user", content: prompt }
        ],
        model: model
      }
    });

    if (isUnexpected(response)) throw response.body.error;

    const choice = response.body.choices[0];
    const text = choice.content.map(c => c.text).join("\n");

    res.json({ response: text });

  } catch (error) {
    console.error("Azure OpenAI Error:", error);
    res.status(500).json({ error: error.message || JSON.stringify(error) });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
