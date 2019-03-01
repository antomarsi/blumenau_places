import React, { Component } from "react";
import MapContainer from "./Components/MapContainer";
import { Container, Col, Row } from "reactstrap";
import TopBar from "./Components/TopBar";

class App extends Component {
  state = {
    isOpen: false,
    center: {
      lat: -26.9187,
      lng: -49.066
    }
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const locations = [];
    return (
      <div>
        <TopBar locations={locations} />
        <Container fluid>
          <Row>
            <Col xs="12">
              <MapContainer
                center={this.state.center}
                apiKey="AIzaSyDlH8Id0Zsx_UuWS6nXc5K1ExPq5-U6Auw"
                language="pt-BR"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
