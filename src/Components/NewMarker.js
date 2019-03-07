import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./NewMarker.css";

const NewMarker = ({ text, selected, selectPlaceHandle }) => {
  return (
    <div
      title={text}
      className={selected ? "marker selected" : "marker"}
      onClick={() => selectPlaceHandle()}
    >
      <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
    </div>
  );
};

export default NewMarker;
