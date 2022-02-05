
/*Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

// My answer

// Steps

/* 1-) In this problem they can give us an unordered array, therefore 
       the first thing I will do is to order them 
       
    2-) I initialized an accumulator variable called acc  
    
    3-) I iterate over the newly created array and add it to the accumulator variable
    */
    

function sumAll(arr) {
    let newArray = arr.sort(function(a, b) {
        return a - b;
    });
    let acc = 0;
    let lastNumber = newArray[newArray.length-1];

    for(let i=newArray[0]; i<=lastNumber; i++){
       acc += i
    }
    return acc;
  }
  
  sumAll([1, 4]);

