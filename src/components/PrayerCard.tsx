interface PrayerCardProps {
  prayer: string;
}

export function PrayerCard({ prayer }: PrayerCardProps) {
  return (
    <section className="reading-canvas min-h-full px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-[40rem]">
        <p className="label-gold">Pray this slowly</p>
        <div className="mt-8 border-l-2 border-gold pl-5 sm:pl-7">
          <p className="font-display text-xl leading-[1.7] text-charcoal dark:text-cream/95 sm:text-2xl">
            {prayer}
          </p>
        </div>
      </div>
    </section>
  );
}
