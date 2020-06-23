import React from "react";
import "./NavBar.css";
import Logo from "./Logo.png";
let active1 = "active",
  active2 = "nav-option",
  active3 = "nav-option";
export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if (event.target.value === "search") {
      active1 = "active";
      active2 = "nav-option";
      active3 = "nav-option";
    } else if (event.target.value === "battle") {
      active1 = "nav-option";
      active2 = "active";
      active3 = "nav-option";
    } else {
      active1 = "nav-option";
      active2 = "nav-option";
      active3 = "active";
    }
    this.props.onClick(event.target.value);
  }
  render() {
    return (
      <div className='navbar-container'>
        <button value='search' onClick={this.handleClick} className={active1}>
          Search
        </button>
        <button value='battle' onClick={this.handleClick} className={active2}>
          Battle
        </button>
        <button value='about' onClick={this.handleClick} className={active3}>
          About
        </button>
        <div className='logo-div'>
          <img src={Logo} className='logo' />
        </div>
      </div>
    );
  }
}
