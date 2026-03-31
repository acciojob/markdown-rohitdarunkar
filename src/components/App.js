import React from "react";
import "../styles/App.css";
import MarkdownEditor from "./MarkdownEditor";

const App = () => {
  return (
    <div className="app">
      {/* Do not remove the main div */}
      <MarkdownEditor />
    </div>
  );
};

export default App;