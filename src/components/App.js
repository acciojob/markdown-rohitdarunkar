import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("# Heading");

  const convertMarkdown = (text) => {
    return text
      .split("\n")
      .map((line, index) => {
        if (line.startsWith("# ")) {
          return <h1 key={index}>{line.replace("# ", "")}</h1>;
        }
        return <p key={index}>{line}</p>;
      });
  };

  return (
    <div id="main">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div>{convertMarkdown(markdown)}</div>
    </div>
  );
};

export default App;