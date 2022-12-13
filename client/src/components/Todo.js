import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // { id: 1, title: 'todo1', done: false, }
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };

  // title input 커서가 깜빡인다고 수정이 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
  const editTitleHandler = (e) => {
    setTodoItem({ ...todoItem, title: e.target.value });
  };

  const editDoneHandler = (e) => {
    setTodoItem({ ...todoItem, done: e.target.checked });
  };

  const clickInput = () => {
    setReadOnly(false);
  };

  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={editDoneHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        readOnly={readOnly}
        onClick={clickInput}
        value={todoItem.title}
        onChange={editTitleHandler}
        onKeyPress={onEnterKeyPress}
      />
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;
