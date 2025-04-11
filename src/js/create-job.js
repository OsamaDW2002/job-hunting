document.getElementById('submit-data').addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const postDate = document.getElementById('dateInput').value.trim();
    const salary = document.getElementById('currencyField').value.trim();
    const positionRole = document.getElementById('roleInput').value.trim();
    const selectedJob = document.querySelector('input[name="job"]:checked');
    const selectedExperience = document.querySelector('input[name="experience"]:checked');
    const selectedBenefit = document.querySelector('input[name="benefents"]:checked');


    if (!title || !postDate || !salary || !positionRole || !selectedJob || !selectedExperience || !selectedBenefit) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    let data = JSON.parse(localStorage.getItem('data')) || [];

    data.push({
        imgUrl: "https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg",
        title: title,
        postDate: postDate.replace('/', " "),
        candidates: 3,
        experience: selectedExperience.value,
        salary: salary,
        workType: selectedJob.value,
        positionRole: positionRole
    });

    localStorage.setItem('data', JSON.stringify(data));

});
