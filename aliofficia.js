// Initialize an empty string to hold the result
var result = "";

// Function to add items to the result string
function addToResult(item) {
    // Check if the item is valid and not an empty string
    if (item && item.trim() !== "") {
        // If the result is not empty, add a comma for separation
        if (result !== "") {
            result += ", ";
        }
        // Add the item to the result string
        result += item;
    }
}

// Example array of items
var items = ["apple", "banana", "cherry"];

// Iterate over each item in the array and add it to the result string
items.forEach(addToResult);

// Output the result
console.log(result); // "apple, banana, cherry"
