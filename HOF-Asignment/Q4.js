// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Write a program that takes a list of books, including their authors and publication years as input. The program 
// should then filter out all books that were published before 2010 and create a new array with the remaining 
// books, but with their author names capitalized.

// Sample list of books with authors and publication years
const books = [
    { title: 'Book 1', author: 'john doe', year: 2005 },
    { title: 'Book 2', author: 'jane smith', year: 2012 },
    { title: 'Book 3', author: 'bob jones', year: 2008 },
    { title: 'Book 4', author: 'alice brown', year: 2015 },
];

// Function to capitalize the first letter of each word in a string
function capitalizeAuthorName(author) {
    return author.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Filter books published after 2010 and capitalize author names
const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
        title: book.title,
        author: capitalizeAuthorName(book.author),
        year: book.year
    }));

// Display the original and filtered books
console.log("Original Books:", books);
console.log("Filtered Books (published after 2010 with capitalized author names):", filteredBooks);
