const selectedSkills = new Set();

function toggleSkillOptions(event) {
    event.stopPropagation();
    const box = document.getElementById('skillsOptions');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function addSkill(skill) {
    if (selectedSkills.has(skill)) return;
    selectedSkills.add(skill);
    renderSelectedSkills();
}

function removeSkill(skill) {
    selectedSkills.delete(skill);
    renderSelectedSkills();
}

function clearAll(event) {
    event.stopPropagation();
    selectedSkills.clear();
    renderSelectedSkills();
    document.getElementById('skillsOptions').style.display = 'none';
}

function renderSelectedSkills() {
    const container = document.getElementById('selectedSkills');
    container.innerHTML = '';

    if (selectedSkills.size === 0) {
        const placeholder = document.createElement('span');
        placeholder.className = 'placeholder';
        placeholder.id = 'skillsPlaceholder';
        placeholder.textContent = 'Skills';
        container.appendChild(placeholder);
        return;
    }

    selectedSkills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${skill} <span class="remove-tag" onclick="removeSkill('${skill}')">✕</span>`;
        container.appendChild(tag);
    });
}

function focusInput() {
    document.getElementById('skillsOptions').style.display = 'block';
}

// Close dropdown if clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.skills-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('skillsOptions').style.display = 'none';
    }
});