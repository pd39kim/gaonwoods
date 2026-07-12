import { content, site } from "../content.js";
import { icons } from "../icons.js";
import photos from "../photos.js";

export function renderHeader() {
  const nav = content.header.nav
    .map((item) => `<a href="${item.href}" class="header__link">${item.label}</a>`)
    .join("");

  return `
    <header class="header" id="site-header">
      <div class="container header__row">
        <a href="#top" class="header__brand">
          <img src="${photos["logo.jpg"]}" alt="${site.name} 로고" class="header__logo" />
          <span class="header__brand-text">
            <span class="header__brand-name">${site.name}</span>
            <span class="header__brand-tag">${site.tagline}</span>
          </span>
        </a>

        <nav class="header__nav" aria-label="주요 메뉴">${nav}</nav>

        <div class="header__actions">
          <a href="tel:${site.phone}" class="header__tel" aria-label="전화 문의">
            ${icons.phone}<span>${site.phoneDisplay}</span>
          </a>
          <button type="button" class="header__toggle" id="menu-toggle" aria-label="메뉴 열기" aria-expanded="false">
            ${icons.menu}
          </button>
        </div>
      </div>

      <div class="header__mobile" id="mobile-menu">
        <nav aria-label="모바일 메뉴">${nav}</nav>
        <a href="tel:${site.phone}" class="btn btn--primary">${icons.phone}<span>${site.phoneDisplay}</span></a>
      </div>
    </header>
  `;
}
