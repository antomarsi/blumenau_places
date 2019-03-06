import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./NewMarker.css";

class NewMarker extends Component {

  render = () => {
    const { text, selected, selectPlaceHandle } = this.props;
    return (
      <div
        title={text}
        className={selected ? "marker selected" : "marker"}
        onClick={() => selectPlaceHandle()}
        >
            <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
      </div>
    );
  }
}

export default NewMarker;
