import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Col,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

function Maquina({ maquina }) {
  const [showModal, setShowModal] = useState(false);
  const [reservada, setReservada] = useState(false);
  const handleClose = () => setShowModal(false);

  const today = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date());

  const [fieldA, setFieldA] = useState('');
    const [fieldB, setFieldB] = useState('');

    function checkAndRegister() {
        if (fieldA !== "" && fieldB !== "") {
            setReservada(true)
        } else {
            alert("Rellene todos los campos antes de reservar la maquina.")
        }
    }

  return (
    <>
      <Col sm={12} md={6} lg={2}>
        <Card style={{ marginTop: "20px", marginBottom: "15px" }}>
          <CardBody>
            <CardImg src={maquina.foto} alt="Card image maquinas" />
            <CardTitle>{maquina.nom_maquina}</CardTitle>
            <CardText>{maquina.modelo}</CardText>
            <CardText>{maquina.precio}</CardText>
            <button
              type="button"
              class="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#machinaryPopup"
              onClick={() => setShowModal(!showModal)}
            >
              Alquilar
            </button>
          </CardBody>
        </Card>
      </Col>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "#9e9e9e" }}>RESERVAR</h1>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={maquina.foto}
              alt="imagen maquina"
              style={{ width: "70%" }}
            />
          </div>

          <h2 style={{ color: "#6e6b6b" }}>{maquina.nom_maquina}</h2>
          <h3>{maquina.modelo}</h3>
          <img
            src="/img/machinaryPictures/startRating.png"
            alt="Star rating"
            style={{ width: "40%", marginLeft: "-4%", marginTop: "-10%" }}
          />

          <h5>{maquina.precio}</h5>

          {/* Datos al registrar*/}
          {!reservada ? (
            <>
              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold" }}>Nombre</label>
                <input
                  type="text"
                  placeholder="Introduce tu nombre"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}

                  onChange={(e) => setFieldA(e.target.value)}
                />
              </div>

              <div style={{ marginTop: "10px" }}>
                <label style={{ fontWeight: "bold" }}>Nº de pulsera</label>
                <input
                  type="text"
                  placeholder="Introduce tu Nº de pulsera"
                  style={{
                    width: "100%",
                    padding: "8px",
                    margin: "5px 0",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}

                  onChange={(e) => setFieldB(e.target.value)}
                  />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#ccc8c8",
                    color: "#000",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}

                  onClick={() => checkAndRegister()}
                >
                  Reservar
                </button>
              </div>
            </>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <h2 style={{color: "#6e6b6b"}}> MAQUINA RESERVADA</h2>
              <h2>{today}</h2>
              <button 
              onClick={handleClose}
              
              style={{
                backgroundColor: "#ccc8c8",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              >Volver</button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Maquina;
