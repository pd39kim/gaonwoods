import { content, site } from "../content.js";
import photos from "../photos.js";

export function renderFooter() {
  const { footer } = content;
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <img src="${photos["logo.jpg"]}" alt="${site.name} 로고" class="footer__logo" />
          <div>
            <p class="footer__name">${site.name}</p>
            <p class="footer__desc">${footer.desc}</p>
          </div>
        </div>

        <ul class="footer__biz">
          <li>상호 : ${site.bizName}</li>
          <li>대표 : ${site.ceo}</li>
          <li>사업자등록번호 : ${site.bizRegNo}</li>
          <li>주소 : ${site.address}</li>
          <li>전화 : ${site.phoneDisplay}</li>
          <li>팩스 : ${site.fax}</li>
          <li>이메일 : ${site.email}</li>
        </ul>
      </div>
      <div class="container footer__copy">© ${year} ${site.name}. All rights reserved.</div>
    </footer>
  `;
}
