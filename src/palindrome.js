// This is a program to check if a given string is a palindrome or not.

// This line defines a function named 'palindrome' that takes a parameter called 'string'.
function palindrome(string){
    // Here, we find out the length of the input string and store it in a variable called 'len'.
    const len = string.length;

    // We are going to loop through the first half of the string.
    // The loop runs as long as 'i' is less than half of the length of the string.
    for (let i=0; i<len/2; i++){
        // Inside the loop, we check if the character at position 'i' in the string
        // is not the same as the character at position 'len-1-i'.
        // 'len-1-i' gives us the corresponding character from the end of the string.
        if (string[i] !== string[len-1-i]){
            // If the characters are not the same, we immediately know that the string is not a palindrome,
            // so we return the message "It is not a palindrome".
            return 'It is not a palindrome';
        }
    }
    // If the loop completes without returning, it means all the characters matched correctly.
    // In that case, we can confidently say that the string is a palindrome.
    return 'It is a palindrome';
}

// This line asks the user to input a string and stores it in a variable called 'string'.
const string = prompt("Enter a string: ");

// We call the 'palindrome' function and pass the 'string' as an argument.
// The return value of the function is stored in a variable called 'value'.
const value = palindrome(string);

// Finally, we print the value (whether it's a palindrome or not) to the console.
console.log(value);

export default palindrome;