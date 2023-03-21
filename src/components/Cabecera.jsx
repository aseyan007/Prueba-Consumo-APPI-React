import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import imagen from "../components/tragoAzul.png";

function Cabecera() {
  return (
    <div>
      <Navbar className="cabecera">
        <Container className="container">
          <Navbar.Brand className="textoCabecera">
            <img className="imagenHeader" src={imagen} alt="" />
            El Cocktelazo
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    </div>
  );
}

export default Cabecera;
