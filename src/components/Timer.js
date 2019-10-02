import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap/";

const Timer = props => {
  const { duration, time } = props;
  const progress = (100 / duration) * time;

  return (
    <div>
      <ProgressBar
        variant={props.color}
        now={progress}
        style={{ transitio: "none" }}
      />
    </div>
  );
};

export default Timer;
