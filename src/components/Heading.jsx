import React from "react";

function Heading() {
  // the function name of the custom component should be in
  // PascalCase
  return (
    /* class is className in js */
    /* html attributs change to camel case: */
    <h1 className="heading" contentEditable="true" spellCheck="true">
      Title 1...
    </h1>
  );
}

export default Heading;
