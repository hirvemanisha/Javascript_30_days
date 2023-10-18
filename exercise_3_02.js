//1-Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const Takes='Love is the best thing in this world. Some found their love and some are still looking for their love.'
const word=/love/gi
let pattern= Takes.match(word)
let words = pattern.length
console.log(words)

//2-Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const takes2='You cannot end a sentence with because because because is a conjunction'
let word1=takes2.match(/because/gi)
console.log(word1)

//3-Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let newSentence =('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' , 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30DaysOfJavaScript is also the result of love of teaching')
console.log(sentence.replace(sentence,newSentence))

//4-Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let cal='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g
let digit=(cal.match(regEx) )
let salaryPermonth = parseInt(digit[0])
let annualBonus=parseInt(digit[1])
let onlinePermonth=parseInt(digit[2])
console.log(digit)
console.log('The total annual income is',salaryPermonth*12+onlinePermonth*12+annualBonus)

























 


