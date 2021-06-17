import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  cardRepoState,
  resetCount,
} from "../../features/cardRepo/cardRepoSlice";

const QCard = () => {
  const repo = useSelector(cardRepoState);
  const dispatch = useDispatch();

  if (repo.count == repo.cards.length) {
    dispatch(resetCount());
  }

  return (
    <Row>
      {repo.cards.length > 0 && repo.count <= repo.cards.length - 1 ? (
        <Col>
          {repo.side
            ? repo.cards[repo.count].question
            : repo.cards[repo.count].answer}
        </Col>
      ) : (
        <Col>No Cards Available</Col>
      )}
    </Row>
  );
};

export default QCard;
