import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import bigStar from "../assets/Star 1.png";

function DevicePage() {
  const device = {
    id: 3,
    name: "Iphone 12 pro",
    price: 2500,
    rating: 5,
    img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процессор", description: "Пентиум 3" },
    { id: 4, title: "Кол-во ядер", description: "2" },
    { id: 5, title: "Аккумулятор", description: "4000" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} грн.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики:</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default DevicePage;
