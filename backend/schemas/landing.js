import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'subheader',
      title: 'Subheader',
      type: 'string',
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
