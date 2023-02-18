import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import sanityClient from '../../client.js';

// import ReactPlayer from 'react-player';

import classes from '../../styles/Videos.module.css';

// Video Players:
// https://video-react.js.org/
// https://www.npmjs.com/package/react-player

// This one is used:
// https://cookpete.com/react-player/
// https://github.com/CookPete/react-player

const Videos = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "videos"] | order(_createdAt asc){
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
            {/* <br />
            <br /> */}
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
                        // key={index}
                        style={{
                          position: 'relative',
                          paddingTop: '56.25%',
                          // marginBottom: '24px',
                          marginBottom:
                            videoData.length - 1 === index ? '0' : '24px', // Do not add bottom margin to last video
                        }}
                      >
                        {/* <ReactPlayer
                      controls={true}
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                      }}
                      width='100%'
                      height='100%'
                      url={item.videoUrl}
                      // title={item.title}
                    /> */}

                        <div>
                          <iframe
                            src={item.videoUrl}
                            frameborder='0'
                            allow='autoplay; fullscreen; picture-in-picture'
                            // allow='autoplay; encrypted-media'
                            allowFullScreen
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
                        {/* <script src='https://player.vimeo.com/api/player.js'></script> */}
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

// ORIGINAL CODE WITH REACT PLAYER

// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { Row, Col } from 'react-bootstrap';
// import sanityClient from '../../client.js';

// import ReactPlayer from 'react-player';

// import classes from '../../styles/Videos.module.css';

// // Video Players:
// // https://video-react.js.org/
// // https://www.npmjs.com/package/react-player

// // This one is used:
// // https://cookpete.com/react-player/
// // https://github.com/CookPete/react-player

// const Videos = () => {
//   const [videoData, setVideoData] = useState(null);

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "videos"] | order(_createdAt asc){
//           videoUrl,
//           title
//         }`
//       )
//       .then((data) => setVideoData(data))
//       .catch(console.error);
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <title>Jisun Kim | Videos</title>
//       </Helmet>
//       <div className={classes.Container}>
//         <Row>
//           <Col md={12}>
//             <h2 className={classes.LeadTitle}>
//               <strong>Videos</strong>
//             </h2>
//             <br />
//           </Col>
//         </Row>

//         <Row>
//           <Col md={12}>
//             <p className={classes.MainText}>
//               A selection of some of my video shoots.
//             </p>
//             {/* <br />
//             <br /> */}
//           </Col>
//         </Row>

//         <Row>
//           <Col md={2}></Col>
//           <Col md={8}>
//             {videoData &&
//               videoData.map((item, index) => {
//                 return (
//                   <div
//                     key={index}
//                     style={{
//                       position: 'relative',
//                       paddingTop: '56.25%',
//                       // marginBottom: '24px',
//                       marginBottom:
//                         videoData.length - 1 === index ? '0' : '24px', // Do not add bottom margin to last video
//                     }}
//                   >
//                     <ReactPlayer
//                       controls={true}
//                       style={{
//                         position: 'absolute',
//                         top: '0',
//                         left: '0',
//                       }}
//                       width='100%'
//                       height='100%'
//                       url={item.videoUrl}
//                       // title={item.title}
//                     />
//                   </div>
//                 );
//               })}
//           </Col>
//           <Col md={2}></Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Videos;
