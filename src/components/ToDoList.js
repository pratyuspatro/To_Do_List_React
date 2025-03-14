import { useEffect, useState } from "react";
import check_list from "../assets/check-list.png";
import ToDoItems from "./ToDoItems";

const ToDoList = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): []);
  const addTask = () => {
    if (inputTask === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputTask,
      isComplete: false,
    };
    setTasks((prev) => [...prev, newTodo]);
    setInputTask("");
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((todo) => todo.id !== id);
    });
  };
  const toggle = (id) => {
    setTasks((prevTask)=>{
        return prevTask.map((todo) => {
            if(todo.id === id){
                return {...todo,isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
  };
  useEffect (() =>{
    localStorage.setItem("todos", JSON.stringify(tasks));
  },[tasks])
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/* {/*----------- title *------------/} */}

        <div className="flex items-center mt-7 gap-2">
          <img className="w-8" src={check_list} />
          <h1 className="text-3xl font-semibold">To Do List</h1>
        </div>

        {/* --------input box--------------- */}

        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            className="bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600"
            type="text"
            value={inputTask}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
            placeholder="Add your task"
          />
          <button
            onClick={addTask}
            className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-700"
          >
            Add +
          </button>
        </div>
        {/* --------to do list--------------- */}
        <div>
          {tasks.map((item) => {
            return (
              <ToDoItems
                key={item.id}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTask={deleteTask}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
