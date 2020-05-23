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


    static deletebook(el){
      if(el.classList.contains('delete')){
          el.parentElement.parentElement.remove();
      }
    }


    static showalert(message, className){
        const div = document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const conatiner = document.querySelector('.container');
        const form = document.querySelector('#job-form');
        conatiner.insertBefore(div, form);
        //vanish in 3 second
        setTimeout(()=> document.querySelector('.alert').remove(), 3000);
    }


    static clearfields(){
        document.querySelector('#title').value ='';
        document.querySelector('#author').value ='';
        document.querySelector('#isbn').value ='';

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

    //validate
    if(title==='' || author === '' || isbn ===''){
        UI.showalert('please fill in all the forms', 'danger');
    }else{
        //instatntiate book
    const book = new Book(title, author, isbn);
    //console.log(book);

    //Add book to UI
    UI.addBooktoList(book);

    //clear fields
    UI.clearfields();
    }
});

//event: remove a book
document.querySelector('#book-list').addEventListener('click', (e)=> {
   UI.deletebook(e.target);

});