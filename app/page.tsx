// import KindfulDanEmbed from "@/components/KindfulDanEmbed";
import TrainWithDan from "@/components/TrainWithDan";
import UpcomingDanEvents from "@/components/UpcomingDanEvents";
import EventMap from "@/components/EventMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <TrainWithDan />
      <UpcomingDanEvents />
      {/* <KindfulDanEmbed /> */}
      <EventMap />
    </main>
  );
}