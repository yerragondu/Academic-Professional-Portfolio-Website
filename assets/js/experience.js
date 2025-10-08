AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "SSO Engineer",
    cardImage: "assets/images/experience-page/web.png",
    imageAlt:
      "Copyright reserved : https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-023-05411-z",
    place: "Pfizer INC",
    time: "(Feb 2025 - Present)",
    desp: "I work on enterprise Single Sign-On and federation systems using PingFederate. I create and manage SAML and OAuth integrations, handle certificate renewals, and maintain consistency across dev, stage, and prod environments. I troubleshoot authentication and token issues with tools like SAML Tracer, Postman, and LDAP Browser while managing client secrets in Pfizer Vault and handling ServiceNow requests.",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/pan.jpg",
    imageAlt:
      "Copyright reserved : https://medium.com/@c.giancaterino/relevance-of-feature-engineering-to-build-a-predictive-model-4c9e3e115c90",
    place: "Talent Engines LLC",
    time: "(Mar 2024 - Jun 2024)",
    desp: "I built automated web scraping and data processing pipelines to collect structured data from hundreds of law firm websites. I optimized Python workflows for data validation and cleaning, improving efficiency by 30%. I also containerized these pipelines with Docker for reliable deployments across development and production environments.",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/web.png",
    imageAlt:
      "Copyright reserved : https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-023-05411-z",
    place: "PanTech Solutions",
    time: "(Jun 2022 - Jul 2022)",
    desp: "I developed computer vision models using Keras and OpenCV to improve activity and image recognition. Through advanced data augmentation, I boosted model accuracy by 20% and reduced training time by 30%. I also created dashboards to present insights to non-technical teams, improving project visibility and collaboration.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, imageAlt, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
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
      <div><img src="${cardImage}" height="175" width="175" class="card-img" style="border-radius:10px"></div>
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
