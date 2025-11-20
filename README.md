# 📌 Shifa — Backend Server (Express + MongoDB)

A modular, scalable backend built using **Node.js, Express**, and **MongoDB (Atlas)**.
This server follows a clean architecture using:

- Routes → Entry points (API endpoints)

- Controllers → Handle logic & responses

- Services → Handle database operations

- Config → DB connection, environment setup

This structure helps keep code organized, scalable, and easy to maintain, even for beginners.

---

## 🚀 Features

- Modular folder structure

- MongoDB Atlas connection

- Doctor module (example setup)

- Environment variable support

- Express routing

- JSON request handling

- Ready for additional modules:

  - Users

  - Appointments

  - Authentication

  - Admin panel

  - File uploads (Cloudinary/local)

---

## 📁 Folder Structure

```
project-root/
│── server.js
│── package.json
│── README.md
│
├── config/
│ ├── db.js
│ └── env.js
│
├── routes/
│ └── index.js
│
└── modules/
└── doctor/
├── doctor.route.js
├── doctor.controller.js
└── doctor.service.js
```

---

## ⚙️ Environment Variables

Create `.env` file in your root folder:

```
PORT = 3000
DB_USERNAME = shifaDB
DB_PASSWORD = ********
DB_HOST = mongodb.tamg8lo.mongodb.net
```

These values are loaded by `config/env.js`.

---

## 🔌 Database Connection

MongoDB is connected using:

`await connectDB();`

Located in:
`config/db.js`

- `connectDB()` → connects to MongoDB Atlas

- `getDB()` → returns the shared database instance

- Services use `getDB()` to run queries

---

## 🧠 Modular Route Flow

```
Request → /api/doctors → doctor.route.js → controller → service → MongoDB
```

This separation keeps the backend clean and maintainable.

## 📡 Example API Endpoint

### Get all doctors

```
GET http://localhost:3000/doctors
```

Sample response:

```
[
    {
     "_id": "65ab1234cd5678ef90123abc",
     "name": "Dr. Rahim",
     "specialty": "Cardiologist"
    }
]
```

## ▶️ How to Run the Server

### 1. Install dependencies

```
 npm install
```

### 2. Create `.env` file

(see section above)

### 3. Start the server

```
npm start
```

You should see:

```
🚀 Server running on port 3000
MongoDB Connected!
```

## 🧪 Testing the API

### Using Browser/Postman

Open:

```
http://localhost:3000/doctors
```

### Using cURL

```
curl http://localhost:3000/doctors
```

## 🧩 Doctor Module (Example Logic)

### doctor.route.js

```
router.get("/", listDoctors);
```

### doctor.controller.js

```
const doctors = await getAllDoctors();
res.json(doctors);
```

### doctor.service.js

```
return db.collection("doctors").find().toArray();
```

---

## 📦 Add More Modules

Just follow this pattern:

```
modules/
├── doctor/
├── user/
├── appointment/
├── admin/
```

Each module should include:

- `module.route.js`

- ` module.controller.js`

- ` module.service.js`

## 🤝 Contributions

Feel free to expand:

- Authentication (JWT)

- Admin Panel routes

- File Uploads (Cloudinary)

- Role-Based Access

- Appointment Booking

- Payment Integration

## 📄 License

MIT License — free to use and modify.
