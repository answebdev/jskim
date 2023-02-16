import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photos',
  title: 'Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'image_01',
      title: 'Image 1 (Landscape)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title_01',
      title: 'Title 1',
      type: 'string',
    }),
    defineField({
      name: 'image_02',
      title: 'Image 2 (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title_02',
      title: 'Title 2',
      type: 'string',
    }),
    defineField({
      name: 'image_03',
      title: 'Image 3 (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title_03',
      title: 'Title 3',
      type: 'string',
    }),
    defineField({
      name: 'image_04',
      title: 'Image 4 (Landscape)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title_04',
      title: 'Title 4',
      type: 'string',
    }),
    defineField({
      name: 'image_05',
      title: 'Image 5 (Landscape)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title_05',
      title: 'Title 5',
      type: 'string',
    }),
    defineField({
      name: 'image_06',
      title: 'Image 6 (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title_06',
      title: 'Title 6',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'contactImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
