const STORAGE_KEY = "lp_tracking_params";
const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
];

const DEFAULT_PARAMS: Record<string, string> = {
  utm_source: "meta",
  utm_medium: "paid_social",
  utm_campaign: "tsunageru_bonus_lp",
};

export function captureTrackingParams(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const captured: Record<string, string> = {};
  for (const key of TRACKED_KEYS) {
    const v = params.get(key);
    if (v) captured[key] = v;
  }
  if (Object.keys(captured).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
    } catch {}
  }
}

export function getTrackingParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return {};
}

export function withTrackingParams(url: string): string {
  if (typeof window === "undefined") return url;
  const stored = getTrackingParams();
  const merged: Record<string, string> = { ...DEFAULT_PARAMS, ...stored };
  try {
    const u = new URL(url);
    for (const [k, v] of Object.entries(merged)) {
      if (!u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return url;
  }
}
