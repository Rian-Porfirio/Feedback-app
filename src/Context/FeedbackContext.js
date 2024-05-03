import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const deleteFeedback = async (id) => {
    await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "DELETE",
    });

    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const updateFeedback = async (id, updateFeedback) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFeedback),
    });

    const data = await response.json();

    setFeedback((item) => (item.id === id ? data : item));

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const addFeedback = async (newFeedback) => {
    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      const data = await response.json();

      setFeedback([data, ...feedback]);
    } catch (error) {
      console.log("Erro: " + error);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const editFeedback = (feedback) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
