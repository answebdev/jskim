import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { Helmet } from 'react-helmet';
import { Row, Col, Image } from 'react-bootstrap';
// import hk from '../../img/hk.jpg';
import classes from '../../styles/About.module.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
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
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

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
            {allPostsData &&
              allPostsData.map((post, index) => (
                <div key={index} className={classes.MainText}>
                  <BlockContent
                    blocks={post.bio}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                  />
                </div>
              ))}
          </Col>

          {/* <Col md={1}></Col> */}
          <Col lg={1} md={12}></Col>

          {/* <Col md={6}> */}
          <Col lg={6} md={12}>
            {/* <Image className={classes.MainImage} src={hk} fluid /> */}

            {allPostsData &&
              allPostsData.map((post, index) => {
                return (
                  <div key={index}>
                    <Image
                      className={classes.MainImage}
                      src={urlFor(post.mainImage).url()}
                      alt='Jisun Kim'
                      fluid
                    />
                  </div>
                );
              })}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
