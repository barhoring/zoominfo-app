import React from "react";

function QuesionsContainer(props) {
  const {
    content,
    options,
    selectedAnswer,
    setSelectedAnswer,
    isAnswerCorrect
  } = props;

  let cNames = "";

  if (isAnswerCorrect === true) {
    cNames = "Rectangle RectangleCorrect";
  } else if (isAnswerCorrect === false) {
    cNames = "Rectangle RectangleWrong";
  }

  return (
    <div>
      <h2>{content}</h2>
      <div className="QuestionsContainer">
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
                index === selectedAnswer
                  ? cNames || "Rectangle RectangleSelect"
                  : "Rectangle"
              }
            >
              <div className="ReactangleSmall OptionText Text">{option}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuesionsContainer;
