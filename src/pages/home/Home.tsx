import React from "react";
import LibraryImage from "../../assests/images/libraryimage.png"
import {Col, Image, Row} from "react-bootstrap";
const Home = () => {

  return (
    <Row className="p-0 home">
      <Col xs={12}>
        <h1 >MyLibrary</h1>
      </Col>
      <Col xs={12}>
        <Image src={LibraryImage} className="img"></Image>
      </Col>
      <Col xs={12} className="text-end me-5 pe-5">
        Photo Credit
      </Col>
    </Row>

  )
}

export default Home;