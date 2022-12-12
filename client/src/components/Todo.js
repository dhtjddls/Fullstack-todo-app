const Todo = ({ TodoItem }) => {
  const { id, done, title } = TodoItem;
  return (
    <div className="Todo">
      <br />
      <label htmlFor={`todo${id}`}>
        {title}
        <input
          type="checkbox"
          name={`todo${id}`}
          id={`todo${id}`}
          value={title}
          defaultChecked={done}
        />
      </label>
    </div>
  );
};

export default Todo;
