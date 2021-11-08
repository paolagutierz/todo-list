import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoping",
      day: "Feb 5th 2:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
