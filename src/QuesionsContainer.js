import React from "react";
import "./Questions.css";

function QuesionsContainer(props) {
  const {
    content,
    options,
    selectedAnswer,
    setSelectedAnswer,
    isAnswerCorrect,
    setIsAnswerCorrect
  } = props;

  let cNames = "";

  if (isAnswerCorrect === true) {
    debugger;
    cNames = "Rectangle RectangleCorrect";
  } else if (isAnswerCorrect === false) {
    cNames = "Rectangle RectangleWrong";
  }

  return (
    <>
      <h2>{content}</h2>
      {options.map((option, index) => {
        return (
          <button
            onClick={() => {
              // don't let user select another answer after revealing the correct answer
              if (isAnswerCorrect != null) return;
              setSelectedAnswer(index);
            }}
            key={option}
            className={
              index == selectedAnswer
                ? cNames || "Rectangle RectangleSelect"
                : "Rectangle"
            }
          >
            <div className="ReactangleSmall OptionText">{option}</div>
          </button>
        );
      })}
    </>
  );
}

export default QuesionsContainer;
