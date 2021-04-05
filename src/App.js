import React, { useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { getUser, setUser } from "./redux/ducks/user";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log("user", user);
  const count = useSelector((state) => state.counter);
  useEffect(() => {
    dispatch(getUser());
    dispatch(setUser());
  }, [dispatch]);
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
