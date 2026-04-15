import Image, { StaticImageData } from 'next/image'
import dan1 from '@/assets/images/dan1.jpg'
import dan3 from '@/assets/images/dan3.jpg'
import dan4 from '@/assets/images/dan4.jpg'
import dan5 from '@/assets/images/dan5.jpg'
import dan6 from '@/assets/images/dan6.jpg'
import dan7 from '@/assets/images/dan7.jpg'

type DetailCard = {
  title: string
  description: string
}

type ScheduleDay = {
  day: string
  items: {
    time: string
    title: string
  }[]
}

const detailCards: DetailCard[] = [
  {
    title: 'Identity',
    description:
      'Be strengthened in who you are in Christ and what it means to live from freedom, not striving.',
  },
  {
    title: 'Teaching',
    description:
      'Receive clear, life-giving teaching centered on Jesus, transformation, and everyday faith.',
  },
  {
    title: 'Activation',
    description:
      'Move beyond inspiration into response, obedience, and practical kingdom living.',
  },
]

const schedule: ScheduleDay[] = [
  {
    day: 'Friday, May 8',
    items: [
      { time: '8:00 AM', title: 'Doors Open' },
      { time: '9:00 AM', title: 'Session 1' },
      { time: '11:30 AM', title: 'Lunch Break' },
      { time: '2:00 PM', title: 'Session 2' },
      { time: '4:00 PM', title: 'Dinner Break' },
      { time: '7:00 PM', title: 'Session 3' },
    ],
  },
  {
    day: 'Saturday, May 9',
    items: [
      { time: '7:00 AM', title: 'Vision Breakfast' },
      { time: '9:30 AM', title: 'Session 1' },
      { time: '11:30 AM', title: 'Lunch Break' },
      { time: '2:00 PM', title: 'Session 2' },
      { time: '4:00 PM', title: 'Dinner Break' },
      { time: '7:00 PM', title: 'Session 3' },
    ],
  },
]

const galleryImages: StaticImageData[] = [dan1, dan3, dan4, dan5, dan6, dan7]

export default function TrainWithDan() {
  return (
    <main className="bg-black text-white">
      <section className="relative isolate min-h-[92svh] overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 md:hidden">
            <Image
              src={dan1}
              alt="Dan Mohler event"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-45"
            />
          </div>

          <div className="absolute inset-0 hidden md:block">
            <div className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="pointer-events-none h-full w-full"
                src="https://www.youtube.com/embed/UH36_g5ZiSc?start=1436&autoplay=1&mute=1&controls=0&loop=1&playlist=UH36_g5ZiSc&playsinline=1&modestbranding=1&rel=0"
                title="Train With Dan background video"
                allow="autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-center justify-center px-6 pb-16 pt-28 sm:px-8 lg:px-12">
          <div className="max-w-5xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 sm:text-xs">
              Dallas–Fort Worth • Two-Day Training Event
            </p>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl xl:text-[5.75rem]">
              Train with
              <br />
              Dan Mohler
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-xl">
              Freedom and knowing who you are in Christ is just the beginning.
              Join us for a weekend of worship, identity, practical teaching,
              and activation for everyday life with Jesus.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://brushfire.com/lifestylechristianity/pl0526TX/618914/register"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-neutral-200"
              >
                Buy Tickets
              </a>
              <a
                href="#event-info"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Training Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950/70">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/90">
              A Weekend to Be Marked by Jesus
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Identity.
              <br />
              Freedom.
              <br />
              Activation.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              This is a gathering for believers hungry to know Him more deeply,
              walk in freedom, and live the gospel with clarity, boldness, and
              love.
            </p>
          </div>
        </div>
      </section>

      <section
        id="event-info"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dan1}
                alt="Train with Dan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300/90">
              What Is Train with Dan?
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              A life-giving
              <br />
              training weekend
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              <p>
                Train with Dan Mohler is a focused event built to encourage,
                awaken, and equip believers through Christ-centered teaching and
                worship.
              </p>
              <p>
                It is designed to strengthen people in identity, freedom, and
                practical everyday ministry so faith is not just admired, but
                lived.
              </p>
              <p>
                Come ready to be refreshed, challenged, and called higher in
                your walk with Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="mx-auto max-w-7xl px-6 pb-6 sm:px-8 lg:px-12 lg:pb-10"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {detailCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300/90">
                {card.title}
              </p>
              <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300/90">
            Schedule
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            Event
            <br />
            Schedule
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
            A simple rhythm of worship, teaching, and response across two
            days.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {schedule.map((group) => (
            <div
              key={group.day}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm sm:p-7"
            >
              <div className="border-b border-white/10 pb-5 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
                  {group.day}
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  {group.day.includes('Friday') ? 'Day One' : 'Day Two'}
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={`${group.day}-${item.time}-${item.title}`}
                    className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/8 bg-black/30 px-4 py-4 sm:px-5"
                  >
                    <div className="min-w-0">
                      <p className="text-base font-semibold leading-tight text-white sm:text-lg">
                        {item.title}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-amber-300 sm:text-sm">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] ${
                index === 0 || index === 5 ? 'sm:col-span-2' : ''
              }`}
            >
              <div
                className={`relative w-full ${
                  index === 0 || index === 5
                    ? 'aspect-[16/10]'
                    : 'aspect-[4/5]'
                }`}
              >
                <Image
                  src={image}
                  alt={`Train with Dan gallery image ${index + 1}`}
                  fill
                  sizes={
                    index === 0 || index === 5
                      ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw'
                      : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  }
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="register"
        className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/90">
          Reserve Your Seat
        </p>

        <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          Join us for two days
          <br />
          of training and encouragement
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
          Make plans to be in the room for a weekend centered on identity,
          freedom, worship, and practical equipping.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="https://brushfire.com/lifestylechristianity/pl0526TX/618914/register"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-neutral-200"
          >
            Buy Tickets
          </a>
          <a
            href="#event-info"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  )
}