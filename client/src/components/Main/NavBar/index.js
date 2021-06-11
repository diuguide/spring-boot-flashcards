import { Row, Col } from "react-bootstrap";

const NavBar = () => {
  return (
    <Col
      lg={2}
      style={{ height: "70vh" }}
      className="bg-light d-flex align-items-end justify-content-end"
    >
      <img style={{ position: "absolute", width: "100%", height: "100%", zindex: "0" }}src="./quality.jpg"></img>
      <div className="btn-container">
        <div className="addCard">Add Card</div>
        <div className="login">Login</div>
      </div>
    </Col>
  );
};

export default NavBar;
