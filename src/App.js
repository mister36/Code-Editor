import "./App.css";
import "./home.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

function App() {
  const handleEditorChange = (value, evt) => {
    // console.log(value);
  };

  return (
    <div className="App">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// start now"
        theme="vs-dark"
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default App;
