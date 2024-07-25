Project Title: User Management API (Frontend developer assessment)

Description: A simple API for managing users, built using Axios for HTTP requests and Tailwind CSS for styling.

Features:

- Create new users with email, name, password, and role
- API endpoint to post user data
- Error handling for API requests
- Styling with Tailwind CSS

API Endpoint:
- GET /users - Get all users
- POST /users - Create a new user
- GET /users/:id - Get a user by id
- PATCH /users/:id - Update a user
- Delete /users/:id - Delete a user

Request Body:

- email: string
- name: string
- password: string
- role: string

Response:

- 201 Created - User created successfully
- 400 Bad Request - Invalid request data


Error Handling:

- Catches and logs API request errors
- Handles server errors and logs error messages

Technologies Used:

- Reactjs
- Axios for HTTP requests
- Tailwind CSS for styling

Getting Started:

1. Clone the repository: git clone
2. Install dependencies: npm install
3. Start the development server: npm start
