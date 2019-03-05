import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import NewMarker from "./NewMarker";

class MapContainer extends Component {
  handleApiLoaded = (map, maps) => {
  };
  onSelectMaker = (place) => {
    const {filterhandler, selectPlaceHandle} = this.props;
    filterhandler(place.name);
    selectPlaceHandle(place.id);
  }
  render = () => {
    const { center, apiKey, places, selectedPlace } = this.props;
    return (
      <div style={{ height: "94.6vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={16}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          {places.map(place => (
            <NewMarker
              key={place.id}
              text={place.name}
              lat={place.coordinates.latitude}
              lng={place.coordinates.longitude}
              selected={place.id === selectedPlace}
              selectPlaceHandle={() => this.onSelectMaker(place)}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  };
}

export default MapContainer;
