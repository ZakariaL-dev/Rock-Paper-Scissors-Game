// React Icons
import { PiFinnTheHumanLight } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";

// React
import { useContext } from "react";

// Context
import { ResultContext, ScoresContext } from "../Context/GameContext";

const Score = () => {
  // Hadoma idihom ll GameSystem
  const { PlayerScore, ComputerScore } = useContext(ScoresContext);

  return (
    <div className="bg-[#6dd2d5] flex items-center justify-around lg:w-[40%] w-3/4 py-6 text-center rounded-xl shadow-lg font-bold text-cyan-50">
      <div>
        <h1 className="flex items-center gap-2">
          <PiFinnTheHumanLight className="text-3xl text-blue-500" /> You
        </h1>
        <h1 className="text-3xl text-blue-500">{PlayerScore}</h1>
      </div>
      <div className="text-2xl text-[#92e3e6]">VS</div>
      <div>
        <h1 className="flex items-center gap-2">
          <RiComputerLine className="text-2xl text-teal-500" /> Computer
        </h1>
        <h1 className="text-3xl text-teal-500">{ComputerScore}</h1>
      </div>
    </div>
  );
};

export default Score;
