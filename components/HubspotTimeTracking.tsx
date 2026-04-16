'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    _hsq: any[]
  }
}

export default function HubspotTimeTracking() {
  const startTime = useRef<number>(Date.now())
  const sent = useRef(false)

  useEffect(() => {
    const sendEvent = () => {
      if (sent.current) return
      sent.current = true

      const seconds = Math.round((Date.now() - startTime.current) / 1000)
      const params = new URLSearchParams(window.location.search)

      const utmSource = params.get('utm_source') || ''
      const utmMedium = params.get('utm_medium') || ''
      const utmCampaign = params.get('utm_campaign') || ''
      const utmContent = params.get('utm_content') || ''

      if (window._hsq) {
        window._hsq.push([
          'trackCustomBehavioralEvent',
          {
            name: 'pe243370621_landing_page_engagement',
            properties: {
              seconds_on_page: seconds,
              page_path: window.location.pathname,
              engaged: seconds >= 10,
              utm_source: utmSource,
              utm_medium: utmMedium,
              utm_campaign: utmCampaign,
              utm_content: utmContent,
            },
          },
        ])
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') sendEvent()
    }

    window.addEventListener('beforeunload', sendEvent)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeunload', sendEvent)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      sendEvent()
    }
  }, [])

  return null
}