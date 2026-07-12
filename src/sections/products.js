import { content } from "../content.js";
import { icons } from "../icons.js";
import photos from "../photos.js";

export function renderProducts() {
  const { products } = content;

  const cards = products.categories
    .map((cat) => {
      const images = cat.images
        .map((img) => `<img src="${photos[img.src]}" alt="${img.alt}" loading="lazy" />`)
        .join("");
      const specs = cat.specs.map((s) => `<li>${s}</li>`).join("");

      return `
        <li class="product-card">
          <div class="product-card__images">${images}</div>
          <div class="product-card__body">
            <h3 class="product-card__name">${cat.name}</h3>
            <p class="product-card__desc">${cat.desc}</p>
            <button type="button" class="product-card__toggle" data-spec-toggle aria-expanded="false">
              <span>규격 보기</span>${icons.chevronDown}
            </button>
            <div class="product-card__specs">
              <div class="product-card__specs-inner">
                <p class="product-card__spec-unit">${cat.specUnit || products.specUnit}</p>
                <ul>${specs}</ul>
              </div>
            </div>
          </div>
        </li>
      `;
    })
    .join("");

  const extra = products.extra.map((e) => `<li>${e}</li>`).join("");

  return `
    <section class="products" id="products">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">${products.eyebrow}</p>
          <h2 class="section-title">${products.title}</h2>
          <p class="section-desc">${products.desc}</p>
        </div>

        <ul class="product-grid">${cards}</ul>

        <div class="product-extra">
          <h3 class="product-extra__title">${products.extraTitle}</h3>
          <ul class="product-extra__list">${extra}</ul>
        </div>

        <p class="product-note">${products.specNote}</p>
      </div>
    </section>
  `;
}
