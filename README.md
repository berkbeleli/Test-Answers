<p align="center">
  <h1 align="center">Full Stack Developer Test Answers</h1>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#answer-1">Answer 1</a></li>
    <li><a href="#answer-2">Answer 2</a></li>
    <li><a href="#answer-3">Answer 3</a></li>
  </ol>
</details>

## Answer 1

This is a web API service for managing rooms, built using .NET Core. The service allows you to create rooms, retrieve room details, and filter rooms based on floor numbers.

### Features

- Create rooms: Send a POST request to `/api/rooms` to add a room to the database.
- Get all rooms: Send a GET request to `/api/rooms` to retrieve the entire list of rooms.
- Get room by ID: Send a GET request to `/api/rooms/{id}` to get the details of a specific room.
- Filter rooms by floor: Send a GET request to `/api/rooms?Floors={floor1}&Floors={floor2}` to retrieve rooms based on specified floor numbers.

### API Usage

#### - Create Room

- Endpoint: `POST /api/rooms`
- Request body example:
```javascript
{
    "id": 1,
    "category": "Luxe",
    "number": 122,
    "floor": 3,
    "isAvailable": true,
    "addedDate": 1573843210
}
````
- Response code: 200 (Success)

#### - Get All Rooms
- Endpoint: `GET /api/rooms`
- Request body example:
```javascript
[
    {
        "id": 1,
        "category": "Luxe",
        "number": 122,
        "floor": 3,
        "isAvailable": true,
        "addedDate": 1573843210
    },
    {
        "id": 2,
        "category": "Standard",
        "number": 201,
        "floor": 2,
        "isAvailable": false,
        "addedDate": 1573843220
    },
    ...
]
````
- Response code: 200 (Success)

#### - Get Room By Id
- Endpoint: `GET /api/rooms/{id}`
- Request body example:
```javascript
{
    "id": 1,
    "category": "Luxe",
    "number": 122,
    "floor": 3,
    "isAvailable": true,
    "addedDate": 1573843210
}

````
- Response code: 200 (Success)


#### - Filter Rooms By Floor
- Endpoint: `GET /api/rooms?floors={floor1}&floors={floor2}`
- Example: `GET /api/rooms?floors=2&floors=4`
- Request body example:
```javascript
[
    {
        "id": 2,
        "category": "Standard",
        "number": 201,
        "floor": 2,
        "isAvailable": false,
        "addedDate": 1573843220
    },
    {
        "id": 5,
        "category": "Deluxe",
        "number": 401,
        "floor": 4,
        "isAvailable": true,
        "addedDate": 1573843240
    },
    ...
]

````
- Response code: 200 (Success)

#### - Authentication

To protect the API service from third-party requests, a password key is required in the request headers. Include the following header in your requests:

  ```makefile
passwordKey: passwordKey123456789
```




If the password key is not provided or incorrect, the API will return a response with HTTP status code 403 Forbidden.

### ScreenShots
<img src="https://github.com/berkbeleli/Answerss/assets/44535117/52291434-b624-4599-adcb-275f38086457" alt="netwebapi">
<hr>
<img src="https://github.com/berkbeleli/Answerss/assets/44535117/2c0abc34-cc20-451e-a01c-ce338f49503c" alt="netwebapi">
<hr>
<img src="https://github.com/berkbeleli/Answerss/assets/44535117/627b6607-6a94-4887-a257-18d47c0bb6ed" alt="netwebapi">
<hr>
<img src="https://github.com/berkbeleli/Answerss/assets/44535117/c62ec850-ab0e-424c-a0cf-ecc579c13668" alt="netwebapi">
<hr>
<img src="https://github.com/berkbeleli/Answerss/assets/44535117/22549cc4-2750-4fa5-930b-c8bb3ef9d18a" alt="netwebapi">


## Answer 2

This answer contains a SQL file for querying the ownership and price information in a real estate owners database. The SQL query retrieves the IDs of owners who own more than one house and have a total worth of at least 100 million.

  `real_estate_owners.sql`: This SQL file contains the query to retrieve the IDs of owners who meet the specified criteria. It utilizes two tables: ownership and price, which hold information about the ownership and prices of houses, respectively. The query fetches the result according to the criteria and formats it as BUYER_ID and TOTAL_WORTH.
  
### ScreenShot
<img src="https://github.com/berkbeleli/Answerss/assets/44535117/2b14e9bb-37dc-43a4-b60b-ac6aba56d4b3" alt="netwebapi">


## Answer 3

`inventoryList.js`: This Javascript file contains a simple inventory management system. It provides functionality to add items, remove items, and retrieve the current list of items in the inventory.

The `inventoryList` function creates an inventory object with three methods:

- `add(name)`: Adds an item with the specified name to the inventory.
- `remove(name)`: Removes the item with the specified name from the inventory.
- `getList()`: Retrieves the current list of items in the inventory.

To test the inventory operations, use the `testInventoryOperations` function. It takes an input string representing a sequence of operations, where the first number indicates the total number of operations, displays the results.

```javascript
const input = `5
add Shirt
add Trouser
getList
remove Shirt
getList`;

testInventoryOperations(input);
````
