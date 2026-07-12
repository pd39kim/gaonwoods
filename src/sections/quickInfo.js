import { content } from "../content.js";

export function renderQuickInfo() {
  const { quickInfo } = content;
  const cards = quickInfo.items
    .map(
      (item, i) => `
      <li class="quick-info__card">
        <span class="quick-info__num">0${i + 1}</span>
        <h3 class="quick-info__title">${item.title}</h3>
        <p class="quick-info__desc">${item.desc}</p>
      </li>
    `
    )
    .join("");

  return `
    <section class="quick-info">
      <div class="container">
        <ul class="quick-info__grid">${cards}</ul>
        <div class="quick-info__hint">
          <strong>견적 요청 시 있으면 좋은 정보</strong>
          <span>${quickInfo.quoteHint}</span>
        </div>
      </div>
    </section>
  `;
}
