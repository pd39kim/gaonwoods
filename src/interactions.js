export function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
}

export function setupScrollSpy() {
  const header = document.getElementById("site-header");
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".header__link");
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

export function setupSpecToggles() {
  document.querySelectorAll("[data-spec-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      const isOpen = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

export function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const onScroll = () => {
    btn.classList.toggle("is-visible", window.scrollY > 480);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

export function setupFacilityCarousel() {
  const track = document.querySelector(".facility__grid");
  if (!track) return;

  const prevBtn = document.querySelector("[data-facility-prev]");
  const nextBtn = document.querySelector("[data-facility-next]");
  const dots = Array.from(document.querySelectorAll("[data-facility-dot]"));

  const mq = window.matchMedia("(max-width: 599px)");
  const AUTOPLAY_MS = 3200;
  const RESUME_DELAY_MS = 4000;

  let slides = Array.from(track.children);
  let index = 0;
  let autoplayTimer = null;
  let resumeTimer = null;
  let inView = false;

  const updateDots = () => {
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  const goTo = (i) => {
    if (!slides.length) return;
    index = ((i % slides.length) + slides.length) % slides.length;
    const slide = slides[index];
    const target =
      slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left: target, behavior: "smooth" });
    updateDots();
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
  };

  const syncIndexFromScroll = () => {
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;
    let closest = 0;
    let closestDist = Infinity;
    slides.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    index = closest;
    updateDots();
  };

  const pauseThenResume = () => {
    stopAutoplay();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      if (mq.matches && inView) startAutoplay();
    }, RESUME_DELAY_MS);
  };

  track.addEventListener("scroll", syncIndexFromScroll, { passive: true });
  track.addEventListener("pointerdown", pauseThenResume);

  prevBtn?.addEventListener("click", () => {
    goTo(index - 1);
    pauseThenResume();
  });

  nextBtn?.addEventListener("click", () => {
    goTo(index + 1);
    pauseThenResume();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      pauseThenResume();
    });
  });

  const applyMode = () => {
    if (mq.matches && inView) {
      startAutoplay();
    } else {
      stopAutoplay();
      clearTimeout(resumeTimer);
    }
  };

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      applyMode();
    },
    { threshold: 0.4 }
  );
  visibilityObserver.observe(track);

  mq.addEventListener("change", applyMode);
  updateDots();
}

export function setupReveal() {
  const targets = document.querySelectorAll(
    ".about, .facility, .products, .contact, .quick-info"
  );
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}
