import { useQuize } from "../context/QuizContext";

function Progress() {
  const { numQuestions, index, points, maxPossiblePoints, answer } = useQuize();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Qestion<strong> {index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
