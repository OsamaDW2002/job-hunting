function selectSalary(element) {
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
}



function formatCurrency(input) {
    let value = input.value.replace(/[^0-9.]/g, '');

    // Allow only one decimal
    const parts = value.split('.');
    if (parts.length > 2) {
        value = parts[0] + '.' + parts[1];
    }

    input.value = value;
}