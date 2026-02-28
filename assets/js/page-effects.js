(function () {
  const root = document.querySelector("main");
  if (!root) {
    return;
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const candidates = [
    ...root.querySelectorAll(":scope > section"),
    ...root.querySelectorAll(".hero-card"),
    ...root.querySelectorAll(".timeline-item"),
    ...root.querySelectorAll(".project-grid .card"),
    ...root.querySelectorAll(".edu-track .card"),
    ...root.querySelectorAll(".home-quick-grid .quick-link"),
    ...root.querySelectorAll(".section.card"),
  ];

  const uniqueTargets = [];
  const seen = new Set();

  candidates.forEach((node) => {
    if (!node || seen.has(node)) {
      return;
    }
    seen.add(node);
    uniqueTargets.push(node);
  });

  uniqueTargets.forEach((node, index) => {
    node.classList.add("page-reveal");
    const delay = Math.min(index, 10) * 50;
    node.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  if (reduceMotion) {
    uniqueTargets.forEach((node) => node.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  uniqueTargets.forEach((node) => observer.observe(node));
})();
