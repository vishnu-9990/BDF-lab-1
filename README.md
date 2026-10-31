# Lab 1: Node.js and Express Server

## 👨‍🎓 Student Details

- **Name:** G. Vishnu Vardhan
- **Registration Number:** 252U1R8026
- **Section:** CSE-QE-2A

## 🚀 Live Demo

**Live Application:** https://bdf-lab-1-cq13.onrender.com/

## 💻 GitHub Repository

**GitHub Link:** https://github.com/vishnu-9990/BDF-lab-1
## 🎯 Objective

To create and deploy a basic web server using Node.js and Express.js. This application demonstrates HTTP routing, text responses, JSON responses, displaying the current date and time, and handling invalid routes using the HTTP 404 status code.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- npm (Node Package Manager)
- Git and GitHub
- Render (Deployment Platform)

## 📂 Project Structure

```text
bdf-labs/
│
├── screenshots/
├── .gitignore
├── README.md
├── express-server.js
├── server.js
├── package.json
└── package-lock.json
```

## ⚙️ How to Run the Project

### Prerequisites

Install Node.js and npm.

Check installation:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/karthikjakkileti-rk/bdf-labs.git
```

### 2. Navigate to Project Directory

```bash
cd bdf-labs
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Variables

The application uses the PORT environment variable when provided by the hosting platform. Otherwise, it uses port 3000.

No additional environment variables are required.

### 5. Run the Node.js Server

```bash
node server.js
```

### 6. Run the Express Server

Stop the previous server before starting Express.

```bash
node express-server.js
```

The application will run locally at:

http://localhost:3000

## 📡 API Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | `/` | Returns welcome message | 200 OK |
| GET | `/about` | Returns student details as JSON | 200 OK |
| GET | `/time` | Returns current date and time | 200 OK |
| GET | `/unknown` | Tests invalid route handling | 404 Not Found |

## 🌐 Live Endpoint Links

- **Home Route:** https://bdf-lab-1-cq13.onrender.com/
- **About Route:** https://bdf-lab-1-cq13.onrender.com/about
- **Time Route:** https://bdf-lab-1-cq13.onrender.com/time
- **404 Error Test:** https://bdf-lab-1-cq13.onrender.com/unknown

## 📸 Screenshots

The following screenshots demonstrate the application's output:

1. Home Route
2. About Route
3. Time Route
4. 404 Error Handling

## ⚠️ Problems Faced and Solutions

### 1. Setting Up Node.js Server

**Problem:** Node.js could not find the server file.

**Solution:** Used the correct filename and command to run the server.

### 2. Installing Express.js

**Problem:** The project required Express.js to implement routes.

**Solution:** Installed Express using npm.

### 3. Implementing Routes

**Problem:** The server needed to return different responses for different URL paths.

**Solution:** Created Express GET routes for the home page, about page, and current date and time.

### 4. Handling Invalid Routes

**Problem:** Unknown URLs needed to return an appropriate error response.

**Solution:** Added fallback middleware that returns HTTP 404.

### 5. Deploying the Application

**Problem:** The application needed to be accessible through a public URL.

**Solution:** Uploaded the project to GitHub and deployed the Express server using Render.

## 🎓 Conclusion

This lab provided practical experience in creating web servers using Node.js and Express.js. It helped develop an understanding of HTTP requests and responses, route handling, JSON output, date and time operations, HTTP status codes, package management, Git version control, and cloud deployment using Render.

## 🔗 Important Links

- **Live Website:** https://bdf-lab-1-cq13.onrender.com/
- **GitHub Repository:** https://github.com/karthikjakkileti-rk/bdf-labs
