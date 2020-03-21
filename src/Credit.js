import React from "react";

import github from "./github.svg";
import stackoverflow from "./stackoverflow.svg";

const Credit = () => {
  return (
    <div>
      <div style={{ fontSize: "17px" }}>Created by Bar Horing Amir</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://stackoverflow.com/users/6683217/bar-horing">
          <img src={stackoverflow} className="creditIcon" alt="stackoverflow" />
        </a>
        <a href="https://github.com/barhoring">
          <img src={github} className="creditIcon" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Credit;
