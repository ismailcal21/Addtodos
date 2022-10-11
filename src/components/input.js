import React, { useState } from "react";

const Input = (props) => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") {
      alert("Input cannot be empty");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: todoText,
      isDone: false,
      date: new Date(),
    };
    setTodos([newTodo, ...todos]);
    console.log(setTodos);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="my-5 text-center">TODO APP</h1>
      <div className="container my-5 d-flex justify-content-center">
        <div className="input-group mb-3 w-50 ">
          <input
            type="text"
            className="form-control"
            placeholder=" .   .   ."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button type="submit" className="btn btn-primary" id="basic-addon2">
            Save
          </button>
        </div>
      </div>
      {todos.length <= 0 ? (
        <p className=" container w-50 text-center" role="alert">
          "You dont have any todos yet"
        </p>
      ) : (
        <div>
          {todos.map((item) => (
            <div className="alert alert-primary container w-50" role="alert">
              {item.text}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};
export default Input;
