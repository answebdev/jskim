import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import classes from '../../styles/Home.module.css';

// Adapted from: https://codepen.io/akash-1618/pen/rNwxOWX

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim</title>
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
      <div className={classes.Landing}>
        <div className={classes.Bg}></div>
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
          <div className={`${classes.Container} ${classes.LandingFlex}`}>
            <h1 className={classes.Title}>Jisun Kim</h1>
            <div className={classes.Description}>Model | Traveler</div>
            <div className={classes.ButtonContainer}>
              <Link className={classes.Button} to='/about'>
                Explore
              </Link>
              <Link className={classes.Button} to='/contact'>
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
