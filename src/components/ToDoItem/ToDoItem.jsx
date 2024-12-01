import deleteIcon from "../../assets/delete.svg";
import upArrowIcon from "../../assets/up-arrow.svg";
import downArrowIcon from "../../assets/down-arrow.svg";
import "./ToDoItem.css";

const ToDoItem = ({
  index,
  item,
  toggleTodo,
  removeToDo,
  moveUp,
  moveDown,
}) => {
  return (
    <li className={`todo-item ${item.completed ? "completed" : ""}`}>
      <div className="todo-text" onClick={toggleTodo}>
        <div className="label">{index + 1}. &nbsp;</div>
        <div className="value">{item.text}</div>
      </div>
      <div className="todo-actions">
        <button onClick={moveUp}>
          <img src={upArrowIcon}></img>
        </button>
        <button onClick={moveDown}>
          <img src={downArrowIcon}></img>
        </button>
        <button onClick={removeToDo}>
          <img src={deleteIcon}></img>
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
