import { useQuize } from "../context/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuize();
  return (
    <div className="start">
      <h2>Welcom to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui">
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
