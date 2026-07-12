import { site } from "../content.js";
import { icons } from "../icons.js";

export function renderMobileCta() {
  return `
    <div class="mobile-cta" aria-label="빠른 문의">
      <a href="tel:${site.phone}" class="mobile-cta__btn mobile-cta__btn--call">${icons.phone}<span>전화</span></a>
      <a href="#contact" class="mobile-cta__btn mobile-cta__btn--quote">견적 문의</a>
    </div>
  `;
}

export function renderBackToTop() {
  return `
    <button type="button" id="back-to-top" class="back-to-top" aria-label="맨 위로">
      ${icons.arrowUp}
    </button>
  `;
}
