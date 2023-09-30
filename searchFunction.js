const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

const items = [
    'Cake',
    'Sweet Pork',
    'Beans Soup',
    'Shepards Pie',
    // Add more items as needed
];

function filterResults(query) {
    resultsList.innerHTML = '';

    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultsList.appendChild(li);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    filterResults(query);
});