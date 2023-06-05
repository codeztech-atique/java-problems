// Problem 3

const fs = require('fs');

function countWords(filename) {
  const wordCounts = {};

  const text = fs.readFileSync(filename, 'utf-8');
  const words = text.split(/\s+/);

  for (const word of words) {
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;
}

function printWordCounts(wordCounts) {
  for (const word in wordCounts) {
    console.log(`${wordCounts[word]} ${word}`);
  }
}

// Specify the filename of the input text file
const filename = 'input.txt';

// Count the words in the file and print the word counts
const wordCounts = countWords(filename);
printWordCounts(wordCounts);
