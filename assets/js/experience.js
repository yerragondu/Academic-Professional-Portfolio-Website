AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "SRE/DevOps Engineer",
    cardImage: "assets/images/experience-page/web.png",
    imageAlt:
      "Copyright reserved : https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-023-05411-z",
    place: "TIAA",
    time: "(Sep, 2024 - present)",
    desp: "I’ve spent the last few years building, automating, and securing cloud-native stacks end-to-end. On AWS I architected and operated everything from EC2 fleets, VPC networking, and Route 53 global traffic management to serverless apps on Lambda, data platforms on Redshift, DynamoDB, and EMR, plus event services (SNS/SQS/SES) and cache layers with ElastiCache and EBS-backed RDS clusters. For container workloads, I run production EKS and AKS clusters with Helm-driven deployments and Istio service-mesh for traffic shaping and zero-downtime releases. The pipelines are locked down with Snyk and Aqua image scanning, Checkov policy checks, HashiCorp Vault secrets, and Prisma Cloud for runtime posture. Observability is baked in: Prometheus/OpenTelemetry metrics flow into Grafana, ELK, Datadog AI, and Dynatrace Davis for AI-powered anomaly detection and alerting. I’ve also automated infrastructure and app config with Chef (via AWS OpsWorks and Elastic Beanstalk), Mesos/Marathon, and dozens of Ansible playbooks for one-click environment provisioning. CI/CD wise, I stand up Git-backed workflows in Jenkins and Argo CD (plus coaching teams on Spinnaker and Semaphore) so every commit can ship straight to prod. I own Git repo design, branching strategies, and access controls, troubleshoot merge conflicts and auth issues in Jira, and keep the whole release train running with Bash/Ruby/Python tooling.",
  },
  {
    title: "DevOps Engineer",
    cardImage: "assets/images/experience-page/pan.jpg",
    imageAlt:
      "Copyright reserved : https://medium.com/@c.giancaterino/relevance-of-feature-engineering-to-build-a-predictive-model-4c9e3e115c90",
    place: "PanTech Solutions",
    time: "(Jan 2022 - Dec 2023)",
    desp: "I’ve built and managed infrastructure across AWS, Azure, and GCP, delivering secure, automated, and high-performance environments. I created and launched Databricks workspaces with clusters and notebooks using Python, R, Spark, and SQL for advanced analytics and ML workflows. I implemented IaaS, PaaS, and SaaS solutions using OpenStack, Docker, and OpenShift, and led PoC blockchain projects using Azure Blockchain-as-a-Service (BaaS). On GCP, I provisioned infrastructure using Terraform foundation modules, including Shared VPCs, Compute Engine, Cloud SQL, Cloud Storage, and IAM configurations. I managed and optimized hybrid cloud networking setups—VPCs, VPNs, subnets—for performance and scalability. In AWS, I worked extensively with KMS for encryption key management, automated EC2 and S3 provisioning through Azure DevOps pipelines, and customized IAM policies with JSON. I used SaltStack for configuration automation, and built CI/CD pipelines with tools like Puppet, Chef, Jenkins, GitLab, and Bitbucket—integrating with Nexus, SonarQube, and Chef for full-stack DevOps. I also developed Azure SDK automation tools for IoT Hub testing using Python, Docker, Bash, PowerShell, C#, and C++, and wrote Groovy scripts to automate Cassandra metric collection and analysis. Additionally, I handled infrastructure migrations from on-prem to Azure, and across clouds (AWS ↔ Azure ↔ GCP), ensuring minimal downtime and high reliability throughout.",
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
