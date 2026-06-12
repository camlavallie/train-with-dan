'use client'

import Script from 'next/script'

const embedId = '36aefc0b-2e40-46d0-9e87-cd586cb27d38'

export default function KindfulDanEmbed() {
  return (
    <section id="give" className="bg-[#f7f4ee] px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_460px]">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9a6a2f]">
            Partner With The Mission
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1c1a15] md:text-5xl">
            Help people encounter Jesus and be transformed.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5f594f]">
            Your generosity helps support training, equipping, and moments where
            people encounter Jesus and learn to live from identity, love, and
            freedom.
          </p>
        </div>

        <div className="relative h-[430px] w-full max-w-[460px] justify-self-center overflow-hidden rounded-xl lg:justify-self-end">
          <div
            id={`kindful-donate-form-${embedId}`}
            className="kindful-embed-wrapper absolute left-0 top-0 w-full"
          />
        </div>
      </div>

      <Script
        id="kindful-dan-donate-script"
        src={`https://lifestylechristianity-bloom.kindful.com/embeds/${embedId}/init.js?type=form`}
        strategy="afterInteractive"
        data-embed-id={embedId}
        data-lookup-type="jquery-selector"
        data-lookup-value={`#kindful-donate-form-${embedId}`}
      />
    </section>
  )
}