# Microblogger App

**Microblogger App** is a simple microblogging platform built using **Express.js**. It allows users to create and share short posts in a clean, minimalistic environment. The app uses **SQLite** for managing user data and posts in the backend, and **Bootstrap** for responsive and modern styling.

## Features

- **User Authentication**: Allows users to sign up, log in, and manage their profile.
- **Post Creation**: Users can create, edit, and delete posts.
- **Post Feed**: Display recent posts from all users in a clean, easy-to-read feed.
- **User Profile**: Users can view and update their personal information.
- **Responsive Design**: A mobile-friendly, responsive UI powered by **Bootstrap**.

## Installation Requirements

Before running the project, ensure you have the following installed:

- **Node.js**:
  - Follow the install instructions at [Node.js](https://nodejs.org/en/).
  - It is recommended to use the latest LTS version.
  
- **SQLite3**:
  - **Windows users**: Follow instructions here: [SQLite3 Installation for Windows](https://www.sqlitetutorial.net/download-install-sqlite/).
  - **Mac users**: SQLite3 comes pre-installed.
  - **Linux users**: Use a package manager, for example: `apt install sqlite3`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Moumita-Mou/Microblogger-App.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Microblogger-App
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the following command to build the database:

   ```bash
   npm run build-db
   ```

5. To start the application, use the following command:

   ```bash
   npm run start
   ```

6. Open your browser and navigate to `http://localhost:3000` to use the app.

## Help with Node.js SQLite3

SQLite3 works a little differently compared to MySQL, but the key concepts are the same. Here are a few helpful resources:

- [SQLite3 API Documentation](https://github.com/TryGhost/node-sqlite3/wiki/API)
- [SQLite Tutorials for Node.js](https://www.sqlitetutorial.net/sqlite-nodejs/)


## Current Status

The Microblogger App is fully functional with core features such as user authentication, post creation, and profile management. Future enhancements could include:

- **Comments and Likes**: Add the ability to comment on and like posts.
- **Post Search**: Implement search functionality for finding specific posts.
- **User Follow System**: Enable users to follow others and see posts from people they follow.

--------------------------------------------------------------



# Using this Project Template for creating your own version of the App:

## Initial Step
Do as follows:

1. **Run the following command** to create the database:

   ```bash
   npm run build-db
   ```

2. **Start the web app**:

   ```bash
   npm run start
   ```

3. You can also run:

   ```bash
   npm run clean-db
   ```

   This will delete the database and allow you to rebuild it for a fresh start.

## Next Steps

- Explore the file structure and code.
- Read all the comments in the code.
- Try accessing each of the routes via the browser to understand what they do.
- Try creating EJS pages for each route that retrieves and displays the data.
- Try enhancing the `create-user-record` page to allow users to set custom text in the record.
- Add new routes and pages to allow users to create their own records.

## Creating Database Tables

- All database tables should be created by modifying the `db_schema.sql`.
- This allows you to review and recreate your database simply by running `npm run build-db`.
- **Do not** create or alter database tables through other means.
  
Ensure that your `package.json` file includes all dependencies for your project. **Make sure to use the `--save` tag** when installing any new dependencies.

## Getting Started with the Project

- After setting up the project, make sure to configure any settings in the configuration files.
- The app will only require you to run the following commands to get it working:
  - `npm install`
  - `npm run build-db`
  - `npm run start`
- Ensure no additional build scripts or dependencies are required.

