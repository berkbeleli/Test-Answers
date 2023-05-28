const inventoryList = () => {
  const items = []; // Array to store inventory items

  const add = (name) => {
    items.push(name); // Add item to the inventory
  };

  const remove = (name) => {
    const index = items.indexOf(name); // Find the index of the item
    if (index !== -1) {
      items.splice(index, 1); // Remove the item from the inventory
    }
  };

  const getList = () => {
    return items.length > 0 ? items.join(', ') : 'No Items'; // Return the list of items as a string
  };

  return {
    add, // Expose the add function
    remove, // Expose the remove function
    getList, // Expose the getList function
  };
};


const testInventoryOperations = (input) => {
  const lines = input.split('\n'); // Split input into lines
  const numOperations = parseInt(lines[0]); // Parse the number of operations from the first line
  const operations = lines.slice(1, numOperations + 1); // Extract the operations from the input
  const inventory = inventoryList(); // Create a new inventory
  const result = []; // Array to store the results

  for (const operation of operations) {
    const [functionName, itemName] = operation.split(' '); // Split each operation into function name and item name

    if (functionName === 'add') {
      inventory.add(itemName); // Call the add function with the item name
    } else if (functionName === 'remove') {
      inventory.remove(itemName); // Call the remove function with the item name
    } else if (functionName === 'getList') {
      result.push(inventory.getList()); // Call the getList function and add the result to the array
    }
  }

  console.log(result.join('\n')); // Print the results
};

// Example usage
const input = `5
add Shirt
add Trouser
getList
remove Shirt
getList`;

testInventoryOperations(input);
