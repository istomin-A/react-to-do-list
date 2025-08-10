import './sectionMain.scss'
import Form from '../form/Form'

function SectionMain({ onSubmitTask }) {
  return (
    <section className='main'>
      <div className='main__inner _container'>
        <div className='main__body _back-color'>
          <h2 className='main__title'>Add Task</h2>
          <Form onSubmitTask={onSubmitTask} />
        </div>
      </div>
    </section>
  )
}

export default SectionMain