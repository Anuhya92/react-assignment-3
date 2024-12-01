import { useState } from "react";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
  const [newToDo, setNewToDo] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const addToDo = () => {
    if (newToDo.trim() === "") {
      return;
    }
    setToDoItems([...toDoItems, { text: newToDo, completed: false }]);
    setNewToDo("");
  };

  const removeToDo = (indexToBeRemoved) => {
    const updatedToDos = toDoItems.filter(
      (toDoItem, index) => index !== indexToBeRemoved
    );
    setToDoItems(updatedToDos);
  };

  const moveUp = (index) => {
    if (index === 0) {
      // Can't move the first item up
      return;
    }
    const updatedToDos = [...toDoItems];
    const itemToBeMovedUp = toDoItems[index];
    const itemToBeMovedDown = toDoItems[index - 1];
    updatedToDos[index] = itemToBeMovedDown;
    updatedToDos[index - 1] = itemToBeMovedUp;
    setToDoItems(updatedToDos);
  };

  const moveDown = (index) => {
    if (index === toDoItems.length - 1) {
      // Can't move the last item down
      return;
    }
    const updatedToDos = [...toDoItems];
    const itemToBeMovedUp = toDoItems[index + 1];
    const itemToBeMovedDown = toDoItems[index];
    updatedToDos[index] = itemToBeMovedUp;
    updatedToDos[index + 1] = itemToBeMovedDown;
    setToDoItems(updatedToDos);
  };

  return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button onClick={addToDo}>Add</button>
      </div>
      <ul className="todo-list">
        {toDoItems.map((item, index) => (
          <ToDoItem
            key={index}
            index={index}
            item={item}
            moveUp={() => moveUp(index)}
            moveDown={() => moveDown(index)}
            removeToDo={() => removeToDo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
