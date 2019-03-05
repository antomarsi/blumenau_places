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
  onChangeHandler = (places) => {
    const { selectPlaceHandle, filterhandler } = this.props;
    if (places.length > 0) {
      selectPlaceHandle(places[0].id);
      filterhandler(places[0].name);
    } else {
      selectPlaceHandle(null);
    }
  }

  render = () => {
    const {places, filterhandler } = this.props;
    const filterBy = ['name'];
    return (
      <header>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand style={{ color: "white" }}>
            Vizinhança Blumenau
          </NavbarBrand>
          
          <Typeahead
            className="d-none d-sm-block"
            id="search-bar"
            onChange={(data) => this.onChangeHandler(data)}
            onInputChange={(input) => filterhandler(input)}
            options={places}
            filterBy={filterBy}
            labelKey="name"
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
