import './task.scss'
import imgDone from '../../images/check.svg'
import imgDelete from '../../images/delete.svg'

function Task({ onDoneTask, onRemoveTask, task }) {

  function findTaskName(e) {
    const task = e.currentTarget.closest('.task')
    const taskName = task.querySelector('.task__title').textContent
    return taskName
  }

  function removeTaskPreparation(e) {
    const taskName = findTaskName(e)
    onRemoveTask(taskName)
  }

  function doneTaskPreparation(e) {
    const taskName = findTaskName(e)
    onDoneTask(taskName)
  }

  return (
    <div className="task">
      <p className={task.done ? 'task__title _done' : 'task__title'}>{task.name}</p>
      <div className='task__wrapper'>
        <button type='button' className='task__button' onClick={doneTaskPreparation}>
          <img className="task__img" src={imgDone} alt="" width="30" height="30" />
        </button>
        <button type='button' className='task__button' onClick={removeTaskPreparation}>
          <img className="task__img" src={imgDelete} alt="" width="30" height="30" />
        </button>
      </div>
    </div>
  )
}

export default Task