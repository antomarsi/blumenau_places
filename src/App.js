import React, { Component } from "react";
import MapContainer from "./Components/MapContainer";
import { Container, Col, Row } from "reactstrap";
import TopBar from "./Components/TopBar";
import YelpApi from "./utils.js/YelpApi";
import Sidebar from "./Components/Sidebar";

const backgroundStyle = {
  backgroundColor: "#343a40"
};

const backgroundBigStyle = {
  backgroundColor: "#343a40",
  paddingRight: "0"
};

class App extends Component {
  YELP_API_KEY =
    "QjVC2QvHNdWRktXHpZlxSuWHI9lX1wy_iopCzsyO7HENNSif2t2KuoIymwL5kl5k_YNHNplif_ojGZd-CLPGLVEAaR4BMod20JeCJ4V83N_7N2H2nsVyFlZFe55-XHYx";

  state = {
    isOpen: false,
    center: {
      lat: -26.9187,
      lng: -49.066
    },
    places: [],
    filter: "",
    selectedPlace: null
  };

  onGoogleMapApiLoad = () => {
    let yelp = new YelpApi(this.YELP_API_KEY);
    yelp.findBlumenau().then(yelp_response => {
      this.setState({
        places: yelp_response.businesses.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }),
        center: {
          lat: yelp_response.region.center.latitude,
          lng: yelp_response.region.center.longitude
        }
      });
    });
  }

  setSelectedPlace = placeId => {
    this.setState({ selectedPlace: placeId });
  };
  setFilterPlace = name => {
    this.setState({ filter: name });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const apiKey = "AIzaSyDlH8Id0Zsx_UuWS6nXc5K1ExPq5-U6Auw";
    return (
      <div>
        <TopBar
          places={this.state.places}
          selectPlaceHandle={this.setSelectedPlace}
          filterhandler={this.setFilterPlace}
        />
        <Container fluid>
          <Row>
            <Col xs="12" sm="3" style={backgroundStyle}>
              <Sidebar
                places={this.state.places.filter(place => {
                  return place.name.toLowerCase().includes(this.state.filter.toLowerCase());
                })}
                selectPlaceHandle={this.setSelectedPlace}
                selectedPlace={this.state.selectedPlace}
              />
            </Col>
            <Col xs="12" sm="9" style={backgroundBigStyle}>
              <MapContainer
                tabIndex="-1"
                places={this.state.places.filter(place => {
                  return place.name.toLowerCase().includes(this.state.filter.toLowerCase());
                })}
                center={this.state.center}
                apiKey={apiKey}
                language="pt-BR"
                filterhandler={this.setFilterPlace}
                selectPlaceHandle={this.setSelectedPlace}
                selectedPlace={this.state.selectedPlace}
                onGoogleMapApiLoad={this.onGoogleMapApiLoad}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default App;
