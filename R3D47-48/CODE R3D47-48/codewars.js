const alphabetLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabetLettersIndex = alphabetLetters.map(
  (letter) => alphabetLetters.indexOf(letter) + 1
);

let text = "The sunset sets at twelve o' clock.";
const regex = /^[0]/;

const alphabetPosition = (s) => {
  for(let i=0; i<s.length;i++){
   let res = alphabetLetters.indexOf(s[i].toLowerCase())+1;
   let t = res.toString().replace(regex,"");
   console.log(t);
  }
}
console.log(alphabetPosition(text));