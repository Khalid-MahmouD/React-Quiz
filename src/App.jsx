import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import NextButton from "./components/NextButton";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuize } from "./context/QuizContext";

// TODO: select number of questions filter diff of
// TODO: upload the hight score then fetched it
// TODO: answers could be refiled


export default function App() {
  // console.log(state.data[0].question);
  const { status } = useQuize();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen />}
        {status === "active" && 
          (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )
        }
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
