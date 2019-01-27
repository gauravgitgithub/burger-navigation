import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MenuButton from './MenuButton';
import Menu from './Menu';
import './index.css'
class MenuContainer extends React.Component {
  constructor(props, context) {
  super(props, context);
 
  this.state = {
    visible: false
  };
 this.handleMouseDown = this.handleMouseDown.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
}

componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
}

componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
}



handleMouseDown=(e) =>{
    //e.stopPropgation();
    this.toggleMenu();
    

  }
 
toggleMenu =(e) => {
  
  this.setState({
      visible: !this.state.visible
  });
}

handleClickOutside = (e) => {
    const domNode = ReactDOM.findDOMNode(this.App);

    if (!domNode || !domNode.contains(e.target)) {
        this.setState({
            visible : false
        });
    }
}

  render() {
    return (
      <div>
      <MenuButton handleMouseDown={this.handleMouseDown}/><p> Why wait ! Grab yours today ! </p>
        <Menu 
          menuVisibility={this.state.visible}/>
      <div className="App">
        
        <div id="burger-types">
        <img src={require('./images/burger2.jpg')} width="80%" height="50%"></img>
        </div>
        
          <h2> Hello foodies ! </h2><img src={require('./images/burger1.jpg')}></img>
          <h3> Feeling hungry ! Make this sunday adventurous with our new Burger Recipes </h3>
          <p> Click on above button to show select yours </p>
        
      </div>
      </div>
    );
  }
}
 
export default MenuContainer;
