import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./components/Main/NavBar";
import QCard from "./components/Card";
import AddCard from "./components/Forms/AddCard";
import "./scss/App.scss";

function App() {
  return (
    <Container>
      <Row
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <NavBar />
        <Col
          lg={6}
          style={{ height: "70vh" }}
          className="bg-light d-flex justify-content-center align-items-center"
        >
          <QCard />
          <div className="bottomRow">
            <div className="btn-prev">&lt;</div>
            <div className="btn-flip">FLIP</div>
            <div className="btn-next">&gt;</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <AddCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
