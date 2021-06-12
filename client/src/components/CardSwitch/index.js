import { useSelector, useDispatch } from "react-redux";
import {
  cardRepoState,
  prevCard,
  flipCard,
  nextCard,
  addCard,
  isLoaded,
  isLoading,
  startLearning,
} from "../../features/cardRepo/cardRepoSlice";
import QCard from "../Card";
import Loader from "../Loader";
import { useEffect } from "react";
import { getAllQuestions } from "../../Utilities/api";

const CardSwitch = () => {
  useEffect(() => {
     dispatch(isLoading());
    getAllQuestions()
      .then((res) => {
        dispatch(addCard({ data: res }));
        dispatch(isLoaded());
        dispatch(startLearning());
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();
  const repo = useSelector(cardRepoState);

  const handlePrev = (e) => {
    if (!repo.count == 0) {
      dispatch(prevCard());
    }
  };

  const handleFlip = (e) => {
    dispatch(flipCard());
  };

  const handleNext = (e) => {
    dispatch(nextCard());
  };

  return (
    <>
      {repo.isLoading ? (
        <Loader />
      ) : (
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
    </>
  );
};

export default CardSwitch;
