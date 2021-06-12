import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  startLearning,
  showAddCard,
  isLoading,
  isLoaded,
  addCard,
} from "../../../features/cardRepo/cardRepoSlice";
import { getAllQuestions } from "../../../Utilities/api";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(showAddCard());
  };

  const handleLogin = () => {};

  const handleStart = () => {
    dispatch(isLoading());
    getAllQuestions()
      .then((res) => {
        dispatch(addCard({ data: res }));
        dispatch(isLoaded());
        dispatch(startLearning());
      })
      .catch((err) => console.log(err));
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
        <div onClick={handleAddCard} className="addCard">
          Add Card
        </div>
        <div onClick={handleLogin} className="login">
          Login
        </div>
        <div onClick={handleStart} className="start">
          Start
        </div>
      </div>
    </Col>
  );
};

export default NavBar;
