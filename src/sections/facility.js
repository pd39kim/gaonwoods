import { content } from "../content.js";
import { icons } from "../icons.js";
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

  const dots = facility.gallery
    .map(
      (item, i) =>
        `<button type="button" class="facility__dot" data-facility-dot="${i}" aria-label="${i + 1}번째 사진으로 이동"></button>`
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

        <div class="facility__carousel">
          <div class="facility__grid">${gallery}</div>
          <button type="button" class="facility__nav facility__nav--prev" data-facility-prev aria-label="이전 사진">${icons.chevronLeft}</button>
          <button type="button" class="facility__nav facility__nav--next" data-facility-next aria-label="다음 사진">${icons.chevronRight}</button>
        </div>

        <div class="facility__dots" data-facility-dots>${dots}</div>
      </div>
    </section>
  `;
}
