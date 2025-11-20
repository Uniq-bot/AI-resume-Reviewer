import React from "react";
import FileDropZone from "../fileDrop/FileDrop";

const Hero = () => {
  return (
    <div className="text-white bg-gray-900 flex flex-col items-center pt-12 px-6 pb-10">

      {/* Tag */}
      <div className="rounded-2xl border border-[#1E3867] bg-[#192845] px-4 py-1">
        <p className="text-[#93C5FD] text-[12px] text-center">
          AI-Powered Resume Reviewer
        </p>
      </div>

      {/* Main Heading */}
      <div className="text-center mt-6 leading-tight">
        <h1 className="text-[35px] md:text-[55px] font-bold">
          LAND YOUR DREAM JOB WITH A
        </h1>
        <h1 className="text-[35px] md:text-[55px] font-bold bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
          PERFECT RESUME
        </h1>
      </div>

      {/* Description */}
      <p className="text-center text-[16px] md:text-[18px] text-gray-300 mt-4 max-w-2xl leading-relaxed">
        Get instant AI-driven feedback on your resume. Improve your ATS score,
        fix errors, and stand out from the competition with actionable insights.
      </p>

      {/* Upload Box with FileDropZone */}
      <div className="mt-10 w-full max-w-2xl">
        <FileDropZone />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-14 pb-6 text-center">
        <div>
          <h2 className="text-5xl font-bold text-[#5E8EF8]">95%</h2>
          <p className="text-gray-400 text-sm mt-1">Accuracy Rate</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-[#5E8EF8]">100+</h2>
          <p className="text-gray-400 text-sm mt-1">Resumes Analyzed</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-[#5E8EF8]">&lt;60s</h2>
          <p className="text-gray-400 text-sm mt-1">Review Time</p>
        </div>
      </div>

    </div>
  );
};

export default Hero;
