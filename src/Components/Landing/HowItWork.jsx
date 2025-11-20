import React from "react";
import hero from "../../assets/image.png";
import { WandSparkles } from "lucide-react";

const HowItWork = () => {
  const steps = [
    {
      step: 1,
      title: "Upload Resume",
      description: "Drop your resume file or paste the text"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI model analyzes every aspect of your resume"
    },
    {
      step: 3,
      title: "Get Results",
      description: "Receive detailed feedback and improvement suggestions"
    }
  ];

  return (
    <div className="w-full min-h-100 bg-gray-900 flex flex-col items-center py-16">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h3 className="px-5 select-none font-semibold py-3 bg-blue-500/50 rounded-full flex items-center justify-center gap-2 text-white">
          <WandSparkles size={15} /> Simple Process
        </h3>
        <h1 className="text-5xl mt-6 font-mono text-white">Analyze Your Resume</h1>
      </div>

      {/* Content */}
      <div className="flex items-center bg-white w-4/5 mt-12 rounded-xl overflow-hidden shadow-xl">
        <div className="w-1/2 h-100">
          <img src={hero} alt="hero section" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col w-1/2 p-10 gap-10 justify-center">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                {String(item.step).padStart(2, "0")}
              </div>
              <h2 className="text-2xl font-semibold mt-3">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
