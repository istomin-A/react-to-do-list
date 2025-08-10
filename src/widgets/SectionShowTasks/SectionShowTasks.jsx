import Task from '../../shared/ui/task/Task'
import './SectionShowTasks.scss'

function SectionShowTasks({ onDoneTask, onRemoveTask, tasks }) {
  return (
    <section className='show-tasks'>
      <div className='show-tasks__inner _container'>
        <div className='show-tasks__body _back-color'>
          <h3 className='show-tasks__title'>My Tasks</h3>
          <div className='show-tasks__wrapper'>
            {tasks.map((task, index) => (<Task onDoneTask={onDoneTask} onRemoveTask={onRemoveTask} key={index} task={task} />))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionShowTasks