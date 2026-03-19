import { Restaurant, Plan } from "./types";

export function getMatches(
  db: Restaurant[],
  selectedGenres: Set<string>,
  people: number,
  maxWalk: number,
  meal: string
): Restaurant[] {
  return db.filter((r) => {
    if (r.walk_minutes !== null && r.walk_minutes > maxWalk) return false;
    if (selectedGenres.size > 0 && !r.genre.some((g) => selectedGenres.has(g)))
      return false;
    return r.plans.some((p) => planMatches(p, people, meal));
  });
}

export function getMatchingPlans(
  r: Restaurant,
  people: number,
  meal: string
): Plan[] {
  return r.plans.filter((p) => planMatches(p, people, meal));
}

function planMatches(p: Plan, people: number, meal: string): boolean {
  // people === 0 means "no filter" (input is empty)
  if (people > 0 && p.min_people !== null && people < p.min_people) return false;
  if (people > 0 && p.max_people !== null && people > p.max_people) return false;
  if (meal === "lunch" && p.lunch === false) return false;
  if (meal === "dinner" && p.dinner === false) return false;
  return true;
}
