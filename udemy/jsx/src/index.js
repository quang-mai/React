// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  // const buttonText = "Click Me!"; //works!
  // const buttonText = 12345;      //works
  // const buttonText = ["Hi", "There"]; //works
  // const buttonText = ["Hi", "There"]; //works!
  const buttonText = { text: "Click me" }; //does not work as React child; must use buttonText.text

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      {/* <button style="background-color: blue; color: white;">Submit</button> */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />, //component created earlier
  document.querySelector("#root") //inside index.html, get the reference of the div with id of 'root'
);
