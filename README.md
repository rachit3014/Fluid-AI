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

![Screenshot (309)](https://github.com/rachit3014/Fluid-AI/assets/84663169/3023f4a5-756e-40ac-b2e1-b6ce4bf6a259)


### 3. Login the user

- **Url:** http://localhost:8000/user/login
- **Method:** POST
- **Body:** In the body we have to pass
  - **email:** Please input email of the user
  - **password:** Please input password

![Screenshot (310)](https://github.com/rachit3014/Fluid-AI/assets/84663169/e370963b-cc11-420c-b2b5-f954458ed910)


### 3. Create a Task

- **Url:** http://localhost:8000/task/create
- **Method:** POST
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearer  token

- **Body:** In the body we have to pass
  - **title:** Please input title of your task
  - **description:** Please input description of your task
  - **status:** Please enter valid status e.g. completed, pending, in progress 

![Screenshot (311)](https://github.com/rachit3014/Fluid-AI/assets/84663169/3c1cfda6-60f5-4bf8-9f83-9b2a629f9c06)


### 4. List of all task

- **Url:** http://localhost:8000/task
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearer  token
- **Method:** GET

![Screenshot (312)](https://github.com/rachit3014/Fluid-AI/assets/84663169/6f7fb556-0cd8-46c8-a562-33612deb04c3)



### 5. Task By its id

- **Url:** http://localhost:8000/task/:id
- **Method:** GET
- **Parameters:**
  -  `id` : Task ID
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearer  token

![Screenshot (313)](https://github.com/rachit3014/Fluid-AI/assets/84663169/c2b12912-22d4-43c1-8fb9-0da977982d92)



### 6. Update Task by its id

- **Url**  http://localhost:8000/task/update/:id
- **Method:** PUT
- **Parameters:**
  -  `id` : Task ID
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearer  token
- **Body:** In the body we have to pass
  - **status:** Please enter valid status e.g. completed, pending, in progress

 ![Screenshot (314)](https://github.com/rachit3014/Fluid-AI/assets/84663169/285c726d-9051-44e3-8515-d8d1047a7e6a)



### 7. Delete Task by its id

- **Url** http://localhost:8000/task/delete/:id
- **Method:** Delete
- **Parameters:**
  - `id` : Task ID
- **Header:** In the header we have to pass
  - **Authorization:** Authorization as Bearer  token

![Screenshot (315)](https://github.com/rachit3014/Fluid-AI/assets/84663169/76d46b5a-35f1-4b3b-993f-d8096e7d8fff)



## Test for API Endpoints

- Unit tests for the API endpoints to ensure they function correctly.
- Include integration tests that test the API endpoints with the database to ensure the system works as a whole.
- Provide task id in task.test.js file and status to run test.

![Screenshot (308)](https://github.com/rachit3014/Fluid-AI/assets/84663169/4ec75b1c-5953-4010-a529-a1e1dcd66fa4)

 
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
