import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import NewMarker from "./NewMarker";
import PropTypes from "prop-types";
import "./MapContainer.css";

class MapContainer extends Component {
  onSelectMaker = place => {
    const { filterhandler, selectPlaceHandle } = this.props;
    filterhandler(place.name);
    selectPlaceHandle(place.id);
  };

  render = () => {
    const { center, apiKey, places, selectedPlace } = this.props;
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={16}
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

MapContainer.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  apiKey: PropTypes.string.isRequired,
  places: PropTypes.array,
  selectedPlace: PropTypes.object
};

export default MapContainer;
