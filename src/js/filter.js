document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector('.filter-button');
    const sidebar = document.getElementById('filter-sidebar');
    const closeBtn = document.getElementById('close-filters');
    const locationSelect = document.getElementById("location-select");
    const roleSelect = document.getElementById('roles');
    const experienceRadios = document.querySelectorAll('input[name="experience"]');
    const employmentTypeCheckboxes = document.querySelectorAll('input[name="employment-type"]');
    const searchInput = document.getElementById('search-input');
    const jobList = document.getElementById('job-list');
    const noResults = document.getElementById('no-results');
    const resetBtn = document.getElementById('reset-filters');
    const sortToggle = document.getElementById("sortToggle");
    const sortMenu = document.getElementById("sortMenu");
    const sortLabel = document.getElementById("sortLabel");
    let currentSort = "latest"; 


    if (filterBtn && sidebar) {
      filterBtn.addEventListener('click', () => sidebar.classList.add('open'));
    }
  
    if (closeBtn && sidebar) {
      closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));
    }
  
    const countries = [
      { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
      { name: "Argentina", code: "+54" }, { name: "Australia", code: "+61" }, { name: "Austria", code: "+43" },
      { name: "Bahrain", code: "+973" }, { name: "Bangladesh", code: "+880" }, { name: "Belgium", code: "+32" },
      { name: "Brazil", code: "+55" }, { name: "Canada", code: "+1" }, { name: "China", code: "+86" },
      { name: "Denmark", code: "+45" }, { name: "Egypt", code: "+20" }, { name: "France", code: "+33" },
      { name: "Germany", code: "+49" }, { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" },
      { name: "Iraq", code: "+964" }, { name: "Italy", code: "+39" }, { name: "Japan", code: "+81" },
      { name: "Jordan", code: "+962" }, { name: "Kuwait", code: "+965" }, { name: "Lebanon", code: "+961" },
      { name: "Libya", code: "+218" }, { name: "Malaysia", code: "+60" }, { name: "Morocco", code: "+212" },
      { name: "Netherlands", code: "+31" }, { name: "Oman", code: "+968" }, { name: "Pakistan", code: "+92" },
      { name: "Palestine", code: "+970" }, { name: "Qatar", code: "+974" }, { name: "Russia", code: "+7" },
      { name: "Saudi Arabia", code: "+966" }, { name: "South Africa", code: "+27" }, { name: "Spain", code: "+34" },
      { name: "Sudan", code: "+249" }, { name: "Sweden", code: "+46" }, { name: "Syria", code: "+963" },
      { name: "Tunisia", code: "+216" }, { name: "Turkey", code: "+90" }, { name: "UAE", code: "+971" },
      { name: "United Kingdom", code: "+44" }, { name: "United States", code: "+1" }, { name: "Yemen", code: "+967" }
    ];
  
    if (locationSelect) {
      countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name;
        option.textContent = `${country.name} (${country.code})`;
        locationSelect.appendChild(option);
      });
    }
  
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.filter-sidebar input');
        inputs.forEach(input => {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
          }
        });
  
        const allRadio = document.querySelector('input[type="radio"][value="all"]');
        if (allRadio) allRadio.checked = true;
        if (roleSelect) roleSelect.selectedIndex = 0;
        if (locationSelect) locationSelect.selectedIndex = 0;
  
        applyFilters();
      });
    }
  
    function applyFilters() {
        const selectedRole = roleSelect?.value;
        const selectedLocation = locationSelect?.value;
        const selectedExperience = document.querySelector('input[name="experience"]:checked')?.value;
        const searchTerm = searchInput?.value.toLowerCase() || "";
      
        const selectedEmploymentTypes = Array.from(employmentTypeCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value);
      
        let filteredJobs = jobs.filter(job => {
          const matchesSearch = job.title.toLowerCase().includes(searchTerm);
          const matchesRole = !selectedRole || job.positionRole === selectedRole;
          const matchesLocation = !selectedLocation || job.location === selectedLocation;
          const matchesExperience = !selectedExperience || selectedExperience === 'all' || job.experience.toLowerCase().includes(selectedExperience.toLowerCase());
          const matchesEmploymentType = selectedEmploymentTypes.length === 0 || selectedEmploymentTypes.includes(job.workType);
          return matchesSearch && matchesRole && matchesLocation && matchesExperience && matchesEmploymentType;
        });
filteredJobs.sort((a, b) => {
    const dateA = new Date(a.postDate);
    const dateB = new Date(b.postDate);
    return currentSort === "latest"
      ? dateB - dateA  
      : dateA - dateB; 
  });
  
        renderFilteredJobs(filteredJobs);
      }
      
  
    function renderFilteredJobs(filtered) {
      if (!jobList || !noResults) return;
      jobList.innerHTML = '';
      noResults.style.display = filtered.length === 0 ? 'block' : 'none';
      filtered.forEach(job => createJobCard(job, jobList));
    }
  
    if (roleSelect) roleSelect.addEventListener('change', applyFilters);
    if (locationSelect) locationSelect.addEventListener('change', applyFilters);
    experienceRadios.forEach(radio => radio.addEventListener('change', applyFilters));
    employmentTypeCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
    if (searchInput) searchInput.addEventListener('input', applyFilters);



sortToggle?.addEventListener("click", (e) => {
  e.stopPropagation(); 
  sortMenu.style.display = sortMenu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", () => {
  sortMenu.style.display = "none";
});


document.querySelectorAll(".sort-option").forEach(option => {
  option.addEventListener("click", () => {
    const value = option.dataset.value;
    sortLabel.textContent = option.textContent;
    sortMenu.style.display = "none";

    currentSort = value; 
    applyFilters(); 
  });
});



  });
  
  