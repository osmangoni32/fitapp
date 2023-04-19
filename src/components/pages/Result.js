import { useParams, useLocation } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";
import _ from "lodash";
import React from "react";

export default function Result() {
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  console.log(id);
  //const { state } = location;
  const qna  = location.state && location.state.qna;
  console.log("kj");
  console.log(qna);
  const { loading, error, answers } = useAnswers(id);
  console.log(answers);

  function calculate() {
    let score = 0;
    answers.forEach((questions, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      questions.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].option[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if(_.isEqual(correctIndexes,checkedIndexes)){
        score=score+5;
      }
    });
    return score;
  }
  const userScore=calculate();
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>there was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers}/>
        </>
      )}
    </>
  );
}
