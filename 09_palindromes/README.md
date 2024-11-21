# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.


const isPalindrome = (string) => {
  let wordA = string.split("").reverse()
  let wordB = string.split("");
  for (let i = 0; i <= string.length / 2; i++) {
    if (wordA[i] === wordB[0]) {
      return true;
    }
    else {
      return false
    };
  }
};

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```


