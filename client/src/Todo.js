const Todo = (req, res) => {
  return (
    <>
      <label htmlFor="title">
        Todo: <input type="text" name="title" />
        <button>ADD</button>
      </label>
      <br />

      <label htmlFor="todo">
        Todo
        <input type="checkbox" name="todo" />
      </label>
    </>
  );
};

export default Todo;
