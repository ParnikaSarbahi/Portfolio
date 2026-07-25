"use client";

import { profile } from "@/constants/content";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Reveal from "@/components/ui/Reveal";
import { useLeetCode } from "@/hooks/useLeetCode";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Renders ~26 weeks (roughly 6 months) of the real submissionCalendar as a
// heatmap grid, columns = weeks, rows = days (Sun-Sat).
function buildWeeks(calendar: Record<string, number>) {
  const now = Math.floor(Date.now() / 1000);
  const dayInSec = 86400;
  const weeks = 26;
  const days: { ts: number; count: number }[] = [];

  const todayDate = new Date(now * 1000);
  const dayOfWeek = todayDate.getUTCDay(); // 0 = Sun
  const endTs = now + (6 - dayOfWeek) * dayInSec;

  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const ts = endTs - i * dayInSec;
    const dayStart = Math.floor(ts / dayInSec) * dayInSec;
    days.push({ ts: dayStart, count: calendar[dayStart.toString()] ?? 0 });
  }

  const cols: { ts: number; count: number }[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    cols.push(days.slice(i, i + 7));
  }
  return cols;
}

// Label a column with a month name only on the week a new month begins,
// so labels don't repeat every column.
function monthLabels(weeks: { ts: number; count: number }[][]) {
  let lastMonth = -1;
  return weeks.map((week) => {
    const firstDay = new Date(week[0].ts * 1000);
    const month = firstDay.getUTCMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      return MONTH_NAMES[month];
    }
    return "";
  });
}

function intensity(count: number) {
  if (count === 0) return "bg-white/[0.04]";
  if (count <= 1) return "bg-[#1f4a33]";
  if (count <= 3) return "bg-[#2a563f]";
  if (count <= 6) return "bg-[#3f8562]";
  return "bg-[#5fd394]";
}

export default function LeetCodeGrid() {
  const stats = useLeetCode();
  const weeks = stats ? buildWeeks(stats.calendar) : [];
  const labels = stats ? monthLabels(weeks) : [];

  return (
    <Reveal id="leetcode" className="h-full">
      <a
        href={profile.leetcodeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <Card hover className="flex h-full flex-col p-6 sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-sm text-[#9aa4b2]">LeetCode activity</p>
            <span className="font-mono text-xs text-[#6fbf94]">Profile →</span>
          </div>

          {stats ? (
            <div className="flex gap-1 overflow-x-auto pb-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      title={`${new Date(day.ts * 1000).toDateString()}: ${day.count} submissions`}
                      className={`h-3 w-3 rounded-[2px] sm:h-3.5 sm:w-3.5 ${intensity(day.count)}`}
                    />
                  ))}
                  <span className="mt-0.5 h-3 font-mono text-[8px] leading-3 text-[#6b7482]">
                    {labels[wIdx]}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-24 animate-pulse rounded-lg bg-white/[0.03]" />
          )}

          <div className="mt-4 flex gap-8">
            <div>
              <p className="font-display text-2xl italic text-[#eef1f5]">
                {stats ? stats.total : "—"}
              </p>
              <p className="font-mono text-xs text-[#6b7482]">Solved</p>
            </div>
            <div>
              <p className="font-display text-2xl italic text-[#6fbf94]">
                {stats ? stats.easy : "—"}
              </p>
              <p className="font-mono text-xs text-[#6b7482]">Easy</p>
            </div>
            <div>
              <p className="font-display text-2xl italic text-[#e0b95f]">
                {stats ? stats.medium : "—"}
              </p>
              <p className="font-mono text-xs text-[#6b7482]">Medium</p>
            </div>
            <div>
              <p className="font-display text-2xl italic text-[#e07a5f]">
                {stats ? stats.hard : "—"}
              </p>
              <p className="font-mono text-xs text-[#6b7482]">Hard</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Chip variant="accent">@{profile.leetcodeUsername}</Chip>
          </div>
        </Card>
      </a>
    </Reveal>
  );
}
