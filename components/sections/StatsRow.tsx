import { stats } from "@/constants/content";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function StatsRow() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
      <Reveal>
        <Card className="p-6 sm:p-8">
          <p className="mb-5 font-mono text-xs tracking-wide text-[#6b7482]">NUMBERS</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold italic text-[#eef1f5]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-[#9aa4b2]">{s.label}</p>
                <p className="font-mono text-[11px] text-[#6b7482]">{s.context}</p>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
