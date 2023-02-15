import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '5ecy4xz4', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  apiVersion: '2023-01-30',
  useCdn: true,
});
