# ☕ Café Kiosk System

## Overview
The **Café Kiosk System** is a self-service ordering platform built with the **MERN stack**.  
It provides a clean UI for customers to browse the menu, add items to a cart, and place orders. The system also includes an **Admin Dashboard** to manage menu items, monitor orders, and administer users.

---

## Features

### Customer
- Register / login.  
- Browse menu with item cards (images, price, description).  
- Add / remove items from cart, update quantities.  
- Checkout and view order confirmation.  
- Order history.

### Admin
- Add / edit / remove menu items.  
- View and manage orders.  
- Manage user accounts.  
- Dashboard overview of recent orders and basic stats.

---

## Tech Stack
- **Frontend:** React.js (Create React App or similar), Tailwind CSS / Bootstrap, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or Atlas)  
- **Auth:** JWT (JSON Web Tokens)  
- **Dev tools:** VS Code, Postman

---

## Project Structure
    CafeKiosk/
    ├── backend/              # Node/Express server
    │   ├── controllers/      # Business logic (orders, users, items)
    │   ├── models/           # Mongoose schemas
    │   ├── routes/           # API endpoints
    │   ├── middleware/       # Auth, error handlers
    │   └── server.js         # Entry point
    ├── frontend/             # React app
    │   ├── src/
    │   │   ├── components/   # Reusable UI components (MenuCard, Cart, Navbar)
    │   │   ├── pages/        # Pages (Home, Login, Register, Admin)
    │   │   └── App.js
    │   └── package.json
    ├── README.md
    └── .gitignore

---

## Environment / Configuration
Create a `.env` (backend) with at least:

    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<strong-secret>
    PORT=5000

Frontend may require a config or environment file to point at backend API:

    REACT_APP_API_URL=http://localhost:5000/api

(Use `.env.example` in repo to show required variables without secrets.)

---

## Installation & Run (Development)

1. Clone repository
    git clone https://github.com/RahilMaiyani/Cafe-Kiosk-MERN.git
    cd cafe-kiosk

2. Backend (server)
    cd backend
    npm install
    # create .env with MONGO_URI and JWT_SECRET
    npm run dev    # or: node server.js

3. Frontend (client)
    cd ../frontend
    npm install
    npm start

- Backend default: `http://localhost:5000` (API)
- Frontend default: `http://localhost:3000` (UI)

---

## Recommended `.gitignore` (basic)
    node_modules/
    .env
    dist/
    build/
    .DS_Store
    npm-debug.log

---

## Notes & Best Practices
- Keep secrets out of source control; use environment variables.  
- Use MongoDB Atlas or a hosted DB for demos. For local dev, use MongoDB Compass or `mongod`.  
- Validate inputs on both client and server. Sanitize data before saving.  
- Implement rate-limiting and basic security headers for production.

---

## Future Enhancements
- Payment gateway integration (Stripe / Razorpay).  
- Real-time order updates (WebSockets).  
- Analytics dashboard: most-ordered items, peak hours.  
- Multi-branch support and inventory management.

---
