import Script from 'next/script'

const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID

export const Analytics = () => {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id={UMAMI_WEBSITE_ID}
        defer
      />
    </>
  )
}
