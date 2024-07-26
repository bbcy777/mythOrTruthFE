import styles from './nav.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles.navhome}>
          <img src={"/book.png"} alt="" />
          <p>Myth or Truth</p>
        </div>      
      </Link>
      <ul id={styles.navlink}>
        <Link to='/about'>
          <li className={styles.navlink}>About</li>
        </Link>
        <Link to='/login'>
          <li className={styles.navlink}>Login</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar