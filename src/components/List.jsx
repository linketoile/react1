import React from "react";
const number = 42;
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(currentDate);

function UnorderedList() {
  return (
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
  );
}

export default UnorderedList;
