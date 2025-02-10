"use client";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  const [editorData, setEditorData] = useState("");

  const toolbarItems = [
    "heading",
    "|",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "subscript",
    "superscript",
    "|",
    "fontSize",
    "fontColor",
    "fontBackgroundColor",
    "|",
    "alignment",
    "|",
    "bulletedList",
    "numberedList",
    "todoList",
    "|",
    "link",
    "insertTable",
    "imageUpload",
    "mediaEmbed",
    "|",
    "undo",
    "redo",
    "|",
    "blockQuote",
    "codeBlock",
    "highlight",
    "removeFormat",
  ];

  return (
    <div style={{ margin: "20px", padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2>CKEditor 5 with Full Free Features</h2>
      
      <div style={{ marginTop: "20px" }}>
        <h3>Editor Output:</h3>
        <div style={{ padding: "10px", border: "1px solid #ccc", minHeight: "100px" }}>
          {editorData}
        </div>
      </div>
    </div>
  );
};

export default Editor;
