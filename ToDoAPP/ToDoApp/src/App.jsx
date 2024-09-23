import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/Appname";
import AddTODO from "./components/AddTODO";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <center class="todo-conatiner">
        <AppName></AppName>
      </center>
      <AddTODO></AddTODO>
      <div class="item-conatiner">
        <Todo1></Todo1>
        <Todo2></Todo2>
      </div>
    </div>
  );
}

export default App;
