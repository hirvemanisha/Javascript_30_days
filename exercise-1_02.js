//1-Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge='30 Days Of JavaScript'

//2-Print the string on the browser console using console.log()
console.log('hello,world!')

//3-Print the length of the string on the browser console using console.log()
let str1="hello"
console.log(str1.length)

//4-Change all the string characters to capital letters using toUpperCase() method
let str2='welcome'
console.log(str2.toUpperCase())

//5-Change all the string characters to lowercase letters using toLowerCase() method
let str3="WELCOME"
console.log(str3.toLowerCase())

//6-Cut (slice) out the first word of the string using substr() or substring() method
let string="ThankYou"
console.log(string.substring(0,5))

//7-Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
let slice="30 Days Of JavaScript"
console.log(slice.substring(3,21))

//8-Check if the string contains a word Script using includes() method
let string1 = '30 Days Of JavaScript'
console.log(string1.includes('Script'))

//9-Split the string into an array using split() method
let string2='30 Days Of JavaScript' 
console.log(string2.split())  //Changes to an array -> ['30 Days Of JavaScript']

//10-Split the string 30 Days Of JavaScript at the space using split() method
let string3='30 Days Of JavaScript' 
console.log(string2.split(" "))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

//11-'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string4='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string4.split(','))
console.log(string4.split(', '))

//12-Change 30 Days Of JavaScript to 30 Days Of Python using replace() method to 30 Days Of Python using replace() method
let Change='30 Days Of JavaScript'
console.log(Change.replace('JavaScript','Python'))

//13-What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let string5='30 Days Of JavaScript'
console.log(string5.charAt(15))// S at  index is 15

//14-What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let string6='30 Days Of JavaScript'
console.log(string6.charCodeAt(11))  // J ASCII number is 74

//15-Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let str4='30 Days Of JavaScript'
console.log(str4.indexOf(3))

//16-Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let str5='30 Days Of JavaScript'
console.log(str4.lastIndexOf('a')) //Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

//17-Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let index='You cannot end a sentence with because because because is a conjunction'
console.log(index.indexOf('because'))

//18-Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let index2='You cannot end a sentence with because because because is a conjunction'
console.log(index2.lastIndexOf('because'))

//19-Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let index3='You cannot end a sentence with because because because is a conjunction'
console.log(index3.search('because'))

//20-Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript 
let trim1 = '   30 Days Of JavaScript   '
console.log(trim1)
console.log(trim1.trim(' '))
console.log(trim1.trim())

//21-Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let Use='30 Days Of JavaScript'
console.log(Use.startsWith(30))
console.log(Use.startsWith('Days'))

//22-Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let Use1='30 Days Of JavaScript'
console.log(Use1.endsWith('JavaScript'))
console.log(Use1.endsWith('Days'))

//23-Use match() method to find all the a’s in 30 Days Of JavaScript
let find='30 Days Of JavaScript'
console.log(find.match(/a/gi))  //g-means to search in the whole text, i - case insensitive

//24-Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let a='30 Days of' 
let b='JavaScript'
console.log(a+ b)
console.log(a +" JavaScript")

//25-Use repeat() method to print 30 Days Of JavaScript 2 times
let Use2='30 Days Of JavaScriptnew'
console.log(Use2.repeat(2))





