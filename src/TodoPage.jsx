import { useState } from "react";
import Button from "./Component/Button";
import Header from "./Component/Header";
import TodoForm from "./Component/TodoForm";
import TodoRow from "./Component/TodoRow";

const TodoPage = () => {
  const todoInitilaData = ["Clean my computer", "Buy a Computer"];
  const doneTodoinitialData = ["Write an article about @xstate/test"];
  const localStorageTodoData =
    JSON.parse(localStorage.getItem("todo")) || todoInitilaData;
  const localStorageDoneTodoData =
    JSON.parse(localStorage.getItem("donetodo")) || doneTodoinitialData;

  const [form, setForm] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [todo, setTodo] = useState(localStorageTodoData);
  const [doneTodo, setDoneTodo] = useState(localStorageDoneTodoData);
  localStorage.setItem("todo", JSON.stringify(todo));
  localStorage.setItem("donetodo", JSON.stringify(doneTodo));
  const handleFormControl = () => {
    setForm(!form);
  };
  const todoPageRefresh = () => {
    setTodo(todoInitilaData);
    setDoneTodo(doneTodoinitialData);
    console.log("working");
  };
  const saveTodo = () => {
    setForm(!form);
    if (inputValue === "") {
      return;
    }
    setTodo([...todo, inputValue]);
    setinputValue("");
  };

  const changeInputValue = (event) => {
    setinputValue(event.target.value);
  };

  const todoDone = (t) => {
    const doneWalaTodo = todo.filter(function (todo) {
      return todo !== t;
    });
    setDoneTodo([...doneTodo, t]);
    setTodo([...doneWalaTodo]);
  };

  const todoNotDone = (t) => {
    const NotdoneWalaTodo = doneTodo.filter(function (todo) {
      return todo !== t;
    });
    setDoneTodo([...NotdoneWalaTodo]);
    setTodo([...todo, t]);
  };

  const deleteTodo = (t) => {
    const filterTodo = todo.filter(function (todo) {
      return todo !== t;
    });
    const filterDoneTodo = doneTodo.filter(function (todo) {
      return todo !== t;
    });
    setDoneTodo([...filterDoneTodo]);
    setTodo([...filterTodo]);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <Header Refresh={todoPageRefresh}></Header>
      <legend className="text-lg font-medium leading-6 text-gray-900">
        Things to do
      </legend>
      {todo.map(function (todo, index) {
        return (
          <TodoRow
            key={index}
            todo={todo}
            todoDone={todoDone}
            checked={false}
            deleteTodo={deleteTodo}
          ></TodoRow>
        );
      })}
      <Button onClick={handleFormControl}>Add a todo </Button>
      {form && (
        <TodoForm
          onClick={saveTodo}
          formCancle={handleFormControl}
          value={inputValue}
          onChange={changeInputValue}
        ></TodoForm>
      )}
      <legend className="text-lg font-medium leading-6 text-gray-900">
        Things done
      </legend>
      {doneTodo.map(function (todo, index) {
        return (
          <TodoRow
            key={index}
            todo={todo}
            todoDone={todoNotDone}
            checked={true}
            deleteTodo={deleteTodo}
          ></TodoRow>
        );
      })}
    </div>
  );
};
export default TodoPage;
