"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type EventLocation = {
  title: string;
  date: string;
  coords: [number, number];
  link: string;
};

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const events: EventLocation[] = [
  {
    title: "Adel, GA",
    date: "June 26–27, 2026",
    coords: [-83.4235, 31.1373],
    link:
      "https://brushfire.com/lifestylechristianity/pl26adel/627833/register",
  },
  {
    title: "Sioux Falls, SD",
    date: "September 4–5, 2026",
    coords: [-96.7311, 43.5446],
    link:
      "https://brushfire.com/lifestylechristianity/pl26siouxfalls/594411",
  },
  {
    title: "Fort Worth, TX",
    date: "September 11–12, 2026",
    coords: [-97.3308, 32.7555],
    link:
      "https://brushfire.com/lifestylechristianity/pl0926TX/618915/tickets",
  },
];

export default function EventMap() {
  const [activeEvent, setActiveEvent] =
    useState<EventLocation | null>(null);

  return (
    <section className="w-full bg-[#f7f1e8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#9a7d56]">
            Train With Dan Mohler
          </p>

          {/* <h2 className="text-4xl font-semibold text-[#2b2118] md:text-5xl">
            Upcoming Events
          </h2> */}

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5d4b]">
            Join us this year as we travel across the country
            equipping believers to walk in identity, love, and
            the power of the Gospel.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#e5d8c8] bg-[#fffaf3] p-5 shadow-sm">
          <ComposableMap
            projection="geoAlbersUsa"
            className="w-full"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#eadcc8"
                    stroke="#fffaf3"
                    strokeWidth={0.8}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                        fill: "#e2d1ba",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {events.map((event) => (
              <Marker
                key={event.title}
                coordinates={event.coords}
              >
                <g
                  onClick={() => setActiveEvent(event)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {/* Glow */}
                  <circle
                    r={16}
                    fill="#b91c1c"
                    opacity={0.15}
                  />

                  {/* Pin */}
                  <circle
                    r={8}
                    fill="#dc2626"
                    stroke="#ffffff"
                    strokeWidth={2}
                  />

                  {/* City Name */}
                  <text
                    textAnchor="middle"
                    y={28}
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      fill: "#4b3b2a",
                      pointerEvents: "none",
                    }}
                  >
                    {event.title}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>

          {activeEvent && (
            <div className="absolute bottom-6 left-6 z-20 w-[320px] rounded-3xl border border-[#eadcc8] bg-white p-6 shadow-2xl">
              <button
                type="button"
                onClick={() =>
                  setActiveEvent(null)
                }
                className="absolute right-5 top-4 text-2xl text-neutral-400 hover:text-neutral-700"
              >
                ×
              </button>

              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9a7d56]">
                Power + Love Event
              </p>

              <h3 className="text-2xl font-semibold text-[#2b2118]">
                {activeEvent.title}
              </h3>

              <p className="mt-2 text-[#6f5d4b]">
                {activeEvent.date}
              </p>

              <a
                href={activeEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-[#b45309] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#92400e]"
              >
                View Event
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}