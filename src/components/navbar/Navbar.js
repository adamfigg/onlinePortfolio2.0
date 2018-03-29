import React from 'react';
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
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed="sticky">
          <NavbarBrand href="/">Adam Figgat - Web Developer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/*<NavItem>
                <NavLink>
                  <Link to="/About">About</Link>
                </NavLink>
              </NavItem>*/}

              <NavItem>

                <NavLink>
                  <Link to="/Portfolio">Portfolio</Link>
                </NavLink>
              </NavItem>

              <NavItem className="resumeNav">

                <NavLink>
                  <Link to="/Resume">Resume</Link>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}