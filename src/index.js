import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Car extends Component{
  render()
  {
    return(
      <h1> Hi ,I am in {this.props.color} Car </h1>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Car color="red" />, rootElement);
