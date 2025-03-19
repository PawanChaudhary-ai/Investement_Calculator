import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validateInput =
    userInput.duration > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.initialInvestment > 0 &&
    userInput.expectedReturn > 0;

  function handleChange({ inputIdentifier, newValue }) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {validateInput ? <Results results={userInput} /> : null}
      {!validateInput && (
        <p className="center" id="error-message">
          Please fill in all fields. Input values must be positive.
        </p>
      )}
    </>
  );
}

export default App;
