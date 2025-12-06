import "./index.css";

// Components
import Score from "./Components/Score";
import GameDisplay from "./Components/GameChoices";
import ResultDisplay from "./Components/ResultDisplay";
import DashBoard from "./Components/DashBoard";
import GameSystem from "./Components/GameSystem";

// MUI
import { Container } from "@mui/material";

// Context
import {
  PlayerChoiceContext,
  ResultContext,
  ShowDashBoardContext,
  ShowResultDisplayContext,
  ScoresContext,
} from "./Context/GameContext";

// React
import { useState } from "react";

function App() {
  const [Person, setPerson] = useState("");
  const [Results, setResults] = useState({});
  const [ShowResult, setShowResult] = useState(false);
  const [ShowDashb, setShowDashb] = useState(false);
  const [PlayerScore, setPlayerScore] = useState(0);
  const [ComputerScore, setComputerScore] = useState(0);
  return (
    <Container
      maxWidth={"md"}
      className="flex flex-col gap-7 items-center my-14"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3 text-[#1a696c]">
          Rock-Paper-Scissors Game
        </h1>
        <p className="text-teal-600">
          Challenge the computer in the classic game of chance!
        </p>
      </div>
      <PlayerChoiceContext.Provider value={{ Person, setPerson }}>
        <ResultContext.Provider value={{ Results, setResults }}>
          <ScoresContext.Provider
            value={{
              PlayerScore,
              setPlayerScore,
              ComputerScore,
              setComputerScore,
            }}
          >
            <Score />
            <ShowDashBoardContext.Provider value={{ ShowDashb, setShowDashb }}>
              <ShowResultDisplayContext.Provider
                value={{ ShowResult, setShowResult }}
              >
                {ShowResult === false ? <GameDisplay /> : <ResultDisplay />}
                {ShowDashb === true ? <DashBoard /> : ""}
              </ShowResultDisplayContext.Provider>
            </ShowDashBoardContext.Provider>
            <GameSystem />
          </ScoresContext.Provider>
        </ResultContext.Provider>
      </PlayerChoiceContext.Provider>
    </Container>
  );
}

export default App;
