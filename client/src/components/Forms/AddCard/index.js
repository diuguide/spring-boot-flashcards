import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCard, cardRepoState } from "../../../features/cardRepo/cardRepoSlice";
import { useState } from "react";
import { addCardToDb } from "../../../Utilities/api";

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
    addCardToDb(card).then(res => {
      dispatch(addCard(card));
      setCard({ question: "", answer: "" });
    }).catch(err => console.log(err));
      
  };

  return (
    <Form className="w-100">
      <Form.Group>
        <Form.Control
          type="text"
          name="question"
          value={card.question}
          onChange={handleChange}
          placeholder="Question"
        />
      </Form.Group>
      <Form.Group >
        <Form.Control
          as="textarea"
          rows={5}
          name="answer"
          value={card.answer}
          onChange={handleChange}
          placeholder="Answer"
        />
      </Form.Group>
      <Button variant="success" id="btn-addCard" onClick={handleClick}>
        Add
      </Button>
    </Form>
  );
};

export default AddCard;
