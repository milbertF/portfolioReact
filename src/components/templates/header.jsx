import React, { Component } from "react";
import "./../styles/header.css";
import milbertLogo from "./../images/milbertLogo.png";
import Logo from "./../images/logoSvgPortfolio.svg";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false, // State for toggling menu
    };
  }

  // Function to toggle the menu
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div className="headerWhole">
        <p>
          <img src={Logo} alt="" />
          <span className="span1">M</span>
          <span className="span2">I</span>
          <span className="span3">L</span>
          <span className="span4">B</span>
          <span className="span5">E</span>
          <span className="span6">R</span>
          <span className="span7">T</span>
        </p>
        {/* <img src={milbertLogo} alt="" /> */}
        <div className="navNor">
          <li>
            <ul>About</ul>
            <ul>Skills</ul>
            <ul>Projects</ul>
            <ul>Blog</ul>
            <ul>Contact</ul>
          </li>
          {/* Burger Icon with onClick event */}
          <i className="fa-solid fa-bars" onClick={this.toggleMenu}></i>
        </div>

        {/* Responsive Nav - Show/Hide Based on State */}
        <div
          className="navRes"
          id="navRes"
          style={{ display: this.state.menuOpen ? "flex" : "none" }}
        >
          <li>
            <ul>About</ul>
            <ul>Skills</ul>
            <ul>Projects</ul>
            <ul>Blog</ul>
            <ul>Contact</ul>
          </li>
        </div>
      </div>
    );
  }
}

export default Header;
