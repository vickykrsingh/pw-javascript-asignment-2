// 24. Text Highlighting

// Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8 
// characters. The highlighted words should be with a yellow background color.

let paragraph = document.getElementById('paragraph');
        
        // Split the paragraph into words
        let words = paragraph.textContent.split(/\s+/);

        // Iterate through the words and highlight those with more than 8 characters
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 8) {
                // Create a span element for the highlighted word
                let span = document.createElement('span');
                span.textContent = words[i];
                span.classList.add('highlight');

                // Replace the original word with the span
                paragraph.replaceChild(span, document.createTextNode(words[i]));
            }
        }