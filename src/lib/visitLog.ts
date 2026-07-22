export type VisitEntry = {
  id: string;
  openedAt: string;
  openedFrom: string;
  areas: string[];
};

export type AnalyticsLog = {
  weekId: string;
  weekStart: string;
  weekEnd: string;
  flushedAt: string | null;
  visits: VisitEntry[];
};

const STORAGE_KEY = "portfolio-visit-log";

function getIsoWeekId(date = new Date()): string {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((target.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${target.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

function getWeekBounds(date = new Date()): { start: string; end: string } {
  const d = new Date(date);
  const day = d.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const start = new Date(d);
  start.setHours(0, 0, 0, 0);
  start.setDate(d.getDate() + diffToMonday);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return { start: start.toISOString(), end: end.toISOString() };
}

function emptyLog(date = new Date()): AnalyticsLog {
  const { start, end } = getWeekBounds(date);
  return {
    weekId: getIsoWeekId(date),
    weekStart: start,
    weekEnd: end,
    flushedAt: null,
    visits: [],
  };
}

function readLog(): AnalyticsLog {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyLog();
    return JSON.parse(raw) as AnalyticsLog;
  } catch {
    return emptyLog();
  }
}

function writeLog(log: AnalyticsLog) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}

/** Flush previous week and start a fresh weekly log. */
export function ensureCurrentWeekLog(): AnalyticsLog {
  const currentWeek = getIsoWeekId();
  const existing = readLog();

  if (existing.weekId && existing.weekId !== currentWeek) {
    const flushed: AnalyticsLog = {
      ...emptyLog(),
      flushedAt: new Date().toISOString(),
    };
    writeLog(flushed);
    return flushed;
  }

  if (!existing.weekId) {
    const fresh = emptyLog();
    writeLog(fresh);
    return fresh;
  }

  return existing;
}

export function getOpenedFrom(): string {
  const params = new URLSearchParams(window.location.search);
  const utm = params.get("utm_source") || params.get("ref") || params.get("source");
  if (utm) return utm;

  const referrer = document.referrer;
  if (!referrer) return "direct";

  try {
    const url = new URL(referrer);
    if (url.origin === window.location.origin) return "internal";
    return url.hostname;
  } catch {
    return "referrer";
  }
}

export function startVisit(): string {
  const log = ensureCurrentWeekLog();
  const id = crypto.randomUUID();
  const entry: VisitEntry = {
    id,
    openedAt: new Date().toISOString(),
    openedFrom: getOpenedFrom(),
    areas: [],
  };
  log.visits.push(entry);
  writeLog(log);
  return id;
}

export function markAreaVisited(visitId: string, area: string) {
  const log = ensureCurrentWeekLog();
  const visit = log.visits.find((v) => v.id === visitId);
  if (!visit) return;
  if (!visit.areas.includes(area)) {
    visit.areas.push(area);
    writeLog(log);
  }
}

export function getAnalyticsLog(): AnalyticsLog {
  return ensureCurrentWeekLog();
}
