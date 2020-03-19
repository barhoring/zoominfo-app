import React, { useState, useEffect } from "react";
import QuesionsContainer from "./QuesionsContainer";
import QuestionsNav from "./QuestionsNav";

const Questions = () => {
  const [hasError, setErrors] = useState(false);
  const [questions, setQuestions] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const checkCorrect = answerString => {
    debugger;
    const isCorrect =
      correctAnswers[questionIndex].correctString == answerString;
    setIsAnswerCorrect(isCorrect);
  };

  const uri =
    "https://my-json-server.typicode.com/barhoring/fake-server/questions";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(uri);
      res
        .json()
        .then(res => {
          setCorrectAnswers(
            res.map(q => {
              return { id: q.id, correctString: q.options[0] };
            })
          );
          let shuffledQuestions = res.map(question => {
            let { options } = question;
            options = shuffle(options);
            question.options = options;
            return question;
          });
          setQuestions(shuffledQuestions);
        })
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []); // [] means the shuffle will occur for every refresh

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        border: "solid"
      }}
    >
      {Object.keys(questions).length > 0 ? (
        <QuesionsContainer
          {...questions[questionIndex]}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          isAnswerCorrect={isAnswerCorrect}
        />
      ) : null}

      <p>
        <QuestionsNav
          questions={questions}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          checkCorrect={checkCorrect}
          isAnswerCorrect={isAnswerCorrect}
          setIsAnswerCorrect={setIsAnswerCorrect}
        />
      </p>
    </div>
  );
};

const shuffle = unshuffled => {
  return unshuffled
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
};

export default Questions;
