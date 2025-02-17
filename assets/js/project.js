AOS.init();
const Table = document.querySelector(".project-section");
const volunteershipcards = [
  {
    title: "Iterative Local & Global Approximated SVD for Image Denoising",
    cardImage: "assets/images/project-page/ksvd.jpg",
    description:
      "Developed an innovative iterative compression technique using Singular Value Decomposition (SVD) as the foundational algorithm. Enhanced the approach by integrating centroid weighting to optimize data representation and preserve critical structural information. The method effectively reduces redundancy while maintaining high fidelity, making it suitable for applications in medical imaging and large-scale data processing. Additionally, the iterative framework ensures adaptive compression, allowing for dynamic refinement based on data characteristics.",
    githublink:
      "https://github.com/ynr0007/Iterative-Local-Global-Approximated-SVD-for-Image-Denoising",
  },
  {
    title: "Blockchain Based e-Voting System Using Facial Recognition",
    cardImage: "assets/images/project-page/block.jpg",
    description:
      "Revolutionizing democracy with a secure, transparent, and fraud-proof voting system. By combining blockchain’s immutability with advanced facial recognition, our web application ensures every vote is authenticated and tamper-proof. Powered by MongoDB, Truffle, Ganache, MetaMask, and Python, it guarantees seamless transactions, smart contract integrity, and voter verification. With robust email authentication and real-time blockchain integration, we’re setting a new standard for trust in elections.",
    githublink:
      "https://github.com/ynr0007/Blockchain-Based-E-Voting-System-using-Facial-Recognition",
  },
  {
    title: "Advanced Cloud-Based File Upload and Secure Sharing Platform",
    cardImage: "assets/images/project-page/bloc.jpg",
    description:
      "Built a cloud-based file upload and sharing platform using Python and AWS, ensuring security, scalability, and seamless user experience. Leveraged S3 for storage, SES for automated sharing, Lambda for orchestration, and DynamoDB for 100% accurate file tracking. With intuitive design and robust AWS integration, the system improved efficiency by 40% and enhanced data security, driving user trust and adoption.",
    githublink: "",
  },
  {
    title: "Video Forgery Detection using a Hybrid Architecture",
    cardImage: "assets/images/project-page/vfd.jpg",
    description:
      "Our hybrid CNN-RNN model combats video forgery by capturing both spatial and temporal anomalies with precision. Using Xception and Inception-v3 for feature extraction and GRUs for sequential analysis, it detects tampering with unparalleled accuracy. By transforming video sequences into standardized 3D tensors, our system ensures robust, scalable, and reliable forgery detection, setting a new standard for digital media integrity.",
    githublink:
      "https://github.com/ynr0007/VIDEO-FORGERY-DETECTION-USING-HYBRID-ARCHITECTURE",
  },
  {
    title: "Dynamic Portfolio Website Deployment with AWS EC2",
    cardImage: "assets/images/project-page/por.jpg",
    description:
      "Designed and deployed a dynamic portfolio website using HTML, CSS, and JavaScript, showcasing skills and achievements with interactive features. Hosted on AWS EC2, ensuring scalability, security, and flexibility to handle growing traffic while maintaining seamless performance.",
    githublink: "",
  },
  {
    title: "Facial Detection using CNN",
    cardImage: "assets/images/project-page/fvd.jpg",
    description:
      "In a world of rising digital deception, our Facial Video Forgery Detection Model stands as a shield against face tampering. Using advanced deep learning, it accurately detects manipulations like Deepfake (98% accuracy) and Face2Face (95% accuracy) by analyzing mesoscopic image properties. With a lightweight yet powerful neural network, it ensures efficient feature extraction and real-time detection. Evaluated on diverse datasets, this model is a game-changer in preserving digital media integrity—because trust in what we see matters.",
    githublink: "https://github.com/ynr0007/Facial-Video-Forgery-Detection",
  },
  {
    title: "Image Based Search Engine",
    cardImage: "assets/images/project-page/ibse.jpg",
    description:
      "Revolutionizing image retrieval, our deep learning-powered search engine makes finding visually similar images seamless. Using VGG16 for feature extraction and a Flask-based web server, it delivers precise matches even with modifications. Whether altered or unique, every image finds its closest match—transforming search into an intuitive, AI-driven experience.",
    githublink: "https://github.com/ynr0007/IMAGE-BASED-SEARCH-ENGINE",
  },
  {
    title: "Human Activity Recognition",
    cardImage: "assets/images/project-page/har.jpeg",
    description:
      "Harnessing computer vision and deep learning, our Human Activity Recognition (HAR) system accurately detects and classifies human actions from video footage. Using Detectron2 for keypoint detection and an LSTM model for spatio-temporal analysis, it delivers precise, real-time action recognition. A Flask-based web interface enables seamless video uploads, while annotated results provide clear visual insights—transforming raw video and data into meaningful intelligence.",
    githublink: "https://github.com/ynr0007/Human-Activity-recognition",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, githublink }) => {
      output += `        
  
        <div class="project-card"> 
          <div class="project-card-view card"> 
            <img class="card-img-top" src="${cardImage}" height="280" width="200" alt="card-img" /> 
            <div class="card-body"> 
              <p class="card-title" style="font-weight: bold;">${title}</p>
<p class="card-text" style="text-align: justify; display: block; ">${description}</p>

              <div style="display: flex; justify-content: center; align-items: center;">
    <a role="button" tabindex="0" href="${githublink}" target="_blank" class="btn btn-primary">GitHub</a>
</div>

            </div>
          </div>
        </div>`;
    }
  );
  Table.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);
