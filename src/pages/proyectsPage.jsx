import './styles/Proyects.css'




const proyectsPage = () => {


  const proyects = [
    {
      title: 'proyecto1',
      descrip: 'primero',
      link: 'http://proyecto-galleta-de-la-suerte.netlify.app',
    },
    {
      title: 'proyecto2',
      descrip: 'segundo',
      link: 'https://app-de-usuarios.netlify.app',
    },
    {
      title: 'proyecto3',
      descrip: 'tercero',
      link: 'https://entregablenum3.netlify.app',
    },
    {
      title: 'proyecto4',
      descrip: 'cuarto',
      link: 'https://proyectoclima261292.netlify.app',
    },
    {
      title: 'proyecto5',
      descrip: 'quinto',
      link: 'http://proyecto-galleta-de-la-suerte.netlify.app',
    },
  ]

  return (
    <div className='container'>
      <div className='card num'>
        <h3 className='title'> proyecto 1</h3>
        {proyects.map((proyect, index) => (
          <proyects key={index} {...proyect} />
        ))}
        <div className='cads-img'>
          <img className='img' src='../../public/img/foto-galleta.png' alt='' />
          <div>
            <img src="onError={(e)=> e.target.alt= 'no disponible'}" alt='' />
            <a className='link' href='http://proyecto-galleta-de-la-suerte.netlify.app'>
              link al proyecto
            </a>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3 className='title'> proyecto 2</h3>
        {proyects.map((proyect, index) => (
          <proyects key={index} {...proyect} />
        ))}
        <div className='cads-img'>
          <img className='img' src='../../public/img/users.png' alt='' />
          <div>
            <a className='link' href='https://app-de-usuarios.netlify.app'>
              link al proyecto
            </a>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3 className='title'> proyecto 3</h3>
        {proyects.map((proyect, index) => (
          <proyects key={index} {...proyect} />
        ))}
        <div className='cads-img'>
          <img className='img' src='../../public/img/rick.png' alt='' />
          <div>
            <a className='link' href='https://entregablenum3.netlify.app'>
              link al proyecto
            </a>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3 className='title'> proyecto 4</h3>
        {proyects.map((proyect, index) => (
          <proyects key={index} {...proyect} />
        ))}
        <div className='cads-img'>
          <img className='img' src='../../public/img/clima.png' alt='' />
          <div>
            <a className='link' href='https://proyectoclima261292.netlify.app'>
              link al proyecto
            </a>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3 className='title'> proyecto 5</h3>
        {proyects.map((proyect, index) => (
          <proyects key={index} {...proyect} />
        ))}
        <div className='cads-img'>
          <img className='img' src='../../public/img/ecomerce.png' alt='' />
          <div>
            <a className='link' href='https://spectacular-crumble-c98864.netlify.app'>
              link al proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default proyectsPage

