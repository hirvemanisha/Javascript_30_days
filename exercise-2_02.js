//1-Using console.log() print out the following statement
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//2-Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//3-Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let str = '10'
let Check=typeof(str)
let numb = parseInt(str)
console.log(Check,str===10,numb)


//4-Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let number = parseFloat('9.8');
let number2=(number !== 10)
console.log(number.round(number));



//5-Check if 'on' is found in both python and jargon
let found='python,jargon'
console.log(found.match(/on/gi))

//6-I hope this course is not full of jargon. Check if jargon is in the sentence.
let a='I hope this course is not full of jargon'
console.log(a.includes('jargon'))

//7-Generate a random number between 0 and 100 inclusively.
let b=Math.floor(Math.random()*100)+1
console.log(b)

//8-Generate a random number between 50 and 100 inclusively.
let c=Math.floor(Math.random()*51)+50
console.log(c) 

//9-Generate a random number between 0 and 255 inclusively.
let d=Math.floor(Math.random()*255)+1
console.log(d)

//10-Access the 'JavaScript' string characters using a random number. 
let js ='JavaScript'
let randomIndex = Math.floor(Math.random() * js.length)
let randomChar = str[randomIndex]
console.log("Random character: " + randomChar)

//11-Use console.log() and escape characters to print the following pattern
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t3\t9\t2\t7')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

//12-Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let  sentence = 'You cannot end a sentence with because because because is a conjunction'
let  startIndex = sentence.indexOf('because')
let extractedPhrase = sentence.substring(startIndex, 'because because because'.length);
console.log("Extracted phrase: " + extractedPhrase);



 



