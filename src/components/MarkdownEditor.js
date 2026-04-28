import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("# Hello world");

  return (
    <div style={{ display: "flex" }}>
      {/* INPUT AREA */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "50%", height: "300px" }}
      />

      {/* PREVIEW AREA */}
      <div
        className="preview"
        style={{ width: "50%", padding: "10px" }}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;