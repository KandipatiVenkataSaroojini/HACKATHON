document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    addExpense(amount, category, date);
    clearForm();
});

function addExpense(amount, category, date) {
    const tableBody = document.getElementById('expenseTableBody');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${amount}</td>
        <td>${category}</td>
        <td>${date}</td>
        <td>
            <button onclick="editExpense(this)">Edit</button>
            <button onclick="deleteExpense(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
}

function clearForm() {
    document.getElementById('expenseForm').reset();
}

function editExpense(button) {
    const row = button.parentElement.parentElement;
    const amount = row.children[0].textContent;
    const category = row.children[1].textContent;
    const date = row.children[2].textContent;

    document.getElementById('amount').value = amount;
    document.getElementById('category').value = category;
    document.getElementById('date').value = date;

    deleteExpense(button);
}

function deleteExpense(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}