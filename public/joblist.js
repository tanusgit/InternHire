// Book class: represent a book
class Book{
    constructor(title, author, isbn){
        this.title= title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class: handle UI tasks
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: "Book one",
                author: "John ga",
                isbn : '4564'
            },
            {
                title: "Book two",
                author: "Mia ga",
                isbn : '478'
            },
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBooktoList(book));

    }

    static addBooktoList(book){
        const list =document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML =` 
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td><a href="#" class =" btn btn-danger btn-sm delete">X</a></td>

        `;

        list.appendChild(row);

    }
    
}
//store class: handles storage

//event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event: add a book
document.querySelector('#job-form').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instatntiate book
    const book = new Book(title, author, isbn);
    console.log(book);

});

//event: remove a book