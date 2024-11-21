const palindromes = (string) => {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const wordA = string.toLowerCase().split("").filter((char) => alphanumerical.includes(char)).reverse().join("");
  const wordB = string.toLowerCase().split("").filter((char) => alphanumerical.includes(char)).join("");
  
  return wordA === wordB;
};


// Do not edit below this line
module.exports = palindromes;
