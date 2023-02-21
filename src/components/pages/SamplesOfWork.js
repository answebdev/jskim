import React, { useState, useEffect } from 'react';
import sanityClient from '../../client.js';
import BlockContent from '@sanity/block-content-to-react';
import classes from '../../styles/SamplesOfWork.module.css';

const SamplesOfWork = () => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "samplesOfWork"] | order(_createdAt asc) {
            category,
            workSamples,
        }`
      )
      .then((data) => setAllData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {allData &&
        allData.map((item, index) => (
          <div key={index} className={classes.MainDiv}>
            <p className={classes.CategoryHeader}>{item.category}</p>
            <BlockContent
              className={classes.WorkSample}
              blocks={item.workSamples}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
            <br />
          </div>
        ))}
    </>
  );
};

export default SamplesOfWork;
