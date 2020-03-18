import React, { useState, useEffect } from "react";
import QuesionsContainer from "./QuesionsContainer";
import QuestionsNav from "./QuestionsNav";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

  const uri =
    "https://my-json-server.typicode.com/barhoring/fake-server/questions";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(uri);
      res
        .json()
        .then(res => {
          let shuffledQuestions = res.map(question => {
            let { options } = question;
            options = shuffle(options);
            question.options = options;
            return question;
          });
          setPlanets(shuffledQuestions);
        })
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />

      {Object.keys(planets).length > 0 ? (
        <QuesionsContainer {...planets[questionIndex]} />
      ) : null}

      <span>Has error: {JSON.stringify(hasError)}</span>
      <QuestionsNav
        questions={planets}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
      />
    </div>
  );
};

const shuffle = unshuffled => {
  return unshuffled
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
};

export default Planets;
