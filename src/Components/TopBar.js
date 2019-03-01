import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";

class TopBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand style={{ color: "white" }}>
            Vizinhança Blumenau
          </NavbarBrand>
          <Typeahead
            id="search-bar"
            onChange={() => this.props.handleChange}
            options={this.props.locations}
          />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/antomarsi/blumenau_places"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default TopBar;
