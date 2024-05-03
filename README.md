# Fluid AI

Develop a RESTful API using Node.js that allows users to manage tasks. The system should support creating, retrieving, updating, and deleting tasks.

## Table of Contents

1. [Introduction](#introduction)
2. [API Endpoints](#api-endpoints)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Backend API Endpoints](#backend-api-endpoints)
6. [Test for API Endpoints](#test-for-api-endpoints)

## Introduction
The system should support creating, retrieving, updating, and deleting tasks. Each task should have a title, description, creation date, and status (e.g., pending, in progress, completed).Include validation to check for invalid inputs (e.g., empty strings).Implemented error handling to manage different types of errors and return appropriate status codes and messages.Implemented basic authentication for API endpoints using JWT (JSON Web Tokens).Ensure that only authenticated users can perform CRUD operations on thier tasks.


## API Endpoints:
- Create an endpoint to add a new user.
- create an endpoint to login the user.
- Create an endpoint to add a new task.
- Create an endpoint to retrieve all tasks.
- Create an endpoint to retrieve a single task by its ID.
- Create an endpoint to update a task by its ID.
- Create an endpoint to delete a task by its ID.


## Technologies Used

- Node.js
- Express.js
- MongoDB
- Passport
- JWT
- jest
- supertest


## Getting Started

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/rachit3014/

# Navigate to the backend directory
cd Fluid AI

# Install dependencies
npm install

# Setup .env file
In .env file put your mongodb URL and  JWT_SECRET


# Start the backend server
npm start
```

## Backend API Endpoints

### 3. Signup the user

- **Url:** http://localhost:8000/task/create
- **Method:** POST
- **Body:** In the body we have to pass
  - **email:** Please input email of the user
  - **password:** Please input password 
  - **name:** Please input user name
### 3. Login the user

- **Url:** http://localhost:8000/user/login
- **Method:** POST
- **Body:** In the body we have to pass
  - **email:** Please input email of the user
  - **password:** Please input password


### 3. Create a Task

- **Url:** http://localhost:8000/task/create
- **Method:** POST
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearae token

- **Body:** In the body we have to pass
  - **title:** Please input title of your task
  - **description:** Please input description of your task
  - **status:** Please enter valid status e.g. completed, pending, in progress 



### 4. List of all task

- **Url:** http://localhost:8000/task
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearae token
- **Method:** GET




### 5. Task By its id

- **Url:** http://localhost:8000/task/:id
- **Method:** GET
- **Parameters:**
  -  `id` : Task ID
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearae token




### 6. Update Task by its id

- **Url**  http://localhost:8000/task/update/:id
- **Method:** PUT
- **Parameters:**
  -  `id` : Task ID
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearae token
- **Body:** In the body we have to pass
  - **status:** Please enter valid status e.g. completed, pending, in progress

 


### 7. Delete Task by its id

- **Url** http://localhost:8000/task/delete/:id
- **Method:** Delete
- **Parameters:**
  - `id` : Task ID
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearae token




## Test for API Endpoints

- Unit tests for the API endpoints to ensure they function correctly.
- Include integration tests that test the API endpoints with the database to ensure the system works as a whole.
- Provide task id in task.test.js file and status to run test.

 

```bash
# Start the test
npm run test
```
## Test Coverage:
### The test suite covers the following endpoints and functionalities:
- Creating a new task.
- Updating a task's status.
- Retrieving all tasks.
- Retrieving a single task by ID.
- Deleting a task by ID.
- Authentication.
- Error handling
