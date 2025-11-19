import React from "react";

const Hero = () => {
    return (
        <div className="text-white grid place-items-center pt-15" >
            <div className="rounded-2xl border border-[#1E3867] bg-[#192845] " >
                <p className="text-[#93C5FD] text-center text-[12px] p-2 w-50 " >
                    AI-Powered Resume Reviewer
                </p>
            </div>
            <div className="text-[70px] mb-3">
                <h1 className="text-center" >
                    LAND YOUR DREAM JOB WITH A
                </h1>
                <h1 className="text-center bg-linear-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent" >
                    PERFECT RESUME
                </h1>
            </div>

            <p className="text-center text-2xl mb-20 text-[20px]" >
                Get instant AI-driven feedback on your resume. Improve your ATS score, fix <br />
                errors, and stand out from the competition with actionable insights.
            </p>

            <div className="border-3 border-dashed border-[#7C7C7C] rounded-[30px] w-180 h-100 flex flex-col items-center justify-center gap-2 ">
                <p className=" mb-10 text-2xl" >
                    Drop your resume here
                </p>
                <p className="text-[#7C7C7C] text-sm" >
                    or click to browse files
                </p>
                <button className="bg-linear-to-r from-[#2563EB] to-[#311585] text-white text-sm px-4 py-2 rounded-[15px] w-35 ">
                    Choose File
                </button>
                <p className="text-[#7C7C7C] text-sm">
                    Supports PDF, DOCX • Max 5MB
                </p>
            </div>

            <div className="grid grid-cols-3 gap-20 mt-20 pb-10 text-center justify-center">
                <div>
                    <h2 className="text-6xl pb-5 text-[#5E8EF8]" >
                        95%
                    </h2>
                    <p className="text-gray-600 text-sm ">
                        Accuracy Rate
                    </p>
                </div>
                <div>
                    <h2 className="text-6xl pb-5 text-[#5E8EF8]" >
                        100+

                    </h2>
                    <p className="text-gray-600 text-sm ">
                        Resume Analyzed</p>
                </div>
                <div>
                    <h2 className="text-6xl pb-5 text-[#5E8EF8]" >
                        &lt;60s
                    </h2>
                    <p className="text-gray-600 text-sm text-center ">
                        Review Time
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Hero;