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
moment.defineLocale("en-gb", {
  months:
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
  monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
    "_"
  ),
  weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss", // <--- This is the key format!
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm",
  },
  // ... You can omit the rest (calendar, relativeTime, etc.) for brevity,
  // or include them if you use those features. The 'LTS' is the main fix.
});

// ➡️ Now set the locale globally
moment.locale("en-gb");

const DashBoard = () => {
  const { Results } = useContext(ResultContext);
  const [AllGames, setAllGames] = useState([]);
  console.log(moment.localeData().longDateFormat("LTS"));
  useEffect(() => {
    if (Results && Results.Score) {
      // 1. Store the Results along with the current timestamp
      const gameResultWithTime = {
        ...Results,
        timestamp: moment().toISOString(),
      };
      setAllGames((prevGames) => [...prevGames, gameResultWithTime]);
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
        <div>{moment(g.timestamp).format("LTS")}</div>
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
