import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import NewMarker from "./NewMarker";
import PropTypes from "prop-types";
import "./MapContainer.css";

class MapContainer extends Component {
  onSelectMaker = place => {
    const { filterhandler, selectPlaceHandle, selectedPlace } = this.props;
    selectPlaceHandle(place.id !== selectedPlace ? place.id : null);
    filterhandler(place.id !== selectedPlace ? place.name : "");
  };

  onApiLoaded = (map, maps) => {
    maps.event.addListener(map, "tilesloaded", function() {
      [].slice
        .apply(document.querySelectorAll("#map button"))
        .forEach(function(item) {
          item.setAttribute("tabindex", "-1");
        });
      [].slice
        .apply(document.querySelectorAll("#map a"))
        .forEach(function(item) {
          item.setAttribute("tabindex", "-1");
        });
    });
    this.props.onGoogleMapApiLoad();
  };

  render = () => {
    const { center, apiKey, places, selectedPlace } = this.props;
    return (
      <div className="map" id="map" tabIndex="-1">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          yesIWantToUseGoogleMapApiInternals
          tabIndex="-1"
          defaultZoom={16}
          onGoogleApiLoaded={({ map, maps }) => this.onApiLoaded(map, maps)}
        >
          {places.map(place => (
            <NewMarker
              key={place.id}
              text={place.name}
              tabIndex="-1"
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
  onGoogleMapApiLoad: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
  places: PropTypes.array,
  selectedPlace: PropTypes.object
};

export default MapContainer;
