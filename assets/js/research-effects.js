(function () {
  if (!document.body.classList.contains("research-page")) {
    return;
  }

  const cards = Array.from(document.querySelectorAll(".research-page .card"));

  cards.forEach((card) => {
    card.classList.add("reveal-on-scroll");

    card.addEventListener("mousemove", (event) => {
      if (window.innerWidth < 900) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const x = offsetX / rect.width;
      const y = offsetY / rect.height;

      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 7;

      card.style.setProperty("--mx", `${Math.round(x * 100)}%`);
      card.style.setProperty("--my", `${Math.round(y * 100)}%`);
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    });
  });

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
      rootMargin: "0px 0px -40px 0px",
    },
  );

  cards.forEach((card) => observer.observe(card));
})();
