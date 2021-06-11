import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCard, cardRepoState } from "../../../features/cardRepo/cardRepoSlice";
import { useState } from "react";

const AddCard = () => {
  const dispatch = useDispatch();
  const repo = useSelector(cardRepoState);

  const [card, setCard] = useState({
    question: "",
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
      dispatch(addCard(card));
      setCard({ question: "", answer: "" });
  };

  return (
    <Form className="d-flex">
      <Form.Group controlId="formBasicQuestion">
        <Form.Control
          type="text"
          name="question"
          value={card.question}
          onChange={handleChange}
          placeholder="Question"
        />
      </Form.Group>
      <Form.Group controlId="formBasicAnswer">
        <Form.Control
          type="text"
          name="answer"
          value={card.answer}
          onChange={handleChange}
          placeholder="Answer"
        />
      </Form.Group>
      <Button id="btn-addCard" onClick={handleClick}>
        Add
      </Button>
    </Form>
  );
};

export default AddCard;
