import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photos',
  title: 'Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'image_01',
      title: 'Gallery Image 1 (Landscape)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'thumbnail_01',
    //   title: 'Thumbnail 1 (Landscape)',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'title_01',
      title: 'Alternate Text 1 (if the image cannot be viewed, this is the text that will show)',
      type: 'string',
    }),
    defineField({
      name: 'image_02',
      title: 'Gallery Image 2 (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'thumbnail_02',
    //   title: 'Thumbnail 2 (Portrait)',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'title_02',
      title: 'Alternate Text 2 (if the image cannot be viewed, this is the text that will show)',
      type: 'string',
    }),
    defineField({
      name: 'image_03',
      title: 'Gallery Image 3 (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'thumbnail_03',
    //   title: 'Thumbnail 3 (Portrait)',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'title_03',
      title: 'Alternate Text 3 (if the image cannot be viewed, this is the text that will show)',
      type: 'string',
    }),
    defineField({
      name: 'image_04',
      title: 'Gallery Image 4 (Landscape)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'thumbnail_04',
    //   title: 'Thumbnail 4 (Landscape)',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'title_04',
      title: 'Alternate Text 4 (if the image cannot be viewed, this is the text that will show)',
      type: 'string',
    }),
    defineField({
      name: 'image_05',
      title: 'Gallery Image 5 (Landscape)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'thumbnail_05',
    //   title: 'Thumbnail 5 (Landscape)',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'title_05',
      title: 'Alternate Text 5 (if the image cannot be viewed, this is the text that will show)',
      type: 'string',
    }),
    defineField({
      name: 'image_06',
      title: 'Gallery Image 6 (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'thumbnail_06',
    //   title: 'Thumbnail 6 (Portrait)',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'title_06',
      title: 'Alternate Text 6 (if the image cannot be viewed, this is the text that will show)',
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
