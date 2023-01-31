import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import logo from '../../img/logo.png';
import classes from '../../styles/Error.module.css';

const Error = () => {
  return (
    <div className={classes.Error}>
      <Helmet>
        <title>Jisun Kim | Error</title>
        <style type='text/css'>{`
        .navbar,
        .footer {
          display: none;
        }

        body {
          letter-spacing: 1px;
          height: 100%;
        }
    `}</style>
      </Helmet>
      <header className={classes.AppHeader}>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            y: 0,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className={classes.MainDiv}>
            <img src={logo} className={classes.AppLogo} alt='Logo' />
            <br />
            <p className={classes.PageNotFound}>404 Page Not Found</p>
            <p className={classes.Message}>
              Sorry, the page you are looking for
              <br />
              does not exist.
            </p>
            <div>
              <Link className={classes.Safety} to='/'>
                Home
              </Link>
            </div>
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default Error;
