import { act } from "react";
import { useReducer } from "react";
import { useState } from "react";
const initialState = { count: 0, step: 1 };

function reducer(curState, action) {
  console.log(curState, action.type);
  switch (action.type) {
    case "dec":
      // return the current state and updating the
      // prefered part
      return { ...curState, count: curState.count - curState.step };
    case "inc":
      return { ...curState, count: curState.count + curState.step };
    case "setCount":
      return { ...curState, count: action.payload };
    case "setStep":
      return { ...curState, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unkonwn action");
  }
  // if (type === "inc") return curState + 1;
  // if (type === "dec") return curState - 1;
  // if (type === "setCount") return payload;
}
function DateCounter() {
  // reducer function, initial state
  // have acces to the current state + action passed by dispatch updating fucntion it define what next state looks like.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
