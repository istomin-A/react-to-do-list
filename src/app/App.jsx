import { useEffect, useState } from 'react'
import Header from '../widgets/header/Header'
import SectionMain from '../widgets/SectionMain/SectionMain'
import SectionShowTasks from '../widgets/SectionShowTasks/SectionShowTasks'
import Footer from '../widgets/footer/Footer'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getData = localStorage.getItem('tasks')
    if (getData) setTasks(JSON.parse(getData))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(taskName) {
    setTasks(prevTasks => [...prevTasks, { name: taskName, done: false }])
  }

  function removeTask(task) {
    setTasks(tasks.filter((item) => item.name !== task))
  }

  function doneTask(task) {
    setTasks(tasks.map((item) => item.name === task ? { ...item, done: !item.done } : item))
  }

  return (
    <>
      <Header />
      <main className='page'>
        <SectionMain onSubmitTask={addTask} />
        <SectionShowTasks onDoneTask={doneTask} onRemoveTask={removeTask} tasks={tasks} />
      </main>
      <Footer />
    </>
  )
}

export default App