import './styles/About.css'

const AboutPage = () => {
  return (
    <>
      <div className='about'>
        <div className='about__container-info'>
          <h1 className='about__title'>VERONICA PEREZ</h1>
          <p className='about__description'>
            Soy Verónica Pérez, un(a) desarrolladora FullStack con experiencia en manejo de
            backend y frontend. Con 1 año en el area, he trabajado en proyectos emocionantes
            para clientes como un ecommerce, manejo de APIs y proyectos de Nodejs. Mi enfoque
            se basa en la planeación y aplicación de conceptos básicos, lo que me permite
            ofrecer resultados de alta calidad y superar las expectativas de mis clientes.
            Explora mi portafolio y contáctame en el apartado de contacto para discutir
            posibles colaboraciones.
          </p>
        </div>
        <img className='about__imagenCode' src='img/ImagenCode.png' alt='' />
      </div>
        <img className='ellipse1' src="img/Ellipse-1.svg" alt="" />
    </>
  )
}

export default AboutPage
