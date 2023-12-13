import './styles/home.css'

const HomePage = () => {
  return (
    <>
      <div className='presentation'>
        <div className='presentation__content'>
          <h2 className='presentation__title'>Hola</h2>
          <h2 className='presentation__subtitle'>
            Me llamo Veronica Perez, soy una desarrollador FullStack
            con enfoque en FronEnd . . .
          </h2>
        </div>
        <img className='robot-img' src='img/Group80.svg' alt='' />
        <p className='presentation__description'>
          Soy probablemente el desarrollador más apasionado con el que jamás llegarás a
          trabajar. Si tienes un gran proyecto que necesita unas habilidades increíbles, soy tu
          chica adecuada para este trabajo.
        </p>
      </div>
    </>
  )
}

export default HomePage
