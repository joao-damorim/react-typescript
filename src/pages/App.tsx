import React, { useState } from 'react';
import { List } from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss'
import { ITask } from "../types/task"
import Form from '../components/Form';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function endTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            seleted: false,
            completed: true
          }
        }
        return task
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}
            selectTask={selectTask}
      />
      <Timer 
        selected={selected}
        endTask={endTask}/>
    </div>
  );
}

export default App;
