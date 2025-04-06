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
