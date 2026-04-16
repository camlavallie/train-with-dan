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

      if (window._hsq) {
        window._hsq.push([
          'trackCustomBehavioralEvent',
          {
            name: 'pe243370621_landing_page_engagement',
            properties: {
              seconds_on_page: seconds,
              page_path: window.location.pathname,
              engaged: seconds >= 10,
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
// 'use client'

// import { useEffect, useRef } from 'react'

// declare global {
//   interface Window {
//     _hsq: any[]
//   }
// }

// export default function HubspotTimeTracking() {
//   const startTime = useRef<number>(Date.now())
//   const sent = useRef(false)

//   useEffect(() => {
//     const sendEvent = () => {
//       if (sent.current) return
//       sent.current = true

//       const seconds = Math.round((Date.now() - startTime.current) / 1000)

//       if (window._hsq) {
//         window._hsq.push([
//           'trackCustomBehavioralEvent',
//           {
//             name: 'pe243370621_landing_page_engagement',
//             properties: {
//               seconds_on_page: seconds,
//               page_path: window.location.pathname,
//               engaged: seconds >= 10,
//             },
//           },
//         ])
//       }
//     }

//     window.addEventListener('beforeunload', sendEvent)

//     document.addEventListener('visibilitychange', () => {
//       if (document.visibilityState === 'hidden') sendEvent()
//     })

//     return () => {
//       sendEvent()
//     }
//   }, [])

//   return null
// }