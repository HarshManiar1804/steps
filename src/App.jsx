import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0);

  const handlePrevious = () => {
    if (step > 1) setStep((step) => step - 1);
  };
  const handleNext = () => {
    if (step < 2) setStep((step) => step + 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 0 ? "active" : ""}>1</div>
        <div className={step >= 1 ? "active" : ""}>2</div>
        <div className={step >= 2 ? "active" : ""}>3</div>
      </div>
      <p className="messages">
        Step {step + 1} : {messages[step]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
