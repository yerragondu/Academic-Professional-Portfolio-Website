/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Research & Outreach Volunteer at PolyAgent",
    authors: "",
    conferences:
      "Participated in regular meetings to test various AI models, share insights, and discuss recent advancements in Machine Learning and Artificial Intelligence research.",
    researchYr: "Aug 2024 - Present",
    citebox: "",
    image: "assets/images/experience-page/poly.jpg",
    citation: {
      vancouver: "",
    },
    abstract: "",
    absbox: "absPopup1",
  },
  {
    title: "Multifold Fusion Attention Variant for Emotion Recognition",
    authors: "Nikhil Reddy, Chetana Krishnan",
    conferences:
      "2025 International Conference on Computer Science and Software Engineering (CSASE)",
    researchYr: 2025,
    citebox: "popup1",
    image: "assets/images/research-page/mfa.jpg",
    citation: {
      vancouver: "CSASE 2025",
    },
    abstract: "",
    absbox: "absPopup1",
  },
  {
    title: "An Analysis of Video Forgery Detection Techniques",
    authors: "Raksha Pandey, Nikhil Reddy",
    conferences:
      "4th International conference on Latest Trends in Engineering and Management (ICLTEM-2023)",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/svd.png",
    citation: {
      vancouver: "ICLTEM 2023",
    },
    abstract: "",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
