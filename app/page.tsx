import TrainWithDan from "@/components/TrainWithDan";
import UpcomingDanEvents from "@/components/UpcomingDanEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <TrainWithDan />
      <UpcomingDanEvents />
      <UpcomingDanEvents />
    </main>
  );
}