// Define the bookshelf as an empty array
let bookshelf = [];

// Define a function that prompts the user to enter information about a book and add it to bookeshel
function addBook() {
    // Prompt user to enter title of the book
    let title = prompt("Enter he title of the book:");

    // Prompt user to enter author of the book
    let author = prompt("Enter the author of the book:");

    // Prompt user to enter the condition of the book
    let condition = prompt("Is the book new, undamages, slight damage");

    // Create an object that represents the book and add it to bookshelf array
    let book = {title: title, author: author, year: year };
    bookshelf.push(book);

    // Alert user that book has been added to the bookshelf
    alert(`"${title}" by ${author} has been added to the bookshelf.`);
}

// Call the addBook function to add a book to the bookshelf
addBook();