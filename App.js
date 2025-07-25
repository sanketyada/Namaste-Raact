import React from "react"
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "Head" }, "First React Heading")
console.log(heading)

const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(heading)