import React from "react";
import "./QuestionsNav.css";

function QuestionsNav(props) {
  const {
    questions,
    selectedAnswer,
    setSelectedAnswer,
    questionIndex,
    setQuestionIndex,
    checkCorrect,
    isAnswerCorrect,
    setIsAnswerCorrect
  } = props;
  return (
    <div>
      <div>
        <button
          hidden={isAnswerCorrect != null}
          onClick={() => {
            if (selectedAnswer === null) return;
            const finalAnswerString =
              questions[questionIndex].options[selectedAnswer];
            return selectedAnswer != null
              ? checkCorrect(finalAnswerString)
              : null;
          }}
          className={selectedAnswer != null ? "okSelected" : "okButton"}
        >
          <div className="ReactangleSmall okText Text">OK</div>
        </button>

        <button
          hidden={isAnswerCorrect === null}
          className={selectedAnswer != null ? "okSelected" : "okButton"}
          onClick={() => {
            if (
              isAnswerCorrect === null ||
              questionIndex == questions.length - 1
            )
              return;
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer(null);
            setIsAnswerCorrect(null);
          }}
        >
          <div className="ReactangleSmall okText Text">Continue</div>
        </button>
      </div>
      <p>
        <div className="row">
          {Object.keys(questions).map((question, index) => (
            <div
              key={index} // it's ok to use index here
              className={
                questionIndex == index ? "circle circleCurrent" : "circle"
              }
            ></div>
          ))}
        </div>
      </p>
    </div>
  );
}

export default QuestionsNav;
