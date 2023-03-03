import React, { useState } from "react";
import InputField from "./InputField";
import { Todo } from "./model";
import TodoList from "./TodoList/TodoList";

const TodoApp:React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (todo) {
        setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
        setTodo("");
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-full px-4 py-20 bg-gray-900 select-none">
        <h1 className="mb-8 text-3xl font-bold text-center text-white">
          What am I upto at the moment? 
        </h1>
        <div className="flex flex-col items-center w-full p-4 text-center bg-gray-700 rounded-lg md:w-1/2 md:p-8">
          <label
            htmlFor="inputField"
            className="mb-2 text-lg text-white font-sm md:font-medium"
          >
             I've been tinkering with React and Typescript and I just built a Todo app with it. 
             Care to take a look?
            <br />
            <br />
            Type something + hit Enter!
          </label>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
  
          <div className="flex flex-wrap items-center justify-center text-white">
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    );
}

export default TodoApp;
