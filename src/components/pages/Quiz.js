import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import React from "react";

export default function quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>

      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
