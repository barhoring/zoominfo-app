import React from "react";
import "./QuestionsNav.css";

function QuestionsNav(props) {
  const { questions, selectedAnswer, questionIndex, setQuestionIndex } = props;
  return (
    <div>
      <div>
        <button className={selectedAnswer ? "okSelected" : "okButton"}>
          <div className="ReactangleSmall okText">OK</div>
        </button>
      </div>
      <div className="row">
        {Object.keys(questions).map((question, index) => (
          <div
            key={question.id}
            className={
              questionIndex == index ? "circle circleCurrent" : "circle"
            }
            onClick={() => {
              setQuestionIndex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsNav;
