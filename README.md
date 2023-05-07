# SimpliAsk

A Doctor to Patient connectivity tool built with the MERN (MongoDB, Express, React, and Node.js) stack. The tool includes features such as data hashing with bcrypt for enhanced security, user authentication with JWT, real-time video conferencing with WebRTC, a personal assistant with Artyom.js, appointment scheduling platform, inbuilt chat between doctors and patients, and web chats.

## Technologies Used

- **MongoDB**: A popular NoSQL database for storing data in a flexible, JSON-like format.
- **Express**: A fast and minimalist web application framework for Node.js that simplifies building RESTful APIs.
- **React**: A popular JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment that allows server-side execution of JavaScript code.
- **bcrypt**: A library for hashing passwords to securely store them in the database.
- **JSON Web Token (JWT)**: A compact, URL-safe means of representing claims to be transferred between parties as a JSON object, used for user authentication.
- **WebRTC**: A set of web standards that enables real-time communication between browsers for video conferencing.
- **Artyom.js**: A JavaScript library for implementing voice commands and personal assistants in web applications.

![MongoDB](https://img.icons8.com/color/48/000000/mongodb.png) ![Express.js](https://img.icons8.com/color/48/000000/express.png) ![React](https://img.icons8.com/color/48/000000/react-native.png) ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) ![Tailwind CSS](https://img.icons8.com/color/48/000000/tailwindcss.png)

## Features

- Secure user authentication with JWT for secure login and registration.
- Data hashing with bcrypt for enhanced security.
- Real-time video conferencing using WebRTC for seamless and secure communication between doctors and patients.
- Personal assistant powered by Artyom.js to provide voice-based assistance and interactions.
- Appointment scheduling platform for doctors and patients to manage appointments efficiently.
- Inbuilt chat functionality between doctors and patients for easy communication.
- Web chat functionality for quick and convenient interactions.
  
Installation
------------

To start the project or clone it, follow the steps below:

1.  Clone the repository to your local machine using the following command:

    ```
    git clone https://github.com/RaghavVerma24/SimpliAsk
    ```

2. Install dependencies for both the frontend and backend:
    ```
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Create a `.env` file in the server  directory and add the following:
    ```
    MONGODB_URI=<your-mongodb-cluster-name>
    ```

4. Start the backend server:
    ```
    cd server
    nodemon index.js
    ```

5. Start the frontend:
    ```
    cd client
    npm run dev
    ```

Contributing
------------

If you would like to contribute to the project, feel free to submit a pull request. Please ensure that your changes are in line with the project's coding standards and practices.

License
-------

This project is open-source and available under the [MIT License](https://chat.openai.com/LICENSE).
