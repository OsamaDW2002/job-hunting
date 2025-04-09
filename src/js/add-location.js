const selectedLocations = new Set();

function toggleLocationOptions(event) {
    event.stopPropagation();
    const box = document.getElementById('locationOptions');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function showLocationOptions() {
    document.getElementById('locationOptions').style.display = 'block';
}

function addLocation(name) {
    if (selectedLocations.has(name)) return;
    selectedLocations.add(name);
    renderSelectedLocations();
}

function removeLocation(name) {
    selectedLocations.delete(name);
    renderSelectedLocations();
}

function clearAllLocations(event) {
    event.stopPropagation();
    selectedLocations.clear();
    renderSelectedLocations();
    document.getElementById('locationOptions').style.display = 'none';
}

function renderSelectedLocations() {
    const container = document.getElementById('selectedLocations');
    container.innerHTML = '';

    if (selectedLocations.size === 0) {
        const placeholder = document.createElement('span');
        placeholder.className = 'placeholder';
        placeholder.id = 'locationPlaceholder';
        placeholder.textContent = '+ Locations';
        container.appendChild(placeholder);
        return;
    }

    selectedLocations.forEach(name => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${name} <span class="remove-tag" onclick="removeLocation('${name}')">✕</span>`;
        container.appendChild(tag);
    });
}

document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.multi-location-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('locationOptions').style.display = 'none';
    }
});