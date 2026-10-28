import type { ComponentProps } from 'react'

interface ImageProps extends Omit<ComponentProps<'img'>, 'src' | 'alt'> {
  src: string
  // Required so every image is described for screen readers; pass '' if decorative
  alt: string
}

// Lazy by default; pass loading="eager" for images visible on first paint
export const Image = ({
  loading = 'lazy',
  decoding = 'async',
  ...props
}: ImageProps) => {
  return <img loading={loading} decoding={decoding} {...props} />
}
