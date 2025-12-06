// React Icons
import { GiRock } from "react-icons/gi";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { BsShield } from "react-icons/bs";

import { FaRegFaceSadTear } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";

// React
import { useContext } from "react";

// Context
import {
  PlayerChoiceContext,
  ResultContext,
  ScoresContext,
  ShowDashBoardContext,
  ShowResultDisplayContext,
} from "../Context/GameContext";

const ResultDisplay = () => {
  const { setPerson } = useContext(PlayerChoiceContext);
  const { setShowResult } = useContext(ShowResultDisplayContext);
  const { setShowDashb } = useContext(ShowDashBoardContext);
  const { Results, setResults } = useContext(ResultContext);
  const { setPlayerScore, setComputerScore } = useContext(ScoresContext);

  // Reset Function
  function ResetGame() {
    setPerson("");
    setResults({});
    setShowDashb(false);
    setShowResult(false);
    setPlayerScore(0);
    setComputerScore(0);
  }

  // Icons on choice
  function DisplayPlayerRslt() {
    if (Results.Player === "rock") {
      return <GiRock className="text-blue-500 text-5xl" />;
    } else if (Results.Player === "paper") {
      return <FaHandPaper className="text-blue-500 text-5xl" />;
    } else if (Results.Player === "scissors") {
      return <FaHandScissors className="text-blue-500 text-5xl" />;
    } else {
      return <></>;
    }
  }
  function DisplayComputerRslt() {
    if (Results.ComputerChoice === "rock") {
      return <GiRock className="text-teal-500 text-5xl" />;
    } else if (Results.ComputerChoice === "paper") {
      return <FaHandPaper className="text-teal-500 text-5xl" />;
    } else if (Results.ComputerChoice === "scissors") {
      return <FaHandScissors className="text-teal-500 text-5xl" />;
    } else {
      return <></>;
    }
  }

  // Message Display
  function DisplayMessageRslt() {
    if (Results.Score === "win") {
      return (
        <div className="flex gap-2.5 items-center bg-green-500 py-2 px-3 rounded-xl">
          <GiPodiumWinner className="text-4xl" />
          <h1 className="text-3xl font-bold ">You Win!</h1>
        </div>
      );
    } else if (Results.Score === "loss") {
      return (
        <div className="flex gap-2.5 items-center bg-red-500 py-2 px-3 rounded-xl">
          <FaRegFaceSadTear className="text-4xl" />
          <h1 className="text-2xl font-bold">You Lose!</h1>
        </div>
      );
    } else if (Results.Score === "tie") {
      return (
        <div className="flex gap-2.5 items-center bg-gray-400 py-2 px-3 rounded-xl">
          <h1 className="text-3xl font-bold">It's a Tie!</h1>
        </div>
      );
    } else {
      return <></>;
    }
  }
  return (
    <div className="CompCard">
      <div className="flex items-center justify-around mb-6 lg:flex-row flex-col gap-10 lg:ml-4">
        <div className="flex flex-col items-center gap-4">
          <p>Your Choice</p>
          {/*  */}
          {DisplayPlayerRslt()}
          <p className="text-blue-500">{Results.Player}</p>
          {/*  */}
        </div>
        <div className="flex flex-col items-center gap-8">
          {DisplayMessageRslt()}

          <button
            className="bg-gray-300 flex gap-2 items-center rounded-xl px-2.5 py-1.5 cursor-pointer shadow-xl transition-all ease-in hover:-translate-y-1"
            onClick={() => {
              setShowResult(false);
            }}
          >
            <VscDebugRestart />
            Play Again
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p>Computer's Choice</p>
          {DisplayComputerRslt()}
          <p className="text-teal-500">{Results.ComputerChoice}</p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:mr-10">
        <button
          className="flex gap-2.5 items-center bg-teal-300 rounded-xl px-2.5 py-2 cursor-pointer shadow-xl transition-all ease-in hover:scale-110"
          onClick={ResetGame}
        >
          <BsShield />
          Reset All Scores
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
