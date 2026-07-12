import "./style/tokens.css";
import "./style/base.css";
import "./style/header.css";
import "./style/hero.css";
import "./style/quick-info.css";
import "./style/about.css";
import "./style/facility.css";
import "./style/products.css";
import "./style/contact.css";
import "./style/footer.css";
import "./style/mobile-cta.css";

import { renderHeader } from "./sections/header.js";
import { renderHero } from "./sections/hero.js";
import { renderQuickInfo } from "./sections/quickInfo.js";
import { renderAbout } from "./sections/about.js";
import { renderFacility } from "./sections/facility.js";
import { renderProducts } from "./sections/products.js";
import { renderContact } from "./sections/contact.js";
import { renderFooter } from "./sections/footer.js";
import { renderMobileCta, renderBackToTop } from "./sections/mobileCta.js";

import {
  setupMobileMenu,
  setupScrollSpy,
  setupSpecToggles,
  setupBackToTop,
  setupReveal,
} from "./interactions.js";

document.querySelector("#app").innerHTML = `
  ${renderHeader()}
  <main>
    ${renderHero()}
    ${renderQuickInfo()}
    ${renderAbout()}
    ${renderFacility()}
    ${renderProducts()}
    ${renderContact()}
  </main>
  ${renderFooter()}
  ${renderMobileCta()}
  ${renderBackToTop()}
`;

setupMobileMenu();
setupScrollSpy();
setupSpecToggles();
setupBackToTop();
setupReveal();
