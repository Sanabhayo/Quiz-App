import React, { useContext } from "react";
import { QuizContext } from "./QuizContext";
import "./App.css";

const questions = [
  {
    question: "What is React JS?",
    options: [
      "A backend framework",
      "A frontend library for building user interfaces",
      "A database management system",
      "A mobile app development framework",
    ],
    answer: "A frontend library for building user interfaces",
  },
  {
    question: "What is the purpose of the useState hook?",
    options: [
      "To handle side effects",
      " To manage state in functional components",
      "To create a new React app",
      "To optimize performance",
    ],
    answer: "To manage state in functional components",
  },
  {
    question: "What is JSX?",
    options: [
      "A JavaScript library for making API calls",
      "A syntax extension for JavaScript that allows HTML-like syntax",
      "A CSS preprocessor",
      "A backend framework",
    ],
    answer: "A syntax extension for JavaScript that allows HTML-like syntax",
  },
  {
    question: "How do you handle events in React?",
    options: [
      "Using event listeners",
      "Using the onClick attribute",
      "Using a third-party library",
      "Using a framework",
    ],
    answer: "Using the onClick attribute",
  },
  {
    question: "What is the difference between state and props?",
    options: [
      " State is used for static data, while props are used for dynamic data",
      "State is used for dynamic data, while props are used for static data",
      "State is used for parent-child communication, while props are used for child-parent communication",
      "State is used for component-specific data, while props are used for data passed from a parent component",
    ],
    answer:
      "State is used for component-specific data, while props are used for data passed from a parent component",
  },
];

const QuizApp = () => {
  const {
    selectedAnswers,
    setSelectedAnswers,
    activeQuestion,
    setActiveQuestion,
    result,
    setResult,
    showResult,
    setShowResult,
  } = useContext(QuizContext);

  const handleOptionChange = (event) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [activeQuestion]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
      calculateResult();
    }
  };

  const calculateResult = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });
    setResult((prev) => ({ ...prev, score }));
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Quiz App</h1>
      {showResult ? (
        <div className="quiz-result">
          <h2>Quiz Finished!</h2>
          <p>
            Your Score: {result.score} / {questions.length}
          </p>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question}{" "}
                {selectedAnswers[index] === question.answer && (
                  <span style={{ color: "green" }}> ✔️ </span>
                )}
                {selectedAnswers[index] !== question.answer &&
                  selectedAnswers[index] !== undefined && (
                    <span style={{ color: "red" }}>❌</span>
                  )}
                {selectedAnswers[index] === undefined && (
                  <span style={{ color: "gray" }}>Not Attempted</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="quiz-question">
            {questions[activeQuestion].question}
          </h2>
          <ul className="quiz-options">
            {questions[activeQuestion].options.map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswers[activeQuestion] === option}
                  onChange={handleOptionChange}
                />
                {option}
              </li>
            ))}
          </ul>
          <button className="quiz-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
