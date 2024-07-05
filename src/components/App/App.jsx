import { useState, useEffect } from "react";
import "./App.module.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Modal from "../Modal/Modal";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem("saved-feedback")
    );

    if (savedFeedback !== null) {
      return savedFeedback;
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
        openModal={handleOpenModal}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
      {isOpen && <Modal isVisible={isOpen} onClose={handleCloseModal} />}
    </>
  );
}

export default App;
