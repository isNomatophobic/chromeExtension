import React, { useEffect } from "react"

console.log(document.getElementsByClassName("main"))
const Test = () => {
  useEffect(() => {
    const test = document.getElementsByTagName("div")
    console.log(test)
    console.log(chrome.runtime)
  }, [])
  return <>Hello!</>
}
export default Test
