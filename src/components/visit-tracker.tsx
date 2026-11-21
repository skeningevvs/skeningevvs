"use client";

import { useEffect } from "react";

// Registrerar ett besök på startsidan. Körs i bakgrunden och påverkar inte laddtiden.
export default function VisitTracker() {
  useEffect(() => {
    fetch("/api/visit", { method: "POST", keepalive: true }).catch(() => {});
  }, []);

  return null;
}
