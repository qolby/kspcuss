import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {PreviewAction} from './plugins/previewAction'

export default defineConfig({
  name: 'default',
  title: 'KSP CU Sinar Sejahtera',

  projectId: 'nqdnlgxk',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      // Only add the preview button on 'post' documents
      if (context.schemaType === 'post') {
        return [PreviewAction, ...prev]
      }
      return prev
    },
  },
})
