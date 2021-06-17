import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import AddCard from "./components/Forms/AddCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardSwitch from "./components/CardSwitch";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import "./scss/App.scss";

function App() {
  return (
    <Router>
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
            <Switch>
              <Route path="/add">
                <AddCard />
              </Route>
              <Route path="/start">
                <CardSwitch />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
