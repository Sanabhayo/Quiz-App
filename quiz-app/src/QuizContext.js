import { createContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        selectedAnswers,
        setSelectedAnswers,
        activeQuestion,
        setActiveQuestion,
        result,
        setResult,
        showResult,
        setShowResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext };
