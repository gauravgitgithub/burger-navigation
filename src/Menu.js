import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <center><img src={require('./images/mcd.png')} width="80%"></img></center>
        <h2><a href="/veg">Veg</a></h2>
        <h2><a href="/chicken">Chicken</a></h2>
        <h2><a href="/cheese">Cheese</a></h2>
        <h2><a href="/McSpecial">McDonalds Special</a></h2>
        <img src={require('./images/mcdoffer.png')} width="100%"></img>

      
      </div>
    );
  }
}
 
export default Menu;