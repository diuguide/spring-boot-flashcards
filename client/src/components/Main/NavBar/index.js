import { Row, Col } from "react-bootstrap";

const NavBar = () => {
  return (
    <Col
      lg={2}
      style={{ height: "70vh" }}
      className="bg-dark d-flex align-items-end justify-content-end"
    >
      <div className="btn-container">
        <div className="addCard">Add Card</div>
        <div className="login">Login</div>
      </div>
    </Col>
  );
};

export default NavBar;
