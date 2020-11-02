import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faShoppingBasket,faInfoCircle,faUserPlus,faSignInAlt,faBriefcase,faUserAlt} from '@fortawesome/free-solid-svg-icons'
  
  const Home = <FontAwesomeIcon icon={faHome} />
  const Offers = <FontAwesomeIcon icon={faShoppingBasket} />
  const About = <FontAwesomeIcon icon={faInfoCircle} />
  const Login = <FontAwesomeIcon icon={faUserPlus} />
  const SignUp = <FontAwesomeIcon icon={faSignInAlt} />
  const FreeLancer =  <FontAwesomeIcon icon={faBriefcase} />
  const Client =  <FontAwesomeIcon icon={faUserAlt} />

class NavbarUA extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isOpen:false
        }
        this.toggle=this.toggle.bind(this)
    }
toggle(){
     this.setState({isOpen:!this.state.isOpen});
    }
render() {
        return <div>
    <div >
        <Navbar color="light" light expand="md" id="zindexnav">
          <NavbarBrand href="/">UnlimitedArt</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>{Home} <Link to="/">Home</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>{Offers} Offers
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">{About} About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 {Login} SignUp
                </DropdownToggle>
                <DropdownMenu right>
                <Link to="/FreeLancerSignup">   <DropdownItem>
                {FreeLancer} SignUp As FreeLancer
                  </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to="/ClientSignup">
                  <DropdownItem>
                 {Client} SignUp As Client
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 {SignUp} Login
                </DropdownToggle>
                <DropdownMenu right>
                <Link to="/FreelancerLogin">
                  <DropdownItem>
                  {FreeLancer} Login As FreeLancer
                  </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem>
                  {Client} <Link to="/ClientLogin">Login As Client</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
        </div>
  }
}

  
  export default NavbarUA;
