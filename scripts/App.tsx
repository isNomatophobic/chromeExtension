import React, { useEffect } from "react"

import { ImageBlur } from "./ImageBlur"

console.log(chrome.runtime)
const App = () => {
  console.log(document.getElementById("main"))

  useEffect(() => {
    const main = document.getElementById("main")
  }, [])
  return <ImageBlur />
}
const T = () => {
  return <div style={{ width: "500px", height: "500px" }} />
}
export default App
