# MERN Stack Tourism Application

Welcome to the MERN Stack Tourism Application! This project is a comprehensive web application for exploring tourist destinations, booking tours, and managing user experiences. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), it provides a robust and scalable solution for tourism management.

## Features

- **User Authentication:** Secure user login and registration.
- **Tour Listings:** Browse and search for various tourist destinations.
- **Booking System:** Book tours and manage reservations.
- **User Profiles:** Manage personal information and view booking history.
- **Admin Panel:** Administrative interface for managing tours, bookings, and users.
- **Responsive Design:** Fully responsive and optimized for various devices.

## Tech Stack

- **Frontend:**
  - React
  - Redux (for state management)
  - React Router (for navigation)
  - Axios (for HTTP requests)
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Mongoose (ODM for MongoDB)
  - JWT (for authentication)
- **Additional Tools:**
  - Babel (JavaScript compiler)
  - Webpack (module bundler)
  - Nodemon (for automatic server restarts)

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local instance or cloud-based)

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/tourism-app.git
    cd tourism-app
    ```

2. **Install dependencies for both frontend and backend:**
    ```sh
    # In the root directory
    npm install

    # Change to the client directory
    cd client
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:
    ```
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application:**

    In the root directory, start the backend server:
    ```sh
    npm run server
    ```

    In a separate terminal, start the frontend development server:
    ```sh
    cd client
    npm start
    ```

    The application should now be running at `http://localhost:3000`.

## Usage

- **User Registration/Login:** Create an account or log in with existing credentials.
- **Browse Tours:** Explore various tourist destinations and view details.
- **Book Tours:** Make reservations for selected tours.
- **User Profile:** Update personal information and view booking history.
- **Admin Panel:** (Admins only) Manage tours, bookings, and users.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact:

- Your Name - [your.email@example.com](mailto:your.email@example.com)
- GitHub: [yourusername](https://github.com/yourusername)

---

Thank you for using our Tourism Application! We hope you have a great experience exploring and booking tours.
