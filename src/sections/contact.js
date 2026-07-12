import { content, site } from "../content.js";
import { icons } from "../icons.js";

export function renderContact() {
  const { contact } = content;

  return `
    <section class="contact section--dark" id="contact">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">${contact.eyebrow}</p>
          <h2 class="section-title">${contact.title}</h2>
          <p class="section-desc">${contact.desc}</p>
        </div>

        <div class="contact__hint">
          <strong>${contact.quoteHintTitle}</strong>
          <span>${contact.quoteHint}</span>
        </div>

        <div class="contact__grid">
          <div class="contact__card">
            <span class="contact__label">대표 연락처</span>
            <a href="tel:${site.phone}" class="contact__row">${icons.phone}<span>${site.phoneDisplay} (유선)</span></a>
            <a href="tel:${site.mobile}" class="contact__row">${icons.phone}<span>${site.mobileDisplay} (휴대폰)</span></a>
            <span class="contact__row contact__row--static">${icons.fax}<span>팩스 ${site.fax}</span></span>
            <a href="mailto:${site.email}" class="contact__row">${icons.mail}<span>${site.email}</span></a>
            <p class="contact__ship">전국 화물 배송 / 소량 경동화물 가능</p>
            <div class="contact__btns">
              <a href="tel:${site.phone}" class="btn btn--primary">${icons.phone}<span>전화하기</span></a>
              <a href="${site.kakaoUrl}" target="_blank" rel="noopener" class="btn btn--ghost-dark">${icons.chat}<span>카카오톡 문의</span></a>
            </div>
          </div>

          <div class="contact__card">
            <span class="contact__label">주소</span>
            <p class="contact__address">${icons.mapPin}<span>${site.address}</span></p>
            <div class="contact__map">
              <iframe
                src="${site.kakaoMapUrl}"
                title="${site.name} 위치 지도"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p class="contact__map-note">${contact.mapNote}</p>
            <div class="contact__btns">
              <a href="${site.kakaoMapUrl}" target="_blank" rel="noopener" class="btn btn--ghost-dark">${icons.mapPin}<span>카카오맵</span></a>
              <a href="#top" class="btn btn--ghost-dark">${icons.arrowUp}<span>맨 위로</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
