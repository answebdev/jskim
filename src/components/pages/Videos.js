import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import sanityClient from '../../client.js';
import classes from '../../styles/Videos.module.css';

const Videos = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "videos"] | order(_createdAt desc) {
          videoUrl,
          title
        }`
      )
      .then((data) => setVideoData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Videos</title>
        <meta
          name='description'
          content='Jisun Kim is a model from South Korea. Get to know her and view a selection of videos from various shoots, ranging from travel videos to commercials.'
        />
        <meta property='og:url' content='https://jisunkim.netlify.app/videos' />
        <meta
          property='og:title'
          content='Jisun Kim Official Website | Videos'
        />
        <meta
          property='og:description'
          content='Jisun Kim is a model from South Korea. Get to know her and view a selection of videos from various shoots, ranging from travel videos to commercials.'
        />
        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `{ "@context": "http://schema.org", "@type": "LocalBusiness", ... }`,
          }}
        /> */}
        <script type='application/ld+json'>
          {`
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "embedUrl":"https://player.vimeo.com/video/802908574?h=35d231015f",
            "thumbnailUrl":"https://i.vimeocdn.com/video/1620674454-3ef48c25a8d6e561b4399ff71cafcd3d38aa38bf8aa97c8746ac032f6560cdc8-d_640",
            "name":"Standard Chartered Bank 2021 Digital Wealth",
            "description":"",
            "duration":"PT72S",
            "uploadDate":"2023-02-27 20:02:48"
            }]
          `}
        </script>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h2 className={classes.LeadTitle}>
              <strong>Videos</strong>
            </h2>
            <br />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <p className={classes.MainText}>
              A selection of some of my video shoots.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <motion.div
              initial={{
                opacity: 0,
                x: 0,
                y: 50,
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
              <TransitionGroup>
                {videoData &&
                  videoData.map((item, index) => (
                    <CSSTransition classNames='item' key={index} timeout={500}>
                      <div
                        style={{
                          position: 'relative',
                          paddingTop: '56.25%',
                          marginBottom:
                            videoData.length - 1 === index ? '0' : '24px', // Do not add bottom margin to last video
                        }}
                      >
                        <div>
                          <iframe
                            src={item.videoUrl}
                            frameborder='0'
                            allow='autoplay; fullscreen; picture-in-picture'
                            style={{
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              width: '100%',
                              height: '100%',
                            }}
                            title={item.title}
                          ></iframe>
                        </div>
                      </div>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </motion.div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Videos;
