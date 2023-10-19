import { Link } from 'react-router-dom'
import './styles/Header.css'

const Heder = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <Link to='/' className='header__logo'>
          <div className='header__logo-container'>
            <h2 className='header__logo-text'>VERO PEREZ</h2>
          </div>
        </Link>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header_nav-item'>
              <Link to='/' className='header_nav-link'>
                inicio
              </Link>
            </li>
            <li className='header_nav-item'>
              <Link to='/about' className='header_nav-link'>
                acerca de mi
              </Link>
            </li>
            <li className='header_nav-item'>
              <Link to='/proyects' className='header_nav-link'>
                proyectos
              </Link>
            </li>
            <li className='header_nav-item'>
              <Link to='/skills' className='header_nav-link'>
                habilidades
              </Link>
            </li>
            <li className='header_nav-item'>
              <Link to='/contact' className='header_nav-link'>
                contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Heder
