import React from "react";
import ReactDOM from "react-dom";

const number = 42;
const currentDate = new Date();

console.log(currentDate);
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Header 1</h1>
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
  </div>,
  document.getElementById("root")
);
