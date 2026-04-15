type EventItem = {
  city: string
  venue: string
  date: string
  time: string
  description: string
  href: string
  status?: string
  endsAt: string
}

const upcomingEvents: EventItem[] = [
  {
    city: 'Fort Worth, TX',
    venue: 'Lifestyle Christianity',
    date: 'May 8–9, 2026',
    time: 'Friday, May 8, 2026 8:00 AM - Saturday, May 9, 2026 11:00 PM CDT',
    description:
      'A two-day training focused on identity, freedom, and practical equipping for everyday life with Jesus.',
    href: 'https://brushfire.com/lifestylechristianity/pl0526TX/618914/register',
    status: 'Open Registration',
    endsAt: '2026-05-09T23:00:00-05:00',
  },
  {
    city: 'Adel, GA',
    venue: 'Adel Church of God',
    date: 'June 26–27, 2026',
    time: 'Friday, Jun 26, 2026 8:00 AM - Saturday, Jun 27, 2026 11:59 PM EDT',
    description:
      'A two-day training focused on identity, freedom, and practical equipping for everyday life with Jesus.',
    href: 'https://brushfire.com/lifestylechristianity/pl26adel/627833/register',
    status: 'Open Registration',
    endsAt: '2026-06-27T23:59:00-04:00',
  },
  {
    city: 'Fort Worth, TX',
    venue: 'Lifestyle Christianity',
    date: 'Sep 11–12, 2026',
    time: 'Friday, Sep 11, 2026 8:00 AM - Saturday, Sep 12, 2026 11:00 PM CDT',
    description:
      'A regional training event designed to encourage believers in identity, freedom, and everyday ministry.',
    href: 'https://brushfire.com/lifestylechristianity/pl0926TX/618915/tickets',
    status: 'Open Registration',
    endsAt: '2026-09-12T23:00:00-05:00',
  },
]

export default function UpcomingDanEvents() {
  const now = new Date()

  const visibleEvents = upcomingEvents.filter(
    (event) => new Date(event.endsAt) >= now
  )

  if (visibleEvents.length === 0) {
    return null
  }

  return (
    <section className="bg-[#f5f1ea] py-24 text-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-500">
            Upcoming Events
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Upcoming Dan Mohler
            <br />
            Training Events
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Find an upcoming training event near you and join us for worship,
            identity, freedom, and practical equipping.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {visibleEvents.map((event) => (
            <article
              key={`${event.city}-${event.date}`}
              className="flex h-full flex-col rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-500">
                    {event.city}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold leading-tight text-neutral-950">
                    {event.venue}
                  </h3>
                </div>

                {event.status && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">
                    {event.status}
                  </span>
                )}
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                    Date
                  </p>
                  <p className="mt-2 text-xl font-semibold text-neutral-950">
                    {event.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                    Time
                  </p>
                  <p className="mt-2 text-lg font-medium text-neutral-800">
                    {event.time}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                    Details
                  </p>
                  <p className="mt-2 text-base leading-8 text-neutral-600">
                    {event.description}
                  </p>
                </div>
              </div>

              <a
                href={event.href}
                className="mt-10 inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
              >
                View Event
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}