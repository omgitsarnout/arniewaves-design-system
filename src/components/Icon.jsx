/**
 * Icon — a small inline-SVG icon set drawn in the ArnieWaves hand-wired style:
 * rounded caps/joins, single stroke weight, `currentColor` so they inherit text
 * color. Filled glyphs (play, pause, star, heart) set their own fill.
 *
 *   <Icon name="search" />
 *   <Icon name="play" size={20} />
 *   <Icon name="knob" className="..." aria-label="Tweak" />
 *
 * Decorative by default (aria-hidden). Pass `title` or `aria-label` to expose it.
 */

// Each entry is the inner SVG markup for a 24×24 viewBox.
export const ICONS = {
  // — common UI —
  search: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></>,
  close: <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>,
  check: <polyline points="5 12.5 10 17.5 19.5 6" />,
  "chevron-down": <polyline points="6 9 12 15 18 9" />,
  "chevron-up": <polyline points="6 15 12 9 18 15" />,
  "chevron-right": <polyline points="9 6 15 12 9 18" />,
  "chevron-left": <polyline points="15 6 9 12 15 18" />,
  "arrow-right": <><line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" /></>,
  "arrow-down": <><line x1="12" y1="4" x2="12" y2="20" /><polyline points="6 14 12 20 18 14" /></>,
  plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
  minus: <line x1="5" y1="12" x2="19" y2="12" />,
  download: <><line x1="12" y1="3" x2="12" y2="15" /><polyline points="7 10 12 15 17 10" /><path d="M4 17v1.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V17" /></>,
  upload: <><line x1="12" y1="21" x2="12" y2="9" /><polyline points="7 14 12 9 17 14" /><path d="M4 7V5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5V7" /></>,
  "external-link": <><path d="M14 5h5v5" /><line x1="19" y1="5" x2="11" y2="13" /><path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-9A1.5 1.5 0 0 1 6 18.5v-9A1.5 1.5 0 0 1 7.5 8H12" /></>,
  trash: <><polyline points="4 7 20 7" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /><path d="M6 7l1 12.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5L18 7" /></>,
  copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" /></>,
  info: <><circle cx="12" cy="12" r="9" /><line x1="12" y1="11" x2="12" y2="16.5" /><circle cx="12" cy="7.75" r="0.6" fill="currentColor" stroke="none" /></>,
  alert: <><path d="M12 3.5 1.7 21h20.6z" /><line x1="12" y1="9.5" x2="12" y2="14" /><circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" /></>,
  menu: <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>,
  filter: <path d="M3 5h18l-7 8v5l-4 2v-7z" />,
  heart: <path d="M12 20S3.5 14.5 3.5 8.8A4.3 4.3 0 0 1 12 6.5a4.3 4.3 0 0 1 8.5 2.3C20.5 14.5 12 20 12 20z" fill="currentColor" stroke="currentColor" />,
  star: <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L4.5 9.7l5.9-.9z" fill="currentColor" stroke="currentColor" />,
  "shopping-cart": <><circle cx="9.5" cy="20" r="1.3" /><circle cx="17.5" cy="20" r="1.3" /><path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L21 8H6" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><line x1="12" y1="2.5" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="21.5" /><line x1="2.5" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="21.5" y2="12" /><line x1="5.2" y1="5.2" x2="7" y2="7" /><line x1="17" y1="17" x2="18.8" y2="18.8" /><line x1="18.8" y1="5.2" x2="17" y2="7" /><line x1="7" y1="17" x2="5.2" y2="18.8" /></>,
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />,

  // — audio / ArnieWaves —
  play: <path d="M8 5.2v13.6l11-6.8z" fill="currentColor" stroke="currentColor" />,
  pause: <><rect x="7" y="5" width="3.4" height="14" rx="1" fill="currentColor" stroke="none" /><rect x="13.6" y="5" width="3.4" height="14" rx="1" fill="currentColor" stroke="none" /></>,
  waveform: <><line x1="4" y1="11" x2="4" y2="13" /><line x1="7" y1="8" x2="7" y2="16" /><line x1="10" y1="4.5" x2="10" y2="19.5" /><line x1="13" y1="9" x2="13" y2="15" /><line x1="16" y1="6.5" x2="16" y2="17.5" /><line x1="19" y1="10" x2="19" y2="14" /></>,
  volume: <><path d="M4 9.5h3L12 5v14l-5-4.5H4z" /><path d="M16 9a4 4 0 0 1 0 6" /><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" /></>,
  mute: <><path d="M4 9.5h3L12 5v14l-5-4.5H4z" /><line x1="16" y1="9.5" x2="21" y2="14.5" /><line x1="21" y1="9.5" x2="16" y2="14.5" /></>,
  knob: <><circle cx="12" cy="12" r="8" /><line x1="12" y1="12" x2="12" y2="5.5" /><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" /></>,
  sliders: <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /><circle cx="9" cy="8" r="2.3" fill="var(--aw-background)" /><circle cx="15" cy="16" r="2.3" fill="var(--aw-background)" /></>,
  headphones: <><path d="M4 14v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="14" width="4" height="6" rx="1.6" /><rect x="17" y="14" width="4" height="6" rx="1.6" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" /><line x1="12" y1="18" x2="12" y2="21" /><line x1="9" y1="21" x2="15" y2="21" /></>,
  power: <><path d="M7.5 6.5a8 8 0 1 0 9 0" /><line x1="12" y1="3" x2="12" y2="12" /></>,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor" stroke="currentColor" />,

  // — more navigation / layout —
  "arrow-left": <><line x1="20" y1="12" x2="4" y2="12" /><polyline points="10 6 4 12 10 18" /></>,
  "arrow-up": <><line x1="12" y1="20" x2="12" y2="4" /><polyline points="6 10 12 4 18 10" /></>,
  "arrow-up-right": <><line x1="6" y1="18" x2="18" y2="6" /><polyline points="8 6 18 6 18 16" /></>,
  "more-horizontal": <><circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none" /></>,
  "more-vertical": <><circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" /></>,
  grid: <><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>,
  list: <><line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" /><circle cx="4.5" cy="6" r="1.1" fill="currentColor" stroke="none" /><circle cx="4.5" cy="12" r="1.1" fill="currentColor" stroke="none" /><circle cx="4.5" cy="18" r="1.1" fill="currentColor" stroke="none" /></>,
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5" /><path d="M10 20v-5h4v5" /></>,
  maximize: <><polyline points="4 9 4 4 9 4" /><polyline points="20 9 20 4 15 4" /><polyline points="4 15 4 20 9 20" /><polyline points="20 15 20 20 15 20" /></>,
  minimize: <><polyline points="9 4 9 9 4 9" /><polyline points="15 4 15 9 20 9" /><polyline points="9 20 9 15 4 15" /><polyline points="15 20 15 15 20 15" /></>,
  refresh: <><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" /><polyline points="20 3 20 8 15 8" /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" /><polyline points="4 21 4 16 9 16" /></>,
  settings: <><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /><circle cx="12" cy="12" r="3" /></>,

  // — people & communication —
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7" /><path d="M17.5 13.2A6 6 0 0 1 21 18.7V20" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5 12 13l8.5-6.5" /></>,
  message: <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4z" />,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 4.5 2 5.5 2 5.5H4S6 13.5 6 9z" /><path d="M10 18.5a2 2 0 0 0 4 0" /></>,
  send: <><line x1="21" y1="3" x2="10.5" y2="13.5" /><path d="M21 3 14.5 21 11 13 3 9.5z" /></>,
  share: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><line x1="8.1" y1="10.9" x2="15.9" y2="7.1" /><line x1="8.1" y1="13.1" x2="15.9" y2="16.9" /></>,
  phone: <path d="M5 4h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  "thumbs-up": <path d="M7 10v10H4V10zM7 10l4-7a2 2 0 0 1 2.6 1.2L13 8h5.5a2 2 0 0 1 2 2.5l-1.7 7A2 2 0 0 1 17 19H7" />,

  // — files & data —
  file: <><path d="M6 3h7l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><polyline points="13 3 13 8 18 8" /></>,
  folder: <path d="M3 7a1 1 0 0 1 1-1h4.5l2 2H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.8" /><path d="M21 15l-5-5L6 20" /></>,
  save: <><path d="M5 3h11l3 3v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M8 3v5h7V3" /><rect x="8" y="13" width="8" height="6" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><rect x="9" y="2.5" width="6" height="4" rx="1.5" /></>,
  bookmark: <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z" />,
  tag: <><path d="M3 12 12 3h7a2 2 0 0 1 2 2v7l-9 9z" /><circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" /></>,

  // — status & feedback —
  "check-circle": <><circle cx="12" cy="12" r="9" /><polyline points="8 12.5 11 15.5 16 9" /></>,
  "x-circle": <><circle cx="12" cy="12" r="9" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.3 9.3a3 3 0 0 1 5.5 1.2c0 2-3 2.3-3 4" /><circle cx="11.8" cy="16.6" r="0.6" fill="currentColor" stroke="none" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  "eye-off": <><line x1="4" y1="4" x2="20" y2="20" /><path d="M9.6 9.7A3 3 0 0 0 14.3 14" /><path d="M6.5 6.6C3.8 8.3 2 12 2 12s3.5 7 10 7a11 11 0 0 0 3.9-.7" /><path d="M9.8 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-2.6 3.4" /></>,

  // — security —
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  unlock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" /></>,
  shield: <path d="M12 3 5 6v5c0 5 3 7.5 7 9 4-1.5 7-4 7-9V6z" />,
  key: <><circle cx="8" cy="9" r="4.5" /><line x1="11.2" y1="12.2" x2="20" y2="21" /><line x1="17" y1="18" x2="19" y2="16" /></>,

  // — time & place —
  calendar: <><rect x="4" y="5" width="16" height="16" rx="2" /><line x1="4" y1="9.5" x2="20" y2="9.5" /><line x1="8" y1="3" x2="8" y2="6.5" /><line x1="16" y1="3" x2="16" y2="6.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></>,
  "map-pin": <><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></>,

  // — editing —
  edit: <><path d="M4 20l1.2-4.2L16 5l3 3L8.2 18.8z" /><line x1="13.5" y1="7.5" x2="16.5" y2="10.5" /></>,
  "plus-circle": <><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></>,
  "minus-circle": <><circle cx="12" cy="12" r="9" /><line x1="8" y1="12" x2="16" y2="12" /></>,

  // — media transport —
  "skip-forward": <><path d="M5 5l9 7-9 7z" fill="currentColor" stroke="currentColor" /><line x1="18" y1="5" x2="18" y2="19" /></>,
  "skip-back": <><path d="M19 5l-9 7 9 7z" fill="currentColor" stroke="currentColor" /><line x1="6" y1="5" x2="6" y2="19" /></>,
  stop: <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none" />,
  record: <circle cx="12" cy="12" r="5.5" fill="currentColor" stroke="none" />,
  repeat: <><polyline points="16 2 20 6 16 10" /><path d="M4 11V9a3 3 0 0 1 3-3h13" /><polyline points="8 22 4 18 8 14" /><path d="M20 13v2a3 3 0 0 1-3 3H4" /></>,
  shuffle: <><polyline points="15 4 20 4 20 9" /><line x1="4" y1="20" x2="20" y2="4" /><polyline points="20 15 20 20 15 20" /><line x1="15" y1="15" x2="20" y2="20" /><line x1="4" y1="4" x2="9" y2="9" /></>,
  music: <><path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></>,
  radio: <><circle cx="12" cy="12" r="2.5" /><path d="M7.8 7.8a6 6 0 0 0 0 8.4" /><path d="M16.2 16.2a6 6 0 0 0 0-8.4" /><path d="M5 5a9.5 9.5 0 0 0 0 14" /><path d="M19 19a9.5 9.5 0 0 0 0-14" /></>,

  // — connectivity & devices —
  wifi: <><path d="M2 8.5a16 16 0 0 1 20 0" /><path d="M5 12a11 11 0 0 1 14 0" /><path d="M8.5 15.5a6 6 0 0 1 7 0" /><circle cx="12" cy="19" r="0.8" fill="currentColor" stroke="none" /></>,
  cloud: <path d="M7 18a4 4 0 0 1 0-8 5.2 5.2 0 0 1 9.9-1.3A3.5 3.5 0 0 1 17 18z" />,
  battery: <><rect x="3" y="8" width="16" height="9" rx="2" /><line x1="21" y1="11" x2="21" y2="14" /><rect x="5.5" y="10.5" width="7" height="4" rx="0.5" fill="currentColor" stroke="none" /></>,
  camera: <><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><circle cx="12" cy="12.5" r="3.5" /></>,
  code: <><polyline points="9 8 5 12 9 16" /><polyline points="15 8 19 12 15 16" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><polyline points="7 9 10 12 7 15" /><line x1="12" y1="15" x2="16" y2="15" /></>,
  hash: <><line x1="9" y1="3" x2="7" y2="21" /><line x1="17" y1="3" x2="15" y2="21" /><line x1="4" y1="9" x2="20" y2="9" /><line x1="3.5" y1="15" x2="19.5" y2="15" /></>,
  "at-sign": <><circle cx="12" cy="12" r="4" /><path d="M16 8.5V13a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.5 7.6" /></>,

  // — misc —
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8.5 14a4.5 4.5 0 0 0 7 0" /><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none" /></>,
  gift: <><rect x="3.5" y="8" width="17" height="4" rx="1" /><path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" /><line x1="12" y1="8" x2="12" y2="21" /><path d="M12 8C12 5.8 10.5 4 8.7 4A2.3 2.3 0 0 0 8.7 8z" /><path d="M12 8c0-2.2 1.5-4 3.3-4A2.3 2.3 0 0 1 15.3 8z" /></>,
  "credit-card": <><rect x="3" y="5" width="18" height="14" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  "dollar-sign": <><line x1="12" y1="2.5" x2="12" y2="21.5" /><path d="M16.5 6.5A4 4 0 0 0 13 5h-2a3 3 0 0 0 0 6h2a3 3 0 0 1 0 6h-2.5a4 4 0 0 1-3.5-1.7" /></>,
};

export const ICON_NAMES = Object.keys(ICONS);

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.75,
  title,
  className = "",
  ...rest
}) {
  const glyph = ICONS[name];
  if (!glyph) {
    if (typeof console !== "undefined") console.warn(`<Icon>: unknown name "${name}"`);
    return null;
  }
  const labelled = title || rest["aria-label"];
  return (
    <svg
      className={["aw-icon", className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-label={rest["aria-label"]}
      {...rest}
    >
      {title && <title>{title}</title>}
      {glyph}
    </svg>
  );
}
