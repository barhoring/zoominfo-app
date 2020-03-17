import React from "react";
import "./QuestionsNav.css";

function QuestionsNav(props) {
  const options = props.options;
  return (
    <>
      {options.map(option => (
        <div className="circle"></div>
      ))}
    </>
  );
}

export default QuestionsNav;
