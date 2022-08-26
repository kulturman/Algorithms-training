//Solution to: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
    let heightestLetter = 1;
    
    for(let currentLetter of word) {
        let currentLetterPosition = currentLetter.charCodeAt(0) - 'a'.charCodeAt(0);
        
        if (h[currentLetterPosition] > heightestLetter) {
            heightestLetter = h[currentLetterPosition];
        }
    }
    
    return heightestLetter * word.length;
    
}