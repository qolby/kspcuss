// sanity/plugins/previewAction.ts

const PREVIEW_SECRET = 'ksp-cuss-preview-2026' // must match SANITY_PREVIEW_SECRET in your .env
const PREVIEW_BASE_URL = 'http://localhost:4321' // change to your live URL after deployment

export function PreviewAction(props: any) {
  const {draft, published} = props

  // Use draft if it exists, otherwise fall back to published
  const doc = draft || published

  // Don't show the button if there's no document yet
  if (!doc) return null

  const slug = doc?.slug?.current

  // Don't show the button if there's no slug yet
  if (!slug) {
    return {
      label: 'Buka Preview',
      disabled: true,
      title: 'Isi slug terlebih dahulu untuk menggunakan preview',
    }
  }

  const previewUrl = `${PREVIEW_BASE_URL}/preview/${slug}?secret=${PREVIEW_SECRET}`

  return {
    label: 'Buka Preview',
    onHandle: () => {
      window.open(previewUrl, '_blank')
    },
  }
}
