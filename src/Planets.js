import React, { useState, useEffect } from "react";
import QuesionsContainer from "./QuesionsContainer";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

  const uri =
    "https://my-json-server.typicode.com/barhoring/fake-server/questions";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(uri);
      // const res = await fetch("https://swapi.co/api/planets/4/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />

      {Object.keys(planets).length > 0 ? (
        <QuesionsContainer {...planets[questionIndex]} />
      ) : null}

      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Planets;
