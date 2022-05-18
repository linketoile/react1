import React from "react";

function Note() {
  const currentYear = new Date().getFullYear();
  // the function name of the custom component should be in
  // PascalCase
  return (
    <div className="note">
<h1>
Note title
</h1>
    <p>
This is my first note and i try to write a long text


this could be a menu ? 
   </p>
   </div>
   );
}

export default Note;