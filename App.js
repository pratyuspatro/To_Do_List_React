import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./src/components/ToDoList";

const AppLayout = () => {
  return <ToDoList />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
