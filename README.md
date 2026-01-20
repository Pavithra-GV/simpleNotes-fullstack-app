# 📝 Full-Stack Notes Application

A simple yet complete **Full-Stack Notes App** built using **Angular**, **Node.js (Express)**, and **MongoDB**.  
This project supports full **CRUD operations** and demonstrates real-world frontend–backend–database integration.

---

## 🚀 Features

- ➕ Add notes  
- 👀 View all notes  
- ✏️ Edit notes (inline editing)  
- ❌ Delete notes  
- 💾 Persistent storage using MongoDB  
- 🔄 Real-time UI updates using Angular

---

## 🛠 Tech Stack

### Frontend
- Angular 11
- TypeScript
- HTML, CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Tools
- MongoDB Compass
- Git & GitHub
- VS Code

---

## 📁 Project Structure

```
notes-fullstack-app/
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   └── frontend/
│       ├── src/
│       ├── angular.json
│       ├── package.json
│
├── .gitignore
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/notes-fullstack-app.git
cd notes-fullstack-app
```

---

### 2️⃣ Start MongoDB

```bash
mongod
```
Make sure MongoDB is running on **port 27017**.

---

### 3️⃣ Run Backend

```bash
cd backend
npm install
npm start
```

Backend runs at:
```
http://localhost:3000
```

Test API:
```
http://localhost:3000/notes
```

---

### 4️⃣ Run Frontend

```bash
cd frontend/frontend
npm install
ng serve
```

Frontend runs at:
```
http://localhost:4200
```

---

## 🧪 API Endpoints

| Method | Endpoint        | Description      |
|------|----------------|------------------|
| GET  | /notes          | Get all notes    |
| POST | /notes          | Add a new note   |
| PUT  | /notes/:id      | Update a note    |
| DELETE | /notes/:id    | Delete a note    |

---

## 🎯 Learning Outcomes

- Built a complete **CRUD full-stack application**
- Understood **Angular component & service architecture**
- Implemented REST APIs using **Express**
- Integrated **MongoDB with Mongoose**
- Learned real-world debugging and Git workflows
