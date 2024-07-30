# User Form

---

## About

This form uses the following:

- express.js
- node.js
- react.js
- mongodb

There are 3 pages in this project:

### Home

- Handles logging in user. If the user is not found in databse, they are alerted with "user not found" message.
- If the user is registered, they are redirected to "Login" page, informing they're logged in

### Register

- This page handles user registration.
- if passwords are not matched, user is alerted.
- If any field is left empty, the form is not submitted and the user is alerted.
- When the form is submitted, the user is registerd on mongodb
- The password is hashed with bcryptjs so the password is not visible in databse

### Users

- This page contains all the user details who are registered.
- The details are:
  - Full Name
  - Email
  - Admin status

---

## Installation

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/evirac/User_Form.git
    cd User_Form
    ```
2.  Install backend dependencies:

    ```bash
    cd server
    npm install
    ```

3.  Install frontend dependencies:

    ```bash
    cd client
    npm install
    ```

4.  Run the frontend:

        ```bash
        cd client
        npm run dev
        ```

5.  Run the backend:
    ```bash
    cd server
    node index
    ```

The project already contains .env file, so you can simply use it or create a new one.
