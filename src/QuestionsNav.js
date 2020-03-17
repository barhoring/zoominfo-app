import React from "react";
import "./QuestionsNav.css";

function QuestionsNav(props) {
  const questions = props.questions;
  return (
    <div className="row">
      {Object.keys(questions).map(question => (
        <div className="circle"></div>
      ))}
    </div>
  );
}

export default QuestionsNav;
