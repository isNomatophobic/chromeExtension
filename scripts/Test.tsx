import React, { useEffect } from "react"

console.log(chrome.runtime)
const Test = () => {
  useEffect(() => {
    const test = document.getElementsByTagName("div")
  }, [])
  return <>Hello!</>
}
export default Test
