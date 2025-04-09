window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html')) {
        document.getElementById('job-content-tab').classList.add('active');
        document.getElementById('candidates-tab').classList.remove('active');
    } else if (currentPage.includes('candidates.html')) {
        document.getElementById('job-content-tab').classList.remove('active');
        document.getElementById('candidates-tab').classList.add('active');
    }
});

const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdownToggle.innerHTML = `${item.textContent} <i class="ri-arrow-down-s-line"></i>`;
            dropdownMenu.classList.remove('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    function updateJobDetails({ 
        jobTitle, 
        jobDescription, 
        responsibilities, 
        skills, 
        benefits, 
        datePosted, 
        expirationDate, 
        employmentType, 
        salary, 
        experience, 
        companyName, 
        companyInfo 
    }) {
        document.getElementById("job-title").innerText = jobTitle;
        document.getElementById("job-description").innerText = jobDescription;
        document.getElementById("responsibilities-list").innerHTML = responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('');
        document.getElementById("skills").innerText = skills;
        document.getElementById("benefits").innerText = benefits;
        document.getElementById("date-posted").innerText = datePosted;
        document.getElementById("expiration-date").innerText = expirationDate;
        document.getElementById("employment-type").innerText = employmentType;
        document.getElementById("salary").innerText = salary;
        document.getElementById("experience").innerText = experience;
        document.getElementById("company-name").innerText = companyName;
        document.getElementById("company-info").innerText = companyInfo;
    }

    // Example of using the function
    updateJobDetails({
        jobTitle: "Senior Software Developer",
        jobDescription: "Develop high-quality software solutions for various projects.",
        responsibilities: [
            "Collaborate with team members to design software systems.",
            "Write efficient and clean code.",
            "Participate in code reviews."
        ],
        skills: "JavaScript, Node.js, React, SQL",
        benefits: "Health insurance, Retirement plan, Paid time off",
        datePosted: "1 Apr 2025",
        expirationDate: "30 Apr 2025",
        employmentType: "Full-time",
        salary: "$90,000 - $110,000",
        experience: "2+ years",
        companyName: "Tech Innovations Inc.",
        companyInfo: "123 Tech Park, Silicon Valley, CA / 90001"
    });