// React icons
import { GiRock } from "react-icons/gi";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa6";

// React
import { useContext } from "react";

// Context
import {
  PlayerChoiceContext,
  ShowDashBoardContext,
  ShowResultDisplayContext,
} from "../Context/GameContext";

const GameDisplay = () => {
  const { setPerson } = useContext(PlayerChoiceContext);
  const { setShowResult } = useContext(ShowResultDisplayContext);
  const { setShowDashb } = useContext(ShowDashBoardContext);
  function GameStarter(choice) {
    setPerson(choice);
    setShowDashb(true);
    setShowResult(true);
  }
  return (
    <div className="CompCard">
      <h1 className="mb-7 text-2xl">Make Your Choice!</h1>
      <div className="flex items-center justify-evenly gap-6 px-3.5">
        <div className="GameCard" onClick={() => GameStarter("rock")}>
          <GiRock className="text-5xl" />
          <p>Rock</p>
        </div>
        <div className="GameCard" onClick={() => GameStarter("paper")}>
          <FaHandPaper className="text-5xl" />
          <p>Paper</p>
        </div>
        <div className="GameCard" onClick={() => GameStarter("scissors")}>
          <FaHandScissors className="text-5xl" />
          <p>Scissors</p>
        </div>
      </div>
    </div>
  );
};

export default GameDisplay;
