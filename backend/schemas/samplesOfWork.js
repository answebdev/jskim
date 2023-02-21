import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'samplesOfWork',
  title: 'About Page: Samples of Work',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'workSamples',
      title: 'Samples of Work',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
})
