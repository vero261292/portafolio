import  './styles/contacts.css'

const ContactPage = () => {
  return (
    <>
      <div className='contact'>
        <form className='form'>
          <div className='flex'>
            <label>
              <input required='' placeholder='' type='text' className='input' />
              <span> Nombre</span>
            </label>

            <label>
              <input required='' placeholder='' type='text' className='input' />
              <span>Apellido</span>
            </label>
          </div>

          <label>
            <input required='' placeholder='' type='email' className='input' />
            <span>email</span>
          </label>

          <label>
            <input required='' type='tel' placeholder='' className='input' />
            <span>Numero de telefono</span>
          </label>
          <label>
            <textarea required='' rows='3' placeholder='' className='input01'></textarea>
            <span>Mensaje</span>
          </label>

          <button className='fancy' href='#'>
            <span className='top-key'></span>
            <span className='text'>Enviar</span>
            <span className='bottom-key-1'></span>
            <span className='bottom-key-2'></span>
          </button>
        </form>
      </div>
      <img className='Elipse1' src="img/Ellipse-1.svg" alt="" />
    </>
  )
}

export default ContactPage


