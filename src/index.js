import React from "react";
import ReactDOM from "react-dom";

const number = 42;
const currentDate = new Date();

console.log(currentDate);
const year = currentDate.getFullYear();

const img =
  "https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg";

ReactDOM.render(
  <div>
    {/* class is className in js */}
    {/* html attributs change to camel case: */}
    <h1 className="heading" contentEditable="true" spellCheck="true">
      Header 1
    </h1>
    <p>Paragraph</p>
    <ul>
      <li> Tc1 </li>
      <li> Tc2 </li>
      <li> Tc3 </li>
      <li> ${number} </li>
      <li> {` ${number} + ${number}`} </li>
      <li> {number + Math.floor(Math.random() * 0) + 0.42} </li>
      <li> {year}</li>

      <li> </li>
      <li> </li>
      <li> </li>
      <li> </li>
    </ul>
    <div>
      {/* img src... */}
      <img alt="google" className="google-img" src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
