import { DashboardMetricId } from "./measures";

const MONTHS = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
const FACILITIES = ["Hospital A", "Hospital B", "Hospital C", "Hospital D"];
const EQUITY_GROUPS = ["White", "Black", "Hispanic", "Asian", "Other"];

function seededRand(seed: number) {
  let t = seed + 0x6d2b79f5;
  return () => {
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function baseRange(metric: DashboardMetricId) {
  switch (metric) {
    case "smm":
      return [8, 16]; // per 1,000
    case "maternalMortality":
      return [0, 40]; // per 100k (test)
    case "ntsvCsection":
      return [18, 28]; // %
    case "pph":
      return [1.5, 4.5]; // %
    case "obInfection":
      return [0.8, 2.8]; // %
    case "preterm":
      return [6, 11]; // %
    case "nicu":
      return [7, 14]; // %
    case "neonatalMortality":
      return [0.8, 2.5]; // per 1,000
    case "breastfeeding":
      return [60, 86]; // %
    case "lowApgar":
      return [0.2, 1.4]; // %
  }
}

function jitter(rand: () => number, scale: number) {
  return (rand() - 0.5) * scale;
}

export function makeTrend(metric: DashboardMetricId, seed = 1) {
  const rand = seededRand(seed);
  const [min, max] = baseRange(metric);
  const mid = (min + max) / 2;

  return MONTHS.map((m, i) => {
    const drift = (i - (MONTHS.length - 1) / 2) * 0.15;
    const v = mid + drift + jitter(rand, (max - min) * 0.35);
    return { month: m, value: Math.max(0, Number(v.toFixed(2))) };
  });
}

export function makeByFacility(metric: DashboardMetricId, seed = 2) {
  const rand = seededRand(seed);
  const [min, max] = baseRange(metric);
  const mid = (min + max) / 2;

  return FACILITIES.map((f) => {
    const v = mid + jitter(rand, (max - min) * 0.6);
    return { name: f, value: Math.max(0, Number(v.toFixed(2))) };
  });
}

export function makeEquityStack(metric: DashboardMetricId, seed = 3) {
  const rand = seededRand(seed);
  const [min, max] = baseRange(metric);

  const keys = ["Lower Risk", "Higher Risk"];

  const rows = EQUITY_GROUPS.map((g) => {
    const base = min + (max - min) * (0.35 + rand() * 0.35);
    const higher = base * (1.05 + rand() * 0.25);
    return {
      name: g,
      "Lower Risk": Number(base.toFixed(2)),
      "Higher Risk": Number(higher.toFixed(2)),
    };
  });

  return { keys, rows };
}

export function latestKpiFromTrend(trend: { month: string; value: number }[]) {
  return trend[trend.length - 1]?.value ?? 0;
}
