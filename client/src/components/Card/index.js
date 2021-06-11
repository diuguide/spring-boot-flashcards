import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { cardRepoState } from "../../features/cardRepo/cardRepoSlice";

const QCard = () => {
  const repo = useSelector(cardRepoState);

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
