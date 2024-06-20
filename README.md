# ChatAPP
ChatApp is a real-time messaging application built using modern web technologies including Node.js, Express.js, React.js, JavaScript, Tailwind CSS, and MongoDB. This application provides a seamless communication experience with features such as real-time messaging, user authentication, and secure data storage.

## Table of Contents
- Features
- Tech Stack
- Installation
- Usage
- Contributing

### Features
- Real-time messaging
- User authentication and authorization
- Responsive design with Tailwind CSS
- Secure data storage with MongoDB
- Scalable and maintainable architecture

### Tech Stack
- Front-end: React.js, JavaScript, Tailwind CSS
- Back-end: Node.js, Express.js
- Database: MongoDB
- Real-time Communication: Socket.IO

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Krish085p/ChatApp.git
   cd ChatApp

   ```
2. Install Dependencies:
   - For Server(api)
   ```bash
   cd api
   npm install

   ```
   - For Client
   ```bash
   cd client
   npm install

   ```
3. Set up environment variables:
    - Create a '.env' file in the server directory and add your MongoDB URI and any other necessary environment variables:
    ```bash
    MONGO_URI = your_mongodb_uri
    JWT_SECRET = your_jwt_secret
    CLIENT_URL = your_client_url
    ```

### Usage
1. Start the Server(api)
   ```bash
   cd api
   npm start

   ```
2. Start the Client
   ```bash
   cd client
   npm start

   ```
3. Open a browser
   - Navigate to 'http://localhost:4040' to start using the application.

### Contribution
Contributions are welcome! Please fork the repository and create a pull request with your changes.
