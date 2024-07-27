import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/userAuthContext';

const Navbar = () => {
  //show logout option if user is logged in
  const { cookies, logOut } = useAuth();
  const isLoggedIn = !!cookies.token;

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles.navhome}>
          <img src={"/book.png"} alt="" />
          <p>Truth or Myth</p>
        </div>      
      </Link>
      <ul id={styles.navlink}>
        <Link to='/about'>
          <li className={styles.navlink}>About</li>
        </Link>
        {isLoggedIn?
          (<>
            <Link to='/edit'>
              <li className={styles.navlink}>Edit</li>
            </Link>
            <li className={styles.navlink}><button onClick={logOut}>Logout</button></li></>)
          :
          <Link to='/login'>
          <li className={styles.navlink}>Login</li>
        </Link>}
      </ul>
    </nav>
  )
}

export default Navbar