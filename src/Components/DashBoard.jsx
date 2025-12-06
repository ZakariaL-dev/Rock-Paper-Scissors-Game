import { GiRock } from "react-icons/gi";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa6";
import { BsShield } from "react-icons/bs";
//context
import { ResultContext } from "../Context/GameContext";
// react
import { useContext, useEffect, useState } from "react";
// tile
import moment from "moment";

const DashBoard = () => {
  const { Results } = useContext(ResultContext);
  const [AllGames, setAllGames] = useState([]);
  useEffect(() => {
    if (Results && Results.Score) {
      setAllGames((prevGames) => [...prevGames, Results]);
    }
  }, [Results]);
  //
  function DisplayPlayerRslt(g) {
    if (g.Player === "rock") {
      return <GiRock className="text-2xl text-blue-500" />;
    } else if (g.Player === "paper") {
      return <FaHandPaper className="text-2xl text-blue-500" />;
    } else if (g.Player === "scissors") {
      return <FaHandScissors className="text-2xl text-blue-500" />;
    } else {
      return <></>;
    }
  }
  function DisplayComputerRslt(g) {
    if (g.ComputerChoice === "rock") {
      return <GiRock className="text-2xl text-teal-400" />;
    } else if (g.ComputerChoice === "paper") {
      return <FaHandPaper className="text-2xl text-teal-400" />;
    } else if (g.ComputerChoice === "scissors") {
      return <FaHandScissors className="text-2xl text-teal-400" />;
    } else {
      return <></>;
    }
  }
  function DisplayMessageRslt(g) {
    if (g.Score === "win") {
      return (
        <div className="bg-green-500 py-1.5 px-2.5 rounded-2xl text-sm">
          Win
        </div>
      );
    } else if (g.Score === "loss") {
      return (
        <div className="bg-red-500 py-1.5 px-2.5 rounded-2xl text-sm">Loss</div>
      );
    } else if (g.Score === "tie") {
      return (
        <div className="bg-gray-400 py-1.5 px-2.5 rounded-2xl text-sm">Tie</div>
      );
    } else {
      return <></>;
    }
  }
  //
  const Games = AllGames.map((g, i) => {
    return (
      <div
        key={i}
        className="bg-[#0ebcc2] flex items-center justify-between rounded-xl py-3 px-4 mb-2.5"
      >
        <div className="flex gap-2.5 items-center">
          {DisplayPlayerRslt(g)}
          <p className="text-sm">VS</p>
          {DisplayComputerRslt(g)}
        </div>
        {DisplayMessageRslt(g)}
        <div>{moment().format("LTS")}</div>
      </div>
    );
  });

  return (
    <div className="CompCard px-6">
      <header className="flex items-center gap-2.5 px-2.5 text-xl mb-3">
        <BsShield />
        <h1>Recent Game</h1>
      </header>
      <div>
        {/* Game */}
        {Games}
      </div>
    </div>
  );
};

export default DashBoard;
