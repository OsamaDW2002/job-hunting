/**
 * Creates a job announcement card and appends it to a specified parent element.
 * 
 * @param {Object} jobDetails - An object containing job details.
 * @param {string} jobDetails.imgUrl - The URL of the company profile image.
 * @param {string} jobDetails.title - The job title.
 * @param {string} jobDetails.postDate - The date the job was posted.
 * @param {number} jobDetails.candidates - The number of candidates who applied.
 * @param {string} jobDetails.experience - The required experience level for the job.
 * @param {string} jobDetails.salary - The salary details (e.g., "Negotiable").
 * @param {string} jobDetails.workType - The employment type (e.g., "Full-Time").
 * @param {string} jobDetails.positionRole - The job position role (e.g., "CTO").
 * @param {HTMLElement} parentElement - The parent container where the job card will be appended.
 * 
 * @returns {void}
 */
const createJobCard = ({
  imgUrl,
  title,
  postDate,
  candidates,
  experience,
  salary,
  workType,
  positionRole
}, parentElement) => {
  const card = document.createElement("div");
  card.classList.add("announcement-container");

  const upperPart = document.createElement("div");
  upperPart.classList.add("upper-part");

  const positionInfo = document.createElement("ul");
  positionInfo.classList.add("position-information");

  positionInfo.innerHTML = `
    <li><img src="${imgUrl}" alt="Company's profile picture"></li>
    <li class="announcement-title"><a href="/">${title}</a></li>
    <li class="announcement-post-date disabled-text">Posted date: ${postDate}</li>
    <li class="number-of-candidates">
      <span><img src="src/assets/icons/test-icon.svg" alt="icon that indicates about people who applied"></span>
      <span>${candidates}</span>
      <span>candidates</span>
    </li>
  `;

  const dropListButton = document.createElement("button");
  dropListButton.classList.add("drop-list-icon");
  dropListButton.innerHTML = `<img src="src/assets/icons/dot.svg" alt="drop list icon">`;

  upperPart.appendChild(positionInfo);
  upperPart.appendChild(dropListButton);

  const positionRequirement = document.createElement("div");
  positionRequirement.classList.add("position-requirement");

  positionRequirement.innerHTML = `
    <ul>
      <li><span><img src="src/assets/icons/exp.svg" alt="experience"></span><span class="disabled-text">${experience}</span></li>
      <li><span><img src="src/assets/icons/work-type.svg" alt="employment type"></span><span class="disabled-text">${workType}</span></li>
      <li><span><img src="src/assets/icons/salary.svg" alt="salary"></span><span class="disabled-text">${salary}</span></li>
      <li><span><img src="src/assets/icons/pos-role.svg" alt="position role"></span><span class="disabled-text">${positionRole}</span></li>
    </ul>
  `;

  const dropList = document.createElement("div");
  dropList.classList.add("drop-list", "hidden");
  dropList.innerHTML = `
    <ul>
      <li class="drop-list-item"><img src="src/assets/icons/view.svg" alt="view icon"><span>View</span></li>
      <li class="drop-list-item"><img src="src/assets/icons/edit.svg" alt="edit icon"><span>Edit</span></li>
      <li class="drop-list-item"><img src="src/assets/icons/delete.svg" alt="delete icon"><span>Delete</span></li>
    </ul>
  `;

  card.appendChild(upperPart);
  card.appendChild(positionRequirement);
  card.appendChild(dropList);

  parentElement.appendChild(card);
};

const jobList = document.getElementById("job-list");
const searchInput = document.getElementById("job-search");
const noResults = document.getElementById("no-results");

// Example jobs
const jobs = [
  {
    imgUrl: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10233694/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png",
    title: "Frontend Developer",
    postDate: "1 Apr 2025",
    candidates: 5,
    experience: "1 year",
    salary: "Negotiable",
    workType: "Full-Time",
    positionRole: "Developer"
  },
  {
    imgUrl: "https://newline.tech/wp-content/uploads/2023/07/Profession_-Backend-Developer.png",
    title: "Backend Engineer",
    postDate: "2 Apr 2025",
    candidates: 10,
    experience: "3 years",
    salary: "$4000/month",
    workType: "Remote",
    positionRole: "Engineer"
  },
  {
    imgUrl: "https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg",
    title: "UX Designer",
    postDate: "3 Apr 2025",
    candidates: 3,
    experience: "2 years",
    salary: "Negotiable",
    workType: "Part-Time",
    positionRole: "Designer"
  }
];

// Render jobs
jobs.forEach(job => createJobCard(job, jobList));

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const cards = jobList.querySelectorAll(".announcement-container");

  let foundMatch = false;

  cards.forEach(card => {
    const titleElement = card.querySelector(".announcement-title a");
    const titleText = titleElement.textContent.toLowerCase();
    const isMatch = titleText.includes(searchTerm);

    card.style.display = isMatch ? "block" : "none";
    if (isMatch) foundMatch = true;
  });

  noResults.style.display = foundMatch ? "none" : "block";
});
