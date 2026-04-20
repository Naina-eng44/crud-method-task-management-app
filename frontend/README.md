### Task Management System (MERN)

## Project Overview

This is a simple Task Management System built using the MERN stack.
It allows users to create, view, update, and delete tasks.

---

## Features

-  Create Task
-  View All Tasks
-  Update Task Status (Pending / Completed)
-  Delete Task
-  Filter Tasks (All / Pending / Completed) (Bonus)
-  Form Validation (Bonus)
-  Attractive UI using Bootstrap

---

## Tech Stack

- Frontend: React (Hooks + Functional Components)
- Backend: Node.js + Express
- Database: MongoDB
- API: REST APIs (CRUD)
- Styling: Bootstrap + Custom CSS

---

## Folder Structure

project-root/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
|   |   |-- screensort/
│   │   └── index.js
│
└── README.md

---

## Setup Instructions


### Backend Setup

cd backend
npm install
node server.js

---

### Frontend Setup

cd frontend
npm install
npm start

---

## API Endpoints

Method| Endpoint| Description
GET| /api/tasks| Get all tasks
POST| /api/tasks| Create task
PUT| /api/tasks/:id| Update task
DELETE| /api/tasks/:id| Delete task

---

## Screenshots

### Frontend UI

!["Frontend"](./frontend/src/screenshot/frontend.png)

### Backend Running

!["Backend"](./frontend/src/screenshot/backend.png)

### Database (MongoDB)

!["Database"](./frontend/src/screenshot/database.png)

---

## Expected Output

- Working MERN application
- CRUD operations functional
- Clean UI
- API integration working

---

## Notes

- .env file is not included for security reasons
- node_modules is ignored

---
