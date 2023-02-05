import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import sanityClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url';
import classes from '../../styles/Photos.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// For fade in effect on scroll (option 3), watch here, but use opacity effect instead of bounce in: https://www.youtube.com/watch?v=hkhskSrT5SY

const Photos = () => {
  const [imageData, setImageDate] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "photos"] | order(_createdAt asc){
        title_01,
        title_02,
        title_03,
        title_04,
        title_05,
        title_06,
        image_01,
        image_02,
        image_03,
        image_04,
        image_05,
        image_06,
        thumbnail_01,
        thumbnail_02,
        thumbnail_03,
        thumbnail_04,
        thumbnail_05,
        thumbnail_06,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setImageDate(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Photos</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h2 className={classes.LeadTitle}>
              <strong>Photos</strong>
            </h2>
            <br />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <p className={classes.MainText}>
              A selection of some of my modeling work.
            </p>
            <br />
            <br />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            {imageData &&
              imageData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='row'>
                      <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                        {/* <a href={item.thumbnail_01} data-lightbox='image-1'> */}
                        <a
                          href={urlFor(item.image_01).url()}
                          data-lightbox='image-1'
                        >
                          <img
                            src={urlFor(item.image_01).url()}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={item.title_01}
                          />
                        </a>

                        <a
                          href={urlFor(item.image_02).url()}
                          data-lightbox='image-1'
                        >
                          <img
                            src={urlFor(item.image_02).url()}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={item.title_02}
                          />
                        </a>
                      </div>

                      <div className='col-lg-4 mb-4 mb-lg-0'>
                        <a
                          href={urlFor(item.image_03).url()}
                          data-lightbox='image-1'
                        >
                          <img
                            src={urlFor(item.image_03).url()}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={item.title_03}
                          />
                        </a>

                        <a
                          href={urlFor(item.image_04).url()}
                          data-lightbox='image-1'
                        >
                          <img
                            src={urlFor(item.image_04).url()}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={item.title_04}
                          />
                        </a>
                      </div>

                      <div className='col-lg-4 mb-4 mb-lg-0'>
                        <a
                          href={urlFor(item.image_05).url()}
                          data-lightbox='image-1'
                        >
                          <img
                            src={urlFor(item.image_05).url()}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={item.title_05}
                          />
                        </a>

                        <a
                          href={urlFor(item.image_06).url()}
                          data-lightbox='image-1'
                        >
                          <img
                            src={urlFor(item.image_06).url()}
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt={item.title_06}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Photos;
