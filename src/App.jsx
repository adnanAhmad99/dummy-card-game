import "./App.css";
import RandomTest from "./pages/random-tests/RandomTest";
import GamePage from "./pages/game-front-page/GamePage";
import ContextApi from "./state-mangement/game-data-controller/ContextApi";

function App() {
  return (
    <>
      <ContextApi>
        <GamePage />
      </ContextApi>
    </>
  );
}

export default App;
