import React, { Component } from "react";
import GoogleMapReact, { GoogleMapMarkers } from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.apiKey }}
          defaultCenter={this.props.center}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={16}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
