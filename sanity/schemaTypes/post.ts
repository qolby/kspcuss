import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Berita & Pengumuman',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title', // auto-generated from the title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Terbit',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Berita', value: 'berita'},
          {title: 'Pengumuman', value: 'pengumuman'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true, // allows cropping focus point
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Teks Alt (Aksesibilitas)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Isi Artikel',
      type: 'array',
      of: [
        {
          type: 'block', // Sanity's rich text (Portable Text)
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Tanpa Judul',
        subtitle:
          subtitle === 'berita' ? 'Berita' : subtitle === 'pengumuman' ? 'Pengumuman' : 'Draft',
        media,
      }
    },
  },
})
