import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Image } from 'react-bootstrap';
import sanityClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import SamplesOfWork from './SamplesOfWork.js';
import classes from '../../styles/About.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] | order(_createdAt asc) {
        bio,
        image,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Jisun Kim | About</title>
        <meta name='description' content='Jisun Kim Official Website.' />
        <meta property='og:title' content='Jisun Kim | About' />
        <meta
          property='og:description'
          content='Jisun Kim is a model from South Korea. Bio and a sampling of work.'
        />
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
          <Col lg={5} md={12}>
            <p className={classes.SubTitle}>Seoul, Korea</p>
            {allData &&
              allData.map((item, index) => (
                <div key={index} className={classes.MainText}>
                  <BlockContent
                    blocks={item.bio}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                  />
                </div>
              ))}
            <br />
            <SamplesOfWork />
          </Col>

          <Col lg={1} md={12}></Col>

          <Col lg={6} md={12}>
            <TransitionGroup>
              {allData &&
                allData.map((item, index) => (
                  <CSSTransition classNames='item' key={index} timeout={500}>
                    <div key={index}>
                      <Image
                        className={classes.MainImage}
                        src={urlFor(item.mainImage).url()}
                        alt='Jisun Kim'
                        fluid
                      />
                    </div>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
