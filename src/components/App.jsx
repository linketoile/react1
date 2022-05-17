import React from "react";
import Heading from "./Heading";
import UnorderedList from "./List";

const img =
  "https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg";

const customStyle = {
  color: "black",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "darkblue";

function App() {
  // the function name of the custom component should be in
  // PascalCase
  return (
    <div>
      {/* This is a comment in react */}
      {/* call to custom Reacts component */}
      <Heading />
      <h2
        style={{ color: "darkred" }}
        className="heading"
        contentEditable="true"
        spellCheck="true"
      >
        Title 2
      </h2>
      <h3
        style={customStyle}
        className="heading"
        contentEditable="true"
        spellCheck="true"
      >
        Title 3
      </h3>

      <p>Paragraph</p>
      <UnorderedList />
      <div>
        {/* img src... */}
        <img alt="google" className="google-img" src={img} />
      </div>
    </div>
  );
}

export default App;
