import { useState, useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const [feedback, setFeedback] = useState(() => {
  //   const savedFeedback = window.localStorage.getItem(
  //     "saved-feedback",
  //     JSON.stringify({ feedback })
  //   );

  //   if (savedFeedback !== null) {
  //     console.log(savedFeedback);
  //   }

  //   return { good: 0, neutral: 0, bad: 0 };
  // });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify({ feedback }));
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
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

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
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
    </>
  );
}

export default App;
