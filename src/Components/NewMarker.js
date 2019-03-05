import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./NewMarker.css";

class NewMarker extends Component {
  state = {
    hover: false
  };

  onMouseEnterHandler = () => {
    this.setState({ hover: true });
  };
  onMouseExitHandler = () => {
    this.setState({ hover: false });
  };

  render = () => {
    const { text, selected, selectPlaceHandle } = this.props;
    const { hover } = this.state;
    return (
      <div
        title={text}
        className={selected ? "marker selected" : "marker"}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseExitHandler}
        onClick={() => selectPlaceHandle()}
        >
            <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
      </div>
    );
  }
}

export default NewMarker;
