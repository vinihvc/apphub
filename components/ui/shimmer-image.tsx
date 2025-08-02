'use client'

import Image from 'next/image'
import React from 'react'

const shimmer = (w: number | string, h: number | string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`

interface ShimmerImageProps extends React.ComponentProps<typeof Image> {}

const FALLBACK_SRC = '/images/placeholder.svg'

export const ShimmerImage = (props: ShimmerImageProps) => {
  const { width, height, src, ...rest } = props

  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return <Image src={FALLBACK_SRC} width={width} height={height} {...rest} />
  }

  const blurDataURL = shimmer(width || 50, height || 50)

  return (
    <Image
      src={src}
      placeholder="blur"
      blurDataURL={blurDataURL}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      {...rest}
    />
  )
}
