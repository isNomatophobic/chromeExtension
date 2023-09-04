import React, { useEffect } from "react"

console.log(chrome.runtime)
const Test = () => {
  useEffect(() => {
    const test = document.getElementsByTagName("div")
  }, [])
  return /*#__PURE__*/ React.createElement(React.Fragment, null, "Hello!")
}
export default Test
