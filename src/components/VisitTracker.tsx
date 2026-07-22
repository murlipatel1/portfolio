import { useEffect } from "react";
import {
  ensureCurrentWeekLog,
  getAnalyticsLog,
  markAreaVisited,
  startVisit,
} from "../lib/visitLog";

const SECTION_IDS = [
  "top",
  "highlights",
  "work",
  "projects",
  "skills",
  "education",
  "contact",
] as const;

const SESSION_VISIT_KEY = "portfolio-visit-id";

export function VisitTracker() {
  useEffect(() => {
    ensureCurrentWeekLog();

    let visitId = sessionStorage.getItem(SESSION_VISIT_KEY);
    if (!visitId) {
      visitId = startVisit();
      sessionStorage.setItem(SESSION_VISIT_KEY, visitId);
    }

    // Expose current weekly JSON for inspection in DevTools
    (window as Window & { __portfolioAnalytics?: unknown }).__portfolioAnalytics =
      getAnalyticsLog;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (id) markAreaVisited(visitId!, id);
        }
      },
      { threshold: 0.35 },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
