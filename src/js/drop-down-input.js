let selectedRole = null;

function toggleDropdown(event) {
    const dropdown = event.currentTarget.closest(".dropdown");
    dropdown.classList.toggle("open");
}

function selectRole(event) {
    if (event.target.tagName.toLowerCase() === "li") {
        selectedRole = event.target.textContent;
        const dropdown = event.target.closest(".dropdown");
        dropdown.querySelector(".dropdown-selected").textContent = selectedRole;
        dropdown.classList.remove("open");
    }
}

function clearSelection(event) {
    event.stopPropagation(); // prevent dropdown toggle
    const dropdown = event.currentTarget.closest(".dropdown");
    selectedRole = null;
    dropdown.querySelector(".dropdown-selected").textContent = "Select your role...";
}

document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});