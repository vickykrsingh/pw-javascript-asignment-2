// 5. URL validation.

// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, 
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. 
// Print a message indicating if the input matches the conditions or not.

// Function to check if a given URL is valid
function isValidURL(url) {
    // Regular expression for matching valid URLs
    const urlRegex = /^(http:\/\/|https:\/\/)[\w\d-]+(\.[\w]+)+$/;

    // Test the URL against the regex
    if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}

// Test cases
isValidURL("http://www.example.com");
isValidURL("https://sub.domain.org");
isValidURL("ftp://invalid-url");
