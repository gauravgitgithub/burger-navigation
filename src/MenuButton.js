import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button id="myButton"
              onMouseDown={this.props.handleMouseDown}>Grab your type</button>
    );
  }
}
 
export default MenuButton;