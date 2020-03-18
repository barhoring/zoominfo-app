import React from "react";
import "./Questions.css";

function QuesionsContainer(props) {
  const { content, options, setSelectedAnswer } = props;

  return (
    <>
      <h2>{content}</h2>
      {options.map((option, index) => {
        return (
          <button
            onClick={() => {
              setSelectedAnswer(index);
            }}
            key={option}
            className="Rectangle"
          >
            <div className="ReactangleSmall OptionText">{option}</div>
          </button>
        );
      })}
      {/* <QuestionsNav options={options} /> */}
    </>
  );
}

export default QuesionsContainer;
