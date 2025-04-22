AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/web.png",
    imageAlt:
      "Copyright reserved : https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-023-05411-z",
    place: "Talent Engines LLC",
    time: "(Mar, 2025 - present)",
    desp: "Led a six‑person team to build scalable BeautifulSoup/Selenium scraping pipelines, liaising with senior leadership to meet quality goals, and introduced verification checks that raised data accuracy and sped preprocessing by 30 percent.",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/pan.jpg",
    imageAlt:
      "Copyright reserved : https://medium.com/@c.giancaterino/relevance-of-feature-engineering-to-build-a-predictive-model-4c9e3e115c90",
    place: "PanTech Solutions",
    time: "(Jun 2022)",
    desp: "During this internship I cultivated a strong foundation in machine learning by tackling hands‑on projects that demanded practical experimentation and rapid iteration. I implemented rigorous inference and evaluation pipelines-stress‑testing models to verify real‑world applicability and translated the resulting analyses into clear, data‑driven visualizations that highlighted actionable insights for stakeholders.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, imageAlt, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image" title="${imageAlt}"/>
        <article class="card-body">
          <header>
        <div class="title">
          <h3>${title}</h3>
        </div>
        <p class="meta">
          <span class="pre-heading">${place}</span><br>
          <span class="author">${time}</span>
        </p>
        <ol>
          ${desp}
        </ol>
      </header>
    </article>
  </div>
</div>

      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "DataFrench Community",
    cardImage: "assets/images/experience-page/df.png",
    description:
      "Active member, serving as a student mentor and competitor in data science and machine learning challenges.",
    Period: "Aug 2024",
  },
  {
    title: "Association of Computer Machinery",
    cardImage: "assets/images/experience-page/acm.png",
    description:
      "Conducting workshops, codathons, and webinars. Technically collaborating with other chapters for the stationing the associations.",
    Period: "Aug 2024",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, Period }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 250px;width:1200px">
      <div style=display:flex>
      <div><img src="${cardImage}" height="200" width="200" class="card-img" style="border-radius:10px"></div>
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <span class="author">${Period}</span><br>
          <p class="copy">${description}</p></div>
      </div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
