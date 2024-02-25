//Find the Second Largest Element in an Array using JavaScript

function FindSecondLargest(array){
    if (array.length<2){
        return "Array should have at least two elements";
    }

    // Sort the array in descending order
    array.sort(function(a,b){
        return b-a ;
    })

    //arrow function se bhi
    // array.sort((a,b)=>b-a)

   

    // The second largest element will be at index 1
    return array[1];
}

const userInput = prompt("Enter array elements separated by commas: ");

//the split method to split the input string into an array of strings based on the commas.
// The map(Number) part is used to convert each element from string to a numerical value.
const userArray = userInput.split(",").map(Number);
console.log("Your Array:", userArray);

const secondLargestNum = FindSecondLargest(userArray);
console.log("Second Largest Element:", secondLargestNum);

export default FindSecondLargest;