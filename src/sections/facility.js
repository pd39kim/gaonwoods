import { content } from "../content.js";
import photos from "../photos.js";

export function renderFacility() {
  const { facility } = content;

  const gallery = facility.gallery
    .map(
      (item) => `
      <figure class="facility__item">
        <img src="${photos[item.src]}" alt="${item.caption}" loading="lazy" />
        <figcaption>${item.caption}</figcaption>
      </figure>
    `
    )
    .join("");

  return `
    <section class="facility section--dark" id="facility">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">${facility.eyebrow}</p>
          <h2 class="section-title">${facility.title}</h2>
          <p class="section-desc">${facility.desc}</p>
        </div>
        <div class="facility__grid">${gallery}</div>
      </div>
    </section>
  `;
}
