import { translations } from "./translations.js";
const STORAGE_KEY = "renttreck.language";
const DEFAULT_LANGUAGE = "mn";
export function getCurrentLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && translations[saved] ? saved : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}
export function setLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    /* storage боломжгүй бол default хэл ашиглана */
  }
  document.documentElement.lang = language;
}
// t("nav.home") -> одоогийн хэлээрх текст. Түлхүүр олдохгүй бол түлхүүрийг нь буцаана.
export function t(path) {
  let value = translations[getCurrentLanguage()];
  for (const key of path.split(".")) value = value?.[key];
  return value ?? path;
}
// { mn: "...", en: "..." } хэлбэрийн өгөгдлөөс одоогийн хэлний утгыг сонгоно.
export function tl(value) {
  if (value == null || typeof value === "string") return value ?? "";
  return value[getCurrentLanguage()] ?? value.mn ?? "";
}
export function toggleLanguage() {
  const next = getCurrentLanguage() === "mn" ? "en" : "mn";
  setLanguage(next);
  return next;
}
