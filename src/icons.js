const wrap = (paths, viewBox = "0 0 24 24") =>
  `<svg viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icons = {
  phone: wrap(
    '<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1v3.4c0 .6-.5 1.1-1.1 1.1C10.4 21.2 2.8 13.6 2.8 4.1 2.8 3.5 3.3 3 3.9 3h3.4c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"/>'
  ),
  mail: wrap(
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>'
  ),
  fax: wrap(
    '<path d="M7 8V4h8l3 3v1"/><rect x="3" y="8" width="18" height="7" rx="1.5"/><circle cx="17.3" cy="11.2" r=".9" fill="currentColor" stroke="none"/><path d="M7 15v5h10v-5"/>'
  ),
  mapPin: wrap(
    '<path d="M20 10.5c0 6-8 12.5-8 12.5S4 16.5 4 10.5a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.5" r="2.7"/>'
  ),
  truck: wrap(
    '<path d="M2 7h11v9H2z"/><path d="M13 10h4l3 3v3h-7z"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>'
  ),
  chat: wrap(
    '<path d="M4 5h16v10H8l-4 4V5Z"/>'
  ),
  arrowUp: wrap('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),
  menu: wrap('<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'),
  close: wrap('<path d="m6 6 12 12"/><path d="m18 6-12 12"/>'),
  chevronDown: wrap('<path d="m6 9 6 6 6-6"/>'),
  chevronLeft: wrap('<path d="m15 6-6 6 6 6"/>'),
  chevronRight: wrap('<path d="m9 6 6 6-6 6"/>'),
  quote: wrap(
    '<path d="M7 8c-1.7 0-3 1.3-3 3v5h5v-5H6c0-1.1.9-2 2-2V8Z"/><path d="M16 8c-1.7 0-3 1.3-3 3v5h5v-5h-3c0-1.1.9-2 2-2V8Z"/>'
  ),
};
