import { content } from "../content.js";

export function renderAbout() {
  const { about } = content;

  const stats = about.stats
    .map(
      (s) => `
      <div class="about__stat">
        <span class="about__stat-value">${s.value}</span>
        <span class="about__stat-label">${s.label}</span>
      </div>
    `
    )
    .join("");

  const history = about.history
    .map(
      (row) => `
      <li class="timeline__row">
        <span class="timeline__year">${row.year}</span>
        <ul class="timeline__items">
          ${row.items.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </li>
    `
    )
    .join("");

  return `
    <section class="about" id="about">
      <div class="container about__grid">
        <div class="about__intro">
          <p class="eyebrow">${about.eyebrow}</p>
          <h2 class="section-title">${about.title}</h2>
          <p class="about__lead">${about.lead}</p>
          <div class="about__stats">${stats}</div>
        </div>

        <div class="about__history">
          <h3 class="about__history-title">${about.historyTitle}</h3>
          <ul class="timeline">${history}</ul>
        </div>
      </div>
    </section>
  `;
}
