const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

const items = [
    ['Cake', 'index.html'],
    ['Sweet Pork', 'index.html'],
    ['Beans Soup', 'index.html'],
    ['Shepards Pie', 'index.html'],
    ['Three Bean Salad', 'Three_Bean_Salad_Recipe_Page.html']

    // Add more items as needed
];


function filterResults(query) {
    resultsList.innerHTML = '';

    const filteredItems = items.filter(item => item[0].toLowerCase().includes(query.toLowerCase()));



    filteredItems.forEach(item => {
        const a = document.createElement('a');
        a.textContent = item[0];
        a.href = item[1];
        a.className = "search-results";
        a.style = "";
        const li = document.createElement('li');

        li.innerHTML = '<a href=' + item[1] + '>' + item[0] + '</a>';
        li.style = "text-decoration: none";
        resultsList.appendChild(li);
    });



}

searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        resultsList.innerHTML = '';
        return;
    }
    const query = searchInput.value.trim();
    filterResults(query);
});