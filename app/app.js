// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Main Component
var Routes = require("./config/routes");
console.log(Routes);

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(Routes, document.getElementById("app"));