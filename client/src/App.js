import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [TodoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "my todo1",
      done: false,
    },
    {
      id: 2,
      title: "my todo2",
      done: false,
    },
    {
      id: 3,
      title: "my todo3",
      done: true,
    },
  ]);

  return (
    <div className="App">
      {TodoItems.map((TodoItem) => {
        return <Todo TodoItem={TodoItem}></Todo>;
      })}
    </div>
  );
}

export default App;
