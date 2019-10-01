import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap/";

const Timer = props => {
  let { duration, time } = props;
  let progress = (100 / duration) * time;

  return (
    <div>
      <ProgressBar variant={props.color} now={progress} />
    </div>
  );
};

export default Timer;
