import { useEffect } from "react"

const images = document.getElementsByTagName("img")
const observe = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = "blur(20px)"
  }
}

export const ImageBlur = () => {
  useEffect(() => {
    observe()
  }, [])
  return null
}
