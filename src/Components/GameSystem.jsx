// React
import { useContext, useEffect } from "react";

// Context
import {
  PlayerChoiceContext,
  ResultContext,
  ScoresContext,
} from "../Context/GameContext";

const GameSystem = () => {
  const ComputerChoices = ["paper", "rock", "scissors"];
  const { Person, setPerson } = useContext(PlayerChoiceContext);
  const { Results, setResults } = useContext(ResultContext);
  const { PlayerScore, setPlayerScore, ComputerScore, setComputerScore } =
    useContext(ScoresContext);
  function Random() {
    const randomNum = Math.floor(Math.random() * ComputerChoices.length);
    const Computer = ComputerChoices[randomNum];
    if (Person === Computer) {
      setResults({
        Player: Person,
        ComputerChoice: Computer,
        Score: "tie",
      });
    } else if (Person === "paper" && Computer === "rock") {
      setResults({
        Player: Person,
        ComputerChoice: Computer,
        Score: "win",
      });
      setPlayerScore(PlayerScore + 1);
    } else if (Person === "rock" && Computer === "scissors") {
      setResults({
        Player: Person,
        ComputerChoice: Computer,
        Score: "win",
      });
      setPlayerScore(PlayerScore + 1);
    } else if (Person === "scissors" && Computer === "paper") {
      setResults({
        Player: Person,
        ComputerChoice: Computer,
        Score: "win",
      });
      setPlayerScore(PlayerScore + 1);
    } else {
      setResults({
        Player: Person,
        ComputerChoice: Computer,
        Score: "loss",
      });
      setComputerScore(ComputerScore + 1);
    }
    setPerson("");
  }

  useEffect(() => {
    if (!Person) {
      return;
    }
    Random();
  }, [Person]);
  return <></>;
};

export default GameSystem;
