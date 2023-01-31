import { Helmet } from 'react-helmet';
import { Row, Col, Image } from 'react-bootstrap';
import classes from '../../styles/Photos.module.css';

import jisun from '../../img/jisun.jpg';
import jisun2 from '../../img/jisun2.jpg';
import lamarina from '../../img/lamarina.jpg';
import rome from '../../img/jisun-rome.jpg';
import capetown from '../../img/capetown.jpg';
import admiraltycentre from '../../img/admiralty-centre.jpg';
import hat from '../../img/hat.jpg';
import nuremberg from '../../img/nuremberg.jpg';

import thumbnail from '../../img/thumbnail.png';
import thumbnail2 from '../../img/thumbnail2.png';
import lamarinaThumb from '../../img/lamarina-thumb.png';
import romethumb from '../../img/romethumb.png';
import capetownthumb from '../../img/capetownthumb.png';
import admiraltythumb from '../../img/admiraltythumb.png';
import hatthumb from '../../img/hatthumb.png';
import nurembergthumb from '../../img/nurembergthumb.png';

import h1 from '../../img/h1.png';
import h2 from '../../img/h2.png';
import h3 from '../../img/h3.png';
import h4 from '../../img/h4.png';
import h5 from '../../img/h5.png';
import h6 from '../../img/h6.png';
import h7 from '../../img/h7.png';
import h8 from '../../img/h8.png';

import love from '../../img/love.jpg';

import Gallery from 'react-grid-gallery';

// Gallery components:
// https://www.npmjs.com/package/react-photo-gallery
// https://github.com/neptunian/react-photo-gallery
// https://benhowell.github.io/react-grid-gallery/
// https://github.com/benhowell/react-grid-gallery
// Formerly Fancybox: https://fancyapps.com/docs/ui/fancybox/

// THIS ONE IS USED HERE: https://benhowell.github.io/react-grid-gallery/

// For fade in effect on scroll (option 3), watch here, but use opacity effect instead of bounce in: https://www.youtube.com/watch?v=hkhskSrT5SY

const IMAGES = [
  {
    src: jisun,
    thumbnail: thumbnail,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: 'Soho, Central Hong Kong',
  },
  {
    src: jisun2,
    thumbnail: thumbnail2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Hong Kong',
  },

  {
    src: lamarina,
    thumbnail: lamarinaThumb,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Central, Hong Kong',
  },
  {
    src: rome,
    thumbnail: romethumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: 'Rome, Italy',
  },
  {
    src: capetown,
    thumbnail: capetownthumb,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Cape Town, South Africa',
  },

  {
    src: admiraltycentre,
    thumbnail: admiraltythumb,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Admiralty Centre, Hong Kong',
  },
  {
    src: hat,
    thumbnail: hatthumb,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: 'Hokkaido, Japan',
  },
  {
    src: nuremberg,
    thumbnail: nurembergthumb,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Traveling to Nuremberg.',
  },
];

const Photos = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Photos</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h2 className={classes.LeadTitle}>
              <strong>Photos: Option 1</strong>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className={classes.MainText}>
              Bacon ipsum dolor amet beef ham hock corned beef, shank strip
              steak hamburger jowl alcatra picanha biltong doner ribeye
              capicola.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* Horizontal Scrollbar: Source:
            https://stackoverflow.com/questions/30507510/how-to-display-image-horizontally-in-scroll-bar
            Fiddle: http://jsfiddle.net/suraj_mewada/3zgmfkx0/ */}

            <div className={classes.Wrapper}>
              <div className={classes.Slider}>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.FirstSliderImage} src={h1} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.SliderImage} src={h2} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.SliderImage} src={h3} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.SliderImage} src={h4} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.SliderImage} src={h5} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.SliderImage} src={h6} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.SliderImage} src={h7} fluid />
                </div>
                <div style={{ display: 'inline' }}>
                  <Image className={classes.LastSliderImage} src={h8} fluid />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        {/* React Gallery Option - uninstall if decide to not use */}
        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Photos: Option 2</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Gallery images={IMAGES} />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        {/* Option 3 Source: https://mdbootstrap.com/docs/standard/extended/gallery/ */}

        {/* Remove captions - maybe not needed. */}

        {/* For lightbox effect: https://fancyapps.com/ 
        CDN in index.html file
        Can also install as npm - see docs */}
        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Photos: Option 3 (Fancybox)</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div class='row'>
              <div class='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                <a
                  href={hat}
                  data-fancybox='gallery'
                  // data-caption='Optional caption'
                >
                  <img
                    src={hat}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Boat on Calm Water'
                  />
                </a>

                <a
                  href={jisun}
                  data-fancybox='gallery'
                  // data-caption='Optional caption'
                >
                  <img
                    src={h1}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Wintry Mountain Landscape'
                  />
                </a>
              </div>

              <div class='col-lg-4 mb-4 mb-lg-0'>
                <a
                  href={love}
                  data-fancybox='gallery'
                  // data-caption='Optional caption'
                >
                  <img
                    src={h7}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Mountains in the Clouds'
                  />
                </a>

                <a
                  href={capetown}
                  data-fancybox='gallery'
                  // data-caption='Cape Town, South Africa'
                >
                  <img
                    src={capetown}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Cape Town, South Africa'
                  />
                </a>
              </div>

              <div class='col-lg-4 mb-4 mb-lg-0'>
                <a
                  href={rome}
                  data-fancybox='gallery'
                  // data-caption='Optional caption'
                >
                  <img
                    src={rome}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Waves at Sea'
                  />
                </a>

                <a
                  href={jisun2}
                  data-fancybox='gallery'
                  // data-caption='Optional caption'
                >
                  <img
                    src={h2}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Photos: Option 4 (Lightbox 2)</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div class='row'>
              <div class='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                <a href={hat} data-lightbox='image-1'>
                  <img
                    src={hat}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>

                <a href={h1} data-lightbox='image-1'>
                  <img
                    src={h1}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>
              </div>

              <div class='col-lg-4 mb-4 mb-lg-0'>
                <a href={love} data-lightbox='image-1'>
                  <img
                    src={love}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>

                <a href={capetown} data-lightbox='image-1'>
                  <img
                    src={capetown}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>
              </div>

              <div class='col-lg-4 mb-4 mb-lg-0'>
                <a href={rome} data-lightbox='image-1'>
                  <img
                    src={rome}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>

                <a href={h2} data-lightbox='image-1'>
                  <img
                    src={h2}
                    class='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Photos;
