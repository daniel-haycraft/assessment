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
// // insert 980.876137 ms
// // append 4.606061 ms

// // Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();
// //

// Try it with first function



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


perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

doublerAppend(tinyArray);
let resultsAppend = perf.stop();
// insert 127.141 μs
// append 766.84 μs


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
