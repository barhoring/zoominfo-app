import React from "react";
import "./QuestionsNav.css";

function QuestionsNav(props) {
  const { questions, questionIndex, setQuestionIndex } = props;
  return (
    <div className="row">
      {Object.keys(questions).map((question, index) => (
        <div
          key={question.id}
          className={questionIndex == index ? "circle circleCurrent" : "circle"}
          onClick={() => {
            setQuestionIndex(index);
          }}
        ></div>
      ))}
    </div>
  );
}

export default QuestionsNav;
