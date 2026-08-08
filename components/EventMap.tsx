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
  coords: [longitude: number, latitude: number];
  link: string;
};

type MapGeography = {
  rsmKey: string;
  [key: string]: unknown;
};

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const EVENTS: EventLocation[] = [
  {
    title: "Fort Worth, TX",
    date: "September 11–12, 2026",
    coords: [-97.3308, 32.7555],
    link: "https://www.powerandlove.org/fort-worth-tx-2026",
  },
  {
    title: "Midland, TX",
    date: "October 16–17, 2026",
    coords: [-102.0779, 31.9973],
    link: "https://www.powerandlove.org/midland-tx",
  },
];

export default function EventMap() {
  const [activeEvent, setActiveEvent] = useState<EventLocation | null>(null);

  return (
    <section className="w-full bg-[#f7f1e8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#9a7d56]">
            Train With Dan Mohler
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5d4b]">
            Join us this year as we travel across the country, equipping
            believers to walk in identity, love, and the power of the Gospel.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#e5d8c8] bg-[#fffaf3] p-5 shadow-sm">
          <ComposableMap
            projection="geoAlbersUsa"
            className="w-full"
            aria-label="Map of upcoming Train With Dan Mohler events"
          >
            <Geographies geography={GEO_URL}>
              {({
                geographies,
              }: {
                geographies: MapGeography[];
              }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#eadcc8"
                    stroke="#fffaf3"
                    strokeWidth={0.8}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#e2d1ba" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {EVENTS.map((event) => (
              <Marker key={event.title} coordinates={event.coords}>
                <g
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${event.title} event details`}
                  onClick={() => setActiveEvent(event)}
                  onKeyDown={(keyEvent) => {
                    if (keyEvent.key === "Enter" || keyEvent.key === " ") {
                      keyEvent.preventDefault();
                      setActiveEvent(event);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <circle r={16} fill="#b91c1c" opacity={0.15} />
                  <circle
                    r={8}
                    fill="#dc2626"
                    stroke="#ffffff"
                    strokeWidth={2}
                  />
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
            <div
              role="dialog"
              aria-label={`${activeEvent.title} event details`}
              className="absolute inset-x-4 bottom-4 z-20 w-auto rounded-3xl border border-[#eadcc8] bg-white p-6 shadow-2xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[320px]"
            >
              <button
                type="button"
                aria-label="Close event details"
                onClick={() => setActiveEvent(null)}
                className="absolute right-5 top-4 text-2xl text-neutral-400 hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b45309]"
              >
                ×
              </button>

              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9a7d56]">
                Power + Love Event
              </p>
              <h3 className="text-2xl font-semibold text-[#2b2118]">
                {activeEvent.title}
              </h3>
              <p className="mt-2 text-[#6f5d4b]">{activeEvent.date}</p>

              <a
                href={activeEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-[#b45309] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#92400e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b45309]"
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
