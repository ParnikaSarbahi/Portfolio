import { NextResponse } from "next/server";
import { profile } from "@/constants/content";

const LEETCODE_GQL = "https://leetcode.com/graphql";

const QUERY = `
  query userStats($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      submissionCalendar
    }
  }
`;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(LEETCODE_GQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: profile.leetcodeUsername },
      }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`LeetCode API ${res.status}`);
    const json = await res.json();
    const user = json?.data?.matchedUser;
    const stats = user?.submitStats?.acSubmissionNum ?? [];

    const total = stats.find((s: { difficulty: string }) => s.difficulty === "All")?.count ?? 0;
    const easy = stats.find((s: { difficulty: string }) => s.difficulty === "Easy")?.count ?? 0;
    const medium = stats.find((s: { difficulty: string }) => s.difficulty === "Medium")?.count ?? 0;
    const hard = stats.find((s: { difficulty: string }) => s.difficulty === "Hard")?.count ?? 0;

    // submissionCalendar is a JSON string: { "<unixTimestamp>": count, ... }
    let calendar: Record<string, number> = {};
    if (user?.submissionCalendar) {
      try {
        calendar = JSON.parse(user.submissionCalendar);
      } catch {
        calendar = {};
      }
    }

    return NextResponse.json(
      { total, easy, medium, hard, calendar },
      { headers: { "Cache-Control": "s-maxage=3600" } }
    );
  } catch (err) {
    console.error("[/api/leetcode]", err);
    return NextResponse.json(
      { total: 0, easy: 0, medium: 0, hard: 0, calendar: {} },
      { status: 200 }
    );
  }
}
