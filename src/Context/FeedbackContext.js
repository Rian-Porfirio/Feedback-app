import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updatedFeedback } : feedback
      )
    );
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  const editFeedback = (feedback) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  };
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "blablalbablablabala",
      rating: 10,
    },
  ]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
