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
<img src="https://user-images.githubusercontent.com/44535117/241588253-c2960fe3-6b0a-47fc-98d5-697e29c6d395.png" alt="netwebapi">
<hr>
<img src="https://user-images.githubusercontent.com/44535117/241588317-6c627ddc-351b-490b-8e59-599cbb64a103.png" alt="netwebapi">
<hr>
<img src="https://user-images.githubusercontent.com/44535117/241588417-da3dc10e-9d75-41c6-93d1-2e523778c8f7.png" alt="netwebapi">
<hr>
<img src="https://user-images.githubusercontent.com/44535117/241588572-c4282953-a82b-47da-a84c-8ed50016920c.png" alt="netwebapi">
<hr>
<img src="https://user-images.githubusercontent.com/44535117/241588611-613acf57-4faa-413a-ae4e-917cd7db03ad.png" alt="netwebapi">


## Answer 2

This answer contains a SQL file for querying the ownership and price information in a real estate owners database. The SQL query retrieves the IDs of owners who own more than one house and have a total worth of at least 100 million.

  `real_estate_owners.sql`: This SQL file contains the query to retrieve the IDs of owners who meet the specified criteria. It utilizes two tables: ownership and price, which hold information about the ownership and prices of houses, respectively. The query fetches the result according to the criteria and formats it as BUYER_ID and TOTAL_WORTH.
  
### ScreenShot
<img src="https://user-images.githubusercontent.com/44535117/241588693-342880f2-ac90-4f5f-851c-aad162afe44f.png" alt="netwebapi">


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
