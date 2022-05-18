import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  // the function name of the custom component should be in
  // PascalCase
  return <footer><p>
Copyright © {currentYear}
   </p></footer>
}

export default Footer;
