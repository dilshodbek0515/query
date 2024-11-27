import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <Link to={'/'}>Logoo</Link>
        <Link to={'/hero'}>Hero</Link>
      </div>
    </header>
  )
}

export default Header
