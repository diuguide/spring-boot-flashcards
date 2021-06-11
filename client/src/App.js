import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./components/Main/NavBar";
import QCard from "./components/Card";
import AddCard from "./components/Forms/AddCard";
import { useDispatch, useSelector } from "react-redux";
import {
  flipCard,
  nextCard,
  prevCard,
  resetCount,
  cardRepoState,
} from "./features/cardRepo/cardRepoSlice";
import Loader from "./components/Loader";
import "./scss/App.scss";

function App() {
  const dispatch = useDispatch();
  const repo = useSelector(cardRepoState);

  const handlePrev = (e) => {
    if (!repo.count === 0) {
      dispatch(prevCard());
    }
  };

  const handleFlip = (e) => {
    dispatch(flipCard());
  };

  const handleNext = (e) => {
    dispatch(nextCard());
  };

  if (repo.count === repo.cards.length) {
    dispatch(resetCount());
  }

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
          {repo.status && !repo.showAddCard && (
            <>
              <QCard />
              <div className="bottomRow">
                <div onClick={handlePrev} className="btn-prev">
                  &lt;
                </div>

                <div onClick={handleFlip} className="btn-flip">
                  FLIP
                </div>

                <div onClick={handleNext} className="btn-next">
                  &gt;
                </div>
              </div>
            </>
          )}
          {repo.showAddCard && !repo.status && <AddCard />}
          {repo.isLoading && <Loader />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
