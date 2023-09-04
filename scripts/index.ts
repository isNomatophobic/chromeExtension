import React from "react"
import ReactDOM from "react-dom"

import Test from "./test"

var p = document.createElement("p")
ReactDOM.render(React.createElement(Test, null), p)
var body = document.querySelector("body")
body.appendChild(p)
