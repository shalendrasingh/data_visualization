import "./App.css";
import { BarChart } from "./components/BarChart";
import { ScatterChart } from "./components/ScatterChart";

function App() {
  return (
    <div className="App">
      <h1>Data visualization</h1>
      <ScatterChart />
      <BarChart />
    </div>
  );
}

export default App;
