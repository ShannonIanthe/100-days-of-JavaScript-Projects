import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is a Shannon?",
      answerOptions: [
        { answerText: "An absolutely lovely person to be around", isCorrect: true },
        { answerText: "Intelligent, wise, beautiful, graceful, witty, laugh-loving, artistic, adventurous, intriguing person.", isCorrect: true },
        { answerText: "A goddess of beauty and love descented from the heavens.", isCorrect: true },
        { answerText: "Someone who is beautiful, inside and out.", isCorrect: true },
      ],
    },
    {
      questionText: "Where was Shannon born?",
      answerOptions: [
        { answerText: "California", isCorrect: false },
        { answerText: "New Jersey", isCorrect: true },
        { answerText: "Puerto Rico", isCorrect: false },
        { answerText: "Egypt", isCorrect: false },
      ],
    },
    {
      questionText: "What is Shannon's favorite color?",
      answerOptions: [
        { answerText: "Pink", isCorrect: false },
        { answerText: "Perfume", isCorrect: false },
        { answerText: "Yellow", isCorrect: true },
        { answerText: "Wingardium Leviosa", isCorrect: false },
      ],
    },
    {
      questionText: "How cool is Shannon?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "Too cool to count!", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
      if(isCorrect ===true) {
        alert('This answer is correct!')
        setScore(score +1)
      }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion +1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
