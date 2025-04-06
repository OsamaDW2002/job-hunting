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
 *
 * @example
 * const parentElement = document.getElementById("job-list");
 * createJobCard({
 *   imgUrl: "https://example.com/company-logo.png",
 *   title: "Software Engineer",
 *   postDate: "26 Mar 2025",
 *   candidates: 12,
 *   experience: "No experience",
 *   salary: "Negotiable",
 *   workType: "Full-Time",
 *   positionRole: "CTO"
 * }, parentElement);
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
                       }, parentElement)=> {
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
      <span><img src="src/assets/icons/test-icon.svg" alt="icon that indicates about peoples whos candidate with this announcement"></span>
      <span>${candidates}</span>
      <span>candidates</span>
    </li>
  `;

    const dropListButton = document.createElement("button");
    dropListButton.classList.add("drop-list-icon");
    dropListButton.innerHTML = `<img src="src/assets/icons/dot.svg" alt="drop list icon that show three choices: View, Edit and Delete">`;

    upperPart.appendChild(positionInfo);
    upperPart.appendChild(dropListButton);

    const positionRequirement = document.createElement("div");
    positionRequirement.classList.add("position-requirement");

    positionRequirement.innerHTML = `
    <ul>
      <li><span><img src="src/assets/icons/exp.svg" alt="icon that represents the number of years of experience"></span><span class="disabled-text">${experience}</span></li>
      <li><span><img src="src/assets/icons/work-type.svg" alt="icon that represents the type of employment"></span><span class="disabled-text">${workType}</span></li>
      <li><span><img src="src/assets/icons/salary.svg" alt="icon that represents the salary status"></span><span class="disabled-text">${salary}</span></li>
      <li><span><img src="src/assets/icons/pos-role.svg" alt="icon that represents the position role"></span><span class="disabled-text">${positionRole}</span></li>
    </ul>
  `;

    const dropList = document.createElement("div");
    dropList.classList.add("drop-list", "hidden");
    dropList.innerHTML = `
    <ul>
      <li class="drop-list-item"><img src="src/assets/icons/view.svg" alt= "A view icon that representing one of the card choices. When clicked, it opens a new page displaying all the information about the position"><span>View</span></li>
      <li class="drop-list-item"><img src="src/assets/icons/edit.svg" alt="An edit icon representing one of the card choices. When clicked, it opens a new page displaying all the information with editable fields."><span>Edit</span></li>
      <li class="drop-list-item"><img src="src/assets/icons/delete.svg" alt="A delete icon that representing one of the card choices. When clicked, it removes the card from the database"><span>Delete</span></li>
    </ul>
  `;


    card.appendChild(upperPart);
    card.appendChild(positionRequirement);
    card.appendChild(dropList);

    parentElement.appendChild(card);
}


export {createJobCard}