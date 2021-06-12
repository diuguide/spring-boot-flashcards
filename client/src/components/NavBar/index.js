import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showAddCard } from "../../features/cardRepo/cardRepoSlice";
import { loggedOut } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(showAddCard());
  };

  const handleLogout = () => {
    dispatch(loggedOut());
  };

  return (
    <Col
      lg={2}
      style={{ height: "70vh" }}
      className="bg-light d-flex align-items-end justify-content-end"
    >
      <img
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zindex: "0",
        }}
        alt="banner"
        src="./quality.jpg"
      ></img>
      <div className="btn-container">
        <Link to="/add">
          <div onClick={handleAddCard} className="addCard">
            Add Card
          </div>
        </Link>
        <Link to="/login">
          <div className="login">Login</div>
        </Link>
        <Link to="/register">
          <div className="register">Register</div>
        </Link>
        <div onClick={handleLogout} className="logout">
          Logout
        </div>
        <Link to="/start">
          <div className="start">Start</div>
        </Link>
      </div>
    </Col>
  );
};

export default NavBar;
