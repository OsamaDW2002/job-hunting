const selectedSchedules = new Set();

function toggleScheduleOptions(event) {
    event.stopPropagation();
    const box = document.getElementById('scheduleOptions');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function addSchedule(item) {
    if (selectedSchedules.has(item)) return;
    selectedSchedules.add(item);
    renderSelectedSchedules();
}

function removeSchedule(item) {
    selectedSchedules.delete(item);
    renderSelectedSchedules();
}

function clearAllSchedules(event) {
    event.stopPropagation();
    selectedSchedules.clear();
    renderSelectedSchedules();
    document.getElementById('scheduleOptions').style.display = 'none';
}

function renderSelectedSchedules() {
    const container = document.getElementById('selectedSchedules');
    container.innerHTML = '';

    if (selectedSchedules.size === 0) {
        const placeholder = document.createElement('span');
        placeholder.className = 'placeholder';
        placeholder.id = 'schedulePlaceholder';
        placeholder.textContent = '+ Schedule';
        container.appendChild(placeholder);
        return;
    }

    selectedSchedules.forEach(item => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${item} <span class="remove-tag" onclick="removeSchedule('${item}')">✕</span>`;
        container.appendChild(tag);
    });
}

function focusScheduleInput() {
    document.getElementById('scheduleOptions').style.display = 'block';
}

document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.schedule-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('scheduleOptions').style.display = 'none';
    }
});