import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h3>The count: {count.count}</h3>
      <Counter name="Joyce Kua" />
      <Counter name="Poy Pogi" />
      <Counter name="Joe Malakas" />
    </div>
  );
}

export default App;
