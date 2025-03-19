export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            required
            id="initial-investment"
            placeholder="0"
            defaultValue={userInput.initialInvestment}
            onChange={(e) =>
              onChangeInput({
                inputIdentifier: "initialInvestment",
                newValue: e.target.value,
              })
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            required
            id="annual-investment"
            defaultValue={userInput.annualInvestment}
            onChange={(e) =>
              onChangeInput({
                inputIdentifier: "annualInvestment",
                newValue: e.target.value,
              })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Expected Return</label>
          <input
            type="number"
            required
            id="initial-investment"
            defaultValue={userInput.expectedReturn}
            onChange={(e) =>
              onChangeInput({
                inputIdentifier: "expectedReturn",
                newValue: e.target.value,
              })
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Duration</label>
          <input
            type="number"
            required
            id="annual-investment"
            defaultValue={userInput.duration}
            onChange={(e) =>
              onChangeInput({
                inputIdentifier: "duration",
                newValue: e.target.value,
              })
            }
          />
        </p>
      </div>
    </section>
  );
}
