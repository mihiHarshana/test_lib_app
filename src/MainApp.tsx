import {Col, Container, Row} from "react-bootstrap";
import Home from "./pages/home/Home";
import BookSection from "./pages/book/BookSection";
import AuthorSection from "./pages/author/AuthorSection";

const MainApp = () => {
  return (
    <Container fluid >
      <Row>
        <Col xs={12}>
          <Home />
        </Col>
        <Col xs={6}>
          <BookSection />
        </Col>
        <Col xs={6} >
          <AuthorSection />
        </Col>
      </Row>
    </Container>


  )
}


export default MainApp