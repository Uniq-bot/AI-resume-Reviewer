import React, { useState } from "react";

const FileDropZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      console.log("Dropped file:", droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <label
      className={`border-2 border-dashed rounded-[20px] w-full max-w-2xl h-[200px]
      flex flex-col items-center justify-center gap-3 px-4 cursor-pointer
      transition ${
        isDragging ? "border-blue-500 bg-blue-500/10" : "border-gray-600"
      }
      ${file ? "cursor-default" : "cursor-pointer"}
      `}
      onDragOver={!file ? handleDragOver : undefined}
      onDragLeave={!file ? handleDragLeave : undefined}
      onDrop={!file ? handleDrop : undefined}
    >
      {/* Hidden input (disabled after file selection) */}
      <input
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        disabled={!!file}
      />

      {!file ? (
        <>
          <p className="text-xl font-medium">Drop your resume here</p>
          <p className="text-gray-400 text-sm">or click to browse files</p>

          <button
            className="bg-gradient-to-r from-[#2563EB] to-[#311585] text-white text-sm px-5 py-2 rounded-[12px]"
            disabled={!!file}
          >
            Choose File
          </button>

          <p className="text-gray-400 text-xs">Supports PDF, DOCX • Max 5MB</p>
        </>
      ) : (
        <>
          <a href="#" download={file.name} className="text-lg font-semibold text-blue-400">{file.name}</a>
          <p className="text-gray-400 text-sm">File ready for analysis</p>

          {/* Review Button */}
          <button
            className="bg-gradient-to-r from-[#2563EB] to-[#311585] cursor-pointer text-white px-6 py-2 rounded-xl mt-2"
            onClick={() => alert("Reviewing:", file)}
          >
            Review Now
          </button>
        </>
      )}
    </label>
  );
};

export default FileDropZone;
