import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

var rootContainer = document.createElement("div")
const root = createRoot(rootContainer)
root.render(<App />)
