import React, { Component } from 'react';
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


class Menu extends Component{

  constructor(props){
    super(props);
  }

  render(){
  return (
    <div>
      <Navbar className="nav-color" light expand="md">
        <NavbarBrand href="/">JobList</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Post Internship</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Dashboard </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
            <Nav className="justify-content-end" navbar>
                <div className="row">
                    <NavItem>
                        <NavLink href="/components/">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Sign up</NavLink>
                    </NavItem>
                </div>
            </Nav>
          </Navbar>
    </div>
    );
  }

}

export default Menu;
