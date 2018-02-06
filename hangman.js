// var words=['love','life','exit'];
// var word = words[Math.floor(Math.random() * words.length)];

// var answerArray = [];
//  for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
//  }
//  var remainingLetters = word.length;
//  var numberOfGuesses = 6;
//  while (remainingLetters > 0) {
//  alert(answerArray.join(" "));
 
//  var guess = prompt("Guess a letter, or click Cancel to stop.");
 
//  if (guess === null) {
//  	alert("wrong letter");
//  	 break;
//  } else if (guess.length !== 1) {
//  alert("Please enter a single letter.");
//  } else {
 
//  for (var j = 0; j < word.length; j++) {
//  if (word[j] === guess) {
//  answerArray[j] = guess;
//  remainingLetters--;
//  	} 
//   }
// }
//  }
//   if (!guess) {
//   	numberOfGuesses--;
//   }
 
//  // if (answerArray.join("") === word) {
//  alert(answerArray.join(" "));
//  alert("Got it! The answer was " + word);
//  // }
var randomWord = ['love', 'life', 'exit'];
   var word = randomWord[Math.floor(Math.random() * randomWord.length)];

   var s;
   var count = 0;
   var answerArray= [];

   function starUp ()
   {
   for (var i = 0; i< word.length; i++)
   {
       answerArray[i] ="_";
   }

   s = answerArray.join(" ");

   document.getElementById("answer").innerHTML = s;

   function Letter()
   letter = document.getElementById("letter").value;
   if (letter.length > 0)
   {
   for (var i = 0; i < randomWord.length; i++)
       {
         if (randomWord[i]=== letter)
   
       {
       answerArray[i]= letter;

       }

   }
   count++;
   document.getElementById("counter").innerHTML = "# of clicks: " + count;
   document.getElementById("answer").innerHTML = answerArray.join( " " );
   
   }
   if (count>5)
   {
       document.getElementById("stat").innerHTML = "keep trying";

   }
}