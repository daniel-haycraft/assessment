const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    
}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);


// How long does it take to double every number in a given 
// array? 

// Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results

// // Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();
// //

// Try it with first function
// // insert 980.876137 ms
// // append 4.606061 ms



// perf.start();
// doublerInsert(largeArray);
// let resultsInsert = perf.stop();

// doublerAppend(largeArray);
// let resultsAppend = perf.stop(); 
// insert 6.991234 ms
// append 8.577222 ms

// perf.start();
// doublerInsert(mediumArray);
// let resultsInsert = perf.stop();

// doublerAppend(mediumArray);
// let resultsAppend = perf.stop();

// insert 259.232 μs
// append 892.599 μs

// perf.start();
// doublerInsert(smallArray);
// let resultsInsert = perf.stop();

// doublerAppend(smallArray);
// let resultsAppend = perf.stop();
// // insert 159.34 μs
// // append 841.926 μs


// perf.start();
// doublerInsert(tinyArray);
// let resultsInsert = perf.stop();

// doublerAppend(tinyArray);
// let resultsAppend = perf.stop();
// insert 127.141 μs
// append 766.84 μs

// ALL CAPS SO YOU KNOW THIS IS WHERE I DOCUMENT MY FINDINGS :)
// The easy answer would be because the arrays are longer the slower the time will be (even though its still fast lol)
// the ending on most is almost 2 times as fast
// the longest one to complete is small array bc of the difference
// but the largest array takes aroung the same time to start and complete
// still researching...

// console.log('Results for the extraLargeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);
console.log('question one')
function addToZero(arr){
    for (let i = 0; arr.length > i; i++){
        for(let x = i; arr.length > x; x++){
            while (i > x){
                }if(arr[i] + arr[x] === 0){
                return true
                 } 
            }
        }
        return false
    }

// time O(n^2)
// space O(1)

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> true

console.log('question two')

function hasUniqueChars(word){
    let newWord = word.toLowerCase()
    for(let i = 0; newWord.length - 1 > i; i++) {
        for (let j = i + 1; newWord.length > j; j++){
            if (newWord[i] === newWord[j]){
            return `not unique '${newWord[i]}' equals more than 1`
            }
        }
    }
    return 'unique'
}
// time O(n^2)
// space O(1)


console.log('notes---')
// for my noting purposes! i liked the way this one was solved more than mine, just never thought
// about using new Set([])
// 
// function hasUniqueChars(word) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
//   }
  console.log('ending notes---') 


console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False



console.log('question three')

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
function isPangram(sentence){
    sentence = sentence.toLowerCase()
     if (alphabets.every(x => sentence.includes(x))){
        return true
    } else {
        return false
    }
}
// time O(n)
// space O(1)


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

console.log('last but not least')

function findLongestWord(arr){
    const helloSir = arr.map(string => string.length)
    
    return Math.max(...helloSir)
}
   



console.log(findLongestWord(["hi", "hello"]));
// -> 5

// time O(n)
// space O(1)
