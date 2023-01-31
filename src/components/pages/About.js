import { Helmet } from 'react-helmet';
import { Row, Col, Image } from 'react-bootstrap';
import hk from '../../img/hk.jpg';
import classes from '../../styles/About.module.css';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | About</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h2 className={classes.LeadTitle}>
              <strong>Jisun Kim</strong>
            </h2>
          </Col>
        </Row>

        <Row>
          {/* <Col  md={5}> */}
          <Col lg={5} md={12}>
            <p className={classes.SubTitle}>Seoul, Korea</p>
            <p className={classes.MainText}>
              Jisun Kim is a model who dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </Col>

          {/* <Col md={1}></Col> */}
          <Col lg={1} md={12}></Col>

          {/* <Col md={6}> */}
          <Col lg={6} md={12}>
            <Image className={classes.MainImage} src={hk} fluid />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
