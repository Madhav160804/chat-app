# Chat App Project

## Overview

This project is a feature-rich chat application designed to facilitate seamless real-time communication between users. Built with modern web technologies, the application provides a robust and user-friendly platform for chatting, user management, and status updates.

## Features

### User Authentication
- **Login:** Secure login functionality for existing users.
- **Signup:** Easy registration process for new users.

### User Interaction
- **Search Functionality:** Search for other users within the application.
- **Online Status:** View the online status of users to know their availability.
- **Real-Time Communication:** Instant messaging with real-time updates using WebSocket technology.

## Technologies Used

### Frontend
- **React:** <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="20"/>
- **Vite:** <img src="https://vitejs.dev/logo.svg" alt="Vite" width="20"/>

### Backend
- **Node.js:** <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="20"/>
- **Express:** <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" width="50"/>

### Real-Time Communication
- **Socket.io:** <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" alt="Socket.io" width="20"/>

### Database
- **MongoDB:** <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" width="50"/>

### Authentication
- **JWT (JSON Web Tokens):** <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" width="20"/>

## Setup and Installation

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/Madhav160804/chat-app.git
    cd chat-app
    ```

2. **Install Dependencies:**
    - Navigate to the frontend and install dependencies:
        ```sh
        cd frontend
        npm install
        ```
    - Navigate to the backend and install dependencies:
        ```sh
        cd backend
        npm install
        ```

3. **Environment Variables:**
    - Create a `.env` file in the backend directory and configure your MongoDB URI, JWT secret, and other necessary environment variables.
	 Example `.env` file:
	```sh
	PORT=3000
MONGO_DB_URI={YOUR_MONGO_DB_CONNECTION_STRING}
JWT_SECRET = {YOUR_JWT_SECRET}
NODE_ENV = development
	```

4. **Run the Application:**
    - Start the backend server:
        ```sh
        cd backend
        node server.js
        ```
    - Start the frontend development server:
        ```sh
        cd frontend
        npm run dev
        ```

## Usage

Once the application is up and running, users can sign up, log in, search for other users, see who is online, and start chatting in real-time.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.



### Future planned features and improvements:-

- [ ] Add firebase authentication to verify email
- [ ] Send attachments in a message
- [ ] Refresh the users list when a new user signs up
- [ ] Sort users by recent messages at top
- [ ] User account dropdown menu
	- [ ] Update password
	- [ ] Change profile picture
- [ ] Friend network
- [ ] Chat Rooms

