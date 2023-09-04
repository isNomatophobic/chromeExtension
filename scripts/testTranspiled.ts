import React, { useEffect } from "react";
console.log(document.getElementsByClassName("main"));
const Test = () => {
  useEffect(() => {
    const test = document.getElementsByTagName("div");
    console.log(test);
    console.log(chrome.runtime);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Hello!");
};
export default Test;
