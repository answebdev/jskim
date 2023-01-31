import { Helmet } from 'react-helmet';
import { Row, Col, Image, Form } from 'react-bootstrap';
import classes from '../../styles/Contact.module.css';

import h6 from '../../img/h6.png';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Contact</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h2 className={classes.LeadTitle}>
              <strong>Contact</strong>
            </h2>
            <p className={classes.SubTitle}>I'd love to hear from you</p>
          </Col>
        </Row>

        <Row>
          <Col lg={5} md={12}>
            <Image
              className={classes.MainImage}
              src={h6}
              alt='Jisun Kim'
              fluid
            />
          </Col>

          <Col lg={7} md={12}>
            {/* <h3>
              <strong>Contact</strong>
            </h3> */}
            {/* <h3 className={classes.LeadTitle}>
              <strong>Contact</strong>
            </h3> */}
            {/* <hr /> */}
            <div className={classes.LeadText}>
              <p>
                Jisun Kim is available for shoots. To contact about bookings,
                use the form or contact by email at&nbsp;
                <a href='mailto:adolf.schmuck@gmail.com'>example@gmail.com</a>.
              </p>
              {/* <p>
                Jisun Kim is available for shoots. Contact about bookings or
                just to drop a friendly line.
              </p> */}
              {/* <p>
                Use the form or contact me by email at{' '}
                <a href='mailto:adolf.schmuck@gmail.com'>example@gmail.com</a>
              </p> */}
              <Form
                action='/success'
                name='jisun-portfolio-contact-form'
                method='POST'
                data-netlify='true'
              >
                <input
                  type='hidden'
                  name='form-name'
                  value='jisun-portfolio-contact-form'
                />
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className={classes.FormInput}
                    type='name'
                    name='name'
                    placeholder='Name'
                    required
                  />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label className={classes.Label}>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    className={classes.FormInput}
                    type='email'
                    name='email'
                    placeholder='email@example.com'
                    required
                  />
                  {/* <Form.Text className='text-muted'>
                    Your email will never be shared with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label className={classes.Label}>Message</Form.Label>
                  <Form.Control
                    className={classes.FormInput}
                    as='textarea'
                    name='message'
                    rows='5'
                    required
                  />
                </Form.Group>
                <div className='field'>
                  <div data-netlify-recaptcha='true'></div>
                </div>
                <button
                  // className='actions'
                  className={`${classes.Button} ${'actions'}`}
                  // variant='success'
                  type='submit'
                  value='Send Message'
                  id='submit-btn'
                >
                  Send Message
                </button>
              </Form>
              <br />
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
