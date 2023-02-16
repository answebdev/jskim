import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Image, Form } from 'react-bootstrap';
import sanityClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url';
import classes from '../../styles/Contact.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"]{
        image,
        contactImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

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
            {data &&
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      className={classes.MainImage}
                      src={urlFor(item.contactImage).url()}
                      alt='Jisun Kim'
                      fluid
                    />
                  </div>
                );
              })}

            {/* <Image
              className={classes.MainImage}
              src={h6}
              alt='Jisun Kim'
              fluid
            /> */}
          </Col>

          <Col lg={7} md={12}>
            <div className={classes.LeadText}>
              {/* <p>
                Jisun Kim is available for shoots. To contact about bookings,
                use the contact form below.
              </p> */}
              <p>
                Jisun Kim is available for shoots. To contact about bookings,
                use the form or contact by email at&nbsp;
                <a href='mailto:mallakkangi@gmail.com'>mallakkangi@gmail.com</a>
                .
              </p>
              <Form
                action='/success'
                name='jisun-kim-contact-form'
                method='POST'
                data-netlify='true'
              >
                <input
                  type='hidden'
                  name='form-name'
                  value='jisun-kim-contact-form'
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
                  className={`${classes.Button} ${'actions'}`}
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
