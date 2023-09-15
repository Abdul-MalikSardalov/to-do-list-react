import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]); // one line syntax // or {return [...prevtasks,task]}
  };

  const checkHandler = (id) => {
    setTasks((prevTasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  };

  const deleteHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <Card>
        <Form addTask={addTask} />
        <TaskList
          tasks={tasks}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      </Card>
    </>
  );
}

export default App;
