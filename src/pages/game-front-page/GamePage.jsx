import Details from "../../components/game-components/Details";
import Controls from "../../components/game-components/Controls";
import Overview from "../../components/game-components/Overview";

import "./game-page.css";

const GamePage = () => {
  return (
    <section>
      <h1>Card Game</h1>
      <section className="main-section">
        <div className="data-displayer">
          <Details />
          <Overview />
        </div>
        <div className="side-bar">
          <Controls />
        </div>
      </section>
    </section>
  );
};

export default GamePage;
