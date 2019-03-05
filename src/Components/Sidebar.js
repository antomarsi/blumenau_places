import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

class Sidebar extends Component {

  render() {
    const { places, selectPlaceHandle, selectedPlace } = this.props;
    return (
      <div style={{ height: "94.6vh", overflowY: "auto" }}>
        {places.map(place => (
          <Card
            outline
            color={place.id === selectedPlace ? "success" : ""}
            key={place.id}
            id={place.id}
            style={{ width: "100%", marginBottom: "1rem" }}
            onClick={() => selectPlaceHandle(place.id)}
          >
            <CardHeader>{place.name}</CardHeader>
            <CardBody>
              {place.image_url && place.image_url && (
                <CardImg
                  top
                  width="100%"
                  src={place.image_url}
                  alt={place.name}
                />
              )}
              <CardTitle>{`${place.location.address1}`}</CardTitle>
              <CardTitle>{`${place.location.address2}`}</CardTitle>
              <CardTitle>{`${place.location.address3}`}</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default Sidebar;
