import { Link } from 'react-router-dom';
import classes from '../../styles/Navbar.module.css';

const Navbar = () => (
  <div className='navbar'>
    <header className={classes.Navbar}>
      <div className={`${classes.NavbarTitle} ${classes.NavbarItem}`}>
        <div>
          <Link className={classes.BrandLink} to='/'>
            Jisun Kim
          </Link>
        </div>
      </div>
      <ul>
        <div className={classes.ItemsDiv}>
          <div className={classes.Pages}>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/about'>
                About
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/photos'>
                Photos
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/videos'>
                Videos
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/contact'>
                Contact
              </Link>
            </li>
          </div>

          <div className={classes.Socials}>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.instagram.com/likejisun/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.facebook.com/lovelyjisuni'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fa-brands fa-facebook-square'></i>
              </a>
            </li>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.linkedin.com/in/jisun-kim-421a6a176/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </li>
          </div>
        </div>
      </ul>
    </header>
  </div>
);

export default Navbar;
