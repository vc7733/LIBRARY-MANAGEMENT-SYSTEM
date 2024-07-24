document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookTable = document.getElementById('bookTable').getElementsByTagName('tbody')[0];

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;

        addBook(title, author, genre);

        bookForm.reset();
    });

    function addBook(title, author, genre) {
        const row = bookTable.insertRow();

        const titleCell = row.insertCell(0);
        const authorCell = row.insertCell(1);
        const genreCell = row.insertCell(2);
        const actionsCell =
