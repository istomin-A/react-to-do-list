import { useState, useRef } from 'react'
import Button from '../../shared/ui/button/Button'
import './form.scss'

function Form({ onSubmitTask }) {
  const [task, setTask] = useState('')
  const [isInputError, setIsInputError] = useState(false)
  const [isError, setIsError] = useState(false)
  const inputRef = useRef(null)

  function inputChange(e) {
    setTask(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()

    if (!task.trim()) {
      setTask('')
      setIsInputError(true)
      setIsError(true)
      inputRef.current.focus()
      return
    }

    setIsInputError(false)
    setIsError(false)
    onSubmitTask(task)
    setTask('')
    inputRef.current.focus()
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <label className='form__label'>
        <span className='form__label-span'>Enter a task</span>
        <input onChange={inputChange} ref={inputRef} type='text' className={isError ? 'form__input _error' : 'form__input'} value={task} required placeholder="Enter a task" minLength="3" maxLength="100" id="input-add-task" name="input-add-task" />
      </label>
      <p className={isInputError ? 'form__error _error-input' : 'form__error'}>Input error</p>
      <Button type='submit' id='main-button' className='form__button button'>Add Task</Button>
    </form>
  )
}

export default Form