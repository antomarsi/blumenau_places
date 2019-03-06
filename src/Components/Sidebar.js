import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardImg } from "reactstrap";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    const { places, selectPlaceHandle, selectedPlace } = this.props;
    return (
      <div className="sidebar">
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
            </CardBody>
          </Card>
        ))}
        {places.length > 0 && (
          <Card
            outline
            color="danger"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            <CardHeader>Nenhum resultado encontrado</CardHeader>
          </Card>
        )}
      </div>
    );
  }
}


export default Sidebar;
