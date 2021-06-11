import { Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { cardRepoState } from '../../features/cardRepo/cardRepoSlice';

const QCard = () => {

    const repo = useSelector(cardRepoState);

    return (
        <Row>
            <Col>
            TEST TEXT
            </Col>
        </Row>
    )
}

export default QCard;