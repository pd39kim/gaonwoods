import { content, site } from "../content.js";
import { icons } from "../icons.js";
import photos from "../photos.js";

export function renderHero() {
  const { hero } = content;
  const titleLines = hero.title
    .map((line) => `<span class="hero__line">${line}</span>`)
    .join("");
  const badges = hero.badges
    .map((b) => `<li class="hero__badge">${b}</li>`)
    .join("");

  return `
    <section class="hero" id="top" style="--hero-image:url(${photos["hero.jpg"]})">
      <div class="hero__scrim"></div>
      <div class="container hero__inner">
        <p class="hero__tag">${hero.tag}</p>
        <h1 class="hero__title">${titleLines}</h1>
        <p class="hero__desc">${hero.desc}</p>

        <ul class="hero__badges">${badges}</ul>

        <div class="hero__actions">
          <a href="tel:${site.phone}" class="btn btn--primary">
            ${icons.phone}<span>${hero.primaryCta}</span>
          </a>
          <a href="#products" class="btn btn--ghost-dark">${hero.secondaryCta}</a>
        </div>

        <p class="hero__note">${icons.truck}<span>${hero.note}</span></p>
      </div>
    </section>
  `;
}
