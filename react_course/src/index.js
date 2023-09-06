import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />

  /*React.createElement(
    "button",
    {
      onClick: () => console.log("CLICK"),
    }, "жмакни меня"
  )*/
);
