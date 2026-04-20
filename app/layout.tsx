import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import HubspotTimeTracking from '@/components/HubspotTimeTracking'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dan Mohler Training Events',
  description:
    'A two day training focused on identity, freedom, and practical equipping for everyday life with Jesus.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <HubspotTimeTracking />

        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="https://js-na2.hs-scripts.com/243370621.js"
        />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !(function(f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function() {
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = true;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = true;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '3910007229133536');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
// import type { Metadata } from "next";
// import Script from 'next/script'
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import HubspotTimeTracking from "@/components/HubspotTimeTracking";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Dan Mohler Training Events",
//   description: "A two day training focused on identity, freedom, and practical equipping for everyday life with Jesus.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >


//       <body className="min-h-full flex flex-col">
//         <Navbar />
//         {children}
//         <HubspotTimeTracking/>
// <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/243370621.js"></script>
// {/* Meta Pixel */}
//         <Script id="meta-pixel" strategy="afterInteractive">
//           {`
//             !(function(f, b, e, v, n, t, s) {
//               if (f.fbq) return;
//               n = f.fbq = function() {
//                 n.callMethod
//                   ? n.callMethod.apply(n, arguments)
//                   : n.queue.push(arguments);
//               };
//               if (!f._fbq) f._fbq = n;
//               n.push = n;
//               n.loaded = true;
//               n.version = '2.0';
//               n.queue = [];
//               t = b.createElement(e);
//               t.async = true;
//               t.src = v;
//               s = b.getElementsByTagName(e)[0];
//               s.parentNode.insertBefore(t, s);
//             })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

//             fbq('init', '3910007229133536');
//             fbq('track', 'PageView');
//           `}
//         </Script>
 

//       </body>
//     </html>
//   );
// }
