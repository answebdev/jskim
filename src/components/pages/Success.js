import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import classes from '../../styles/Success.module.css';

const Success = () => {
  return (
    <div className={classes.Success}>
      <Helmet>
        <title>Jisun Kim | Success</title>
        <style type='text/css'>{`
        .navbar {
          display: none;
        }

        body {
          letter-spacing: 1px;
          height: 100%;
        }
    `}</style>
      </Helmet>
      <header className={classes.AppHeader}>
        <span class='animate__animated animate__swing'>
          <i className={`${classes.Icon} ${'material-icons'}`} id='thumb'>
            thumb_up
          </i>
        </span>
        <br />
        <h3 className={classes.HeaderText}>THANK YOU!</h3>

        <p className={classes.Description}>Your message has been sent.</p>

        <div className={classes.Buttons}>
          <Link className={classes.Button} to='/contact'>
            BACK TO FORM
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Success;
