import { defineField, defineType } from 'sanity'
import { Layout } from 'phosphor-react'

export default defineType({
  name: 'MediaModule',
  title: 'Media Module',
  type: 'object',
  icon: Layout,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
    }),
    defineField({
      name: 'cta',
      title: 'Cta',
      type: 'Cta',
    }),
    defineField({
      type: 'boolean',
      name: 'isDark',
      title: 'Is Dark?',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'ImageAlt',
      title: 'Alternative text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'imageOnRight',
      title: 'Image On Right?',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
})
