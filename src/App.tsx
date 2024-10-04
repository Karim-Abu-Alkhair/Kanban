import Navbar from "./containers/Navbar";
import Board from "./containers/Board";

const App: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <Board />
    </div>
  );
};

export default App;
