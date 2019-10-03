import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap/";

const Timer = ({ duration, time, color }) => {
  const progress = (100 / duration) * time;

  return (
    <>
      <p className="text-center">Czas na zapoznanie się z pytaniem:</p>
      <ProgressBar variant={color} now={progress} />
    </>
  );
};

export default Timer;
