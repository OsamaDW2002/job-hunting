const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let selectedDate = new Date();
let currentMonth = selectedDate.getMonth();
let currentYear = selectedDate.getFullYear();

const dateInput = document.getElementById("dateInput");
const calendarPopup = document.getElementById("calendarPopup");
const calendarDays = document.getElementById("calendarDays");
const calendarMonthYear = document.getElementById("calendarMonthYear");

function toggleCalendar() {
    calendarPopup.style.display = calendarPopup.style.display === "block" ? "none" : "block";
    renderCalendar(currentMonth, currentYear);
}

function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
}

function renderCalendar(month, year) {
    calendarMonthYear.textContent = `${monthNames[month]} ${year}`;
    calendarDays.innerHTML = "";

    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
    daysOfWeek.forEach(day => {
        const header = document.createElement("div");
        header.className = "header";
        header.textContent = day;
        calendarDays.appendChild(header);
    });

    const firstDay = new Date(year, month).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarDays.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= numDays; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.textContent = day;

        if (
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
        ) {
            dayElement.classList.add("selected");
        }

        dayElement.onclick = () => {
            selectedDate = new Date(year, month, day);
            const formatted = selectedDate.toLocaleDateString("en-GB"); // DD/MM/YYYY
            dateInput.value = formatted;
            calendarPopup.style.display = "none";
        };

        calendarDays.appendChild(dayElement);
    }
}

document.addEventListener("click", (event) => {
    const container = document.querySelector(".datepicker-container");
    if (!container.contains(event.target)) {
        calendarPopup.style.display = "none";
    }
});

renderCalendar(currentMonth, currentYear);