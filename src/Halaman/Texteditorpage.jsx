import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import parse from "html-react-parser";
const Textedithalaman = () => {
  const [value, setValue] = useState("");

  return (
    <div
      className="container-xxl mt-5 pb-5 border border-1 pt-3 px-5 shadow-lg"
      id="texteditor"
    >
      <CKEditor
        editor={ClassicEditor}
        onChange={(e, editor) => {
          const data = editor.getData();
          console.log(setValue(data));
        }}
      />
      <div>
        <h1>{parse(value)}</h1>
      </div>
    </div>
  );
};

export default Textedithalaman;
