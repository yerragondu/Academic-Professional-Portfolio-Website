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
    desp: "At Talent Engines LLC, I engineered and deployed robust web scraping pipelines using Selenium and BeautifulSoup to extract high-quality data from over 250 diverse law firm websites, significantly enhancing the efficiency of data collection. I automated data validation workflows with Python, which reduced manual intervention and improved pipeline throughput by over 30%. Additionally, I designed and implemented scalable data cleaning and organization processes to convert unstructured web data into a structured graph database, ensuring seamless integration and high query performance. To support reliable and consistent deployment across environments, I developed containerized setups using Docker, which improved both development reliability and production scalability by 25%.",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/pan.jpg",
    imageAlt:
      "Copyright reserved : https://medium.com/@c.giancaterino/relevance-of-feature-engineering-to-build-a-predictive-model-4c9e3e115c90",
    place: "PanTech Solutions",
    time: "(Jun 2022 - July 2022)",
    desp: "During my internship at PanTech Solutions, I developed computer vision models using Keras and OpenCV to enhance image and human activity recognition across diverse environments. To improve model robustness, I implemented advanced data augmentation techniques, which led to a 20% increase in accuracy across various test scenarios. I also designed intuitive visual dashboards to translate complex model insights for cross-functional teams and non-technical stakeholders, facilitating quicker strategic alignment. Through hands-on projects, I applied core machine learning and AI principles, resulting in a 30% reduction in model training time and contributing to improved team efficiency and knowledge sharing.",
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
