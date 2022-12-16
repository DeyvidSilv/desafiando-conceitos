import { TestTube } from 'phosphor-react';
import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export interface ITask {
  id: string;
  title: string;
  isCheck: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCheck: false
      }
    ])
  }

  function deleteTask(taskId: string) {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
  }

  function toggleTaskCheck(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCheck: !task.isCheck,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onCheck={toggleTaskCheck} />
    </>
  )
}

export default App
