function clearInput() {
    document.getElementById('roleInput').value = '';
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById('roleOptions').style.display = 'none';
}

function toggleOptions() {
    const options = document.getElementById('roleOptions');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectRole(role) {
    document.getElementById('roleInput').value = role;
    document.getElementById('roleOptions').style.display = 'none';
}

// Hide options if clicked outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('roleOptions').style.display = 'none';
    }
});