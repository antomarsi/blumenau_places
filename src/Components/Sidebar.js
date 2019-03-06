import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardImg } from "reactstrap";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    const { places, selectPlaceHandle, selectedPlace } = this.props;
    return (
      <ul tabIndex="-1" className="sidebar">
        {places.map((place, index) => (
          <li key={place.id} tabIndex="2">
            <Card
              outline
              color={place.id === selectedPlace ? "success" : ""}
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
                {place.location.address1 && (
                  <CardTitle>{`${place.location.address1}`}</CardTitle>
                )}
              </CardBody>
            </Card>
          </li>
        ))}
        {places.length <= 0 && (
          <Card
            outline
            color="danger"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            <CardHeader>Nenhum resultado encontrado</CardHeader>
          </Card>
        )}
      </ul>
    );
  }
}

export default Sidebar;
