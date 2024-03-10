import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });

  const isInputValid = Object.values(userInput).every((value) => value > 0);

  function handleChange(userInputIdentifier, value) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [userInputIdentifier]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!isInputValid && <p className="center">Please enter valid input</p>}
      {isInputValid && <Result input={userInput} />}
    </>
  );
}

export default App;
