# 🛍️ HappyShop — Full-Stack E-Commerce Platform

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A feature-rich, multi-vendor e-commerce platform built with the MERN stack.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [API Endpoints](#-api-endpoints) • [Contributing](#-contributing)

</div>

---

## ✨ Features

### 🛒 Customer Experience
- **Product Browsing** — Search, filter, and sort products by categories
- **Product Details** — Image galleries, ratings, reviews, and suggested products
- **Shopping Cart** — Add, remove, update quantities with persistent cart
- **Wishlist** — Save favorite products for later
- **Secure Checkout** — Multi-step checkout with address management
- **Payment Integration** — Stripe and PayPal payment gateways
- **Order Tracking** — Real-time order status updates
- **Real-time Chat** — Direct messaging with sellers via Socket.IO

### 🏪 Seller Dashboard
- **Shop Management** — Create and manage your online shop
- **Product Management** — Full CRUD operations for products
- **Event Creation** — Create time-limited sale events with countdown timers
- **Coupon System** — Create and manage discount coupon codes
- **Order Management** — View, process, and manage customer orders
- **Refund Handling** — Process and manage refund requests
- **Revenue Analytics** — Dashboard with sales insights and statistics
- **Withdraw System** — Request earnings withdrawal

### 🔐 Admin Panel
- **Dashboard Overview** — Platform-wide analytics and statistics
- **User Management** — View and manage all registered users
- **Seller Management** — Approve, suspend, or manage seller accounts
- **Order Oversight** — Monitor all orders across the platform
- **Withdraw Approvals** — Approve or decline seller withdrawal requests

### 🔧 Technical Features
- **JWT Authentication** — Secure token-based auth for users and sellers
- **Email Verification** — Account activation via email (Nodemailer)
- **Image Management** — Cloudinary integration for media storage
- **Real-time Updates** — Socket.IO for live chat and notifications
- **Responsive Design** — Fully responsive across all device sizes
- **Protected Routes** — Role-based route protection (User/Seller/Admin)
- **State Management** — Centralized state with Redux Toolkit

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Redux Toolkit, Tailwind CSS, Material UI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JWT, bcrypt |
| **Payments** | Stripe, PayPal |
| **Real-time** | Socket.IO |
| **File Storage** | Cloudinary |
| **Email** | Nodemailer |
| **Deployment** | Vercel (Backend), Vercel/Netlify (Frontend) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **MongoDB** Atlas account or local instance
- **Stripe** account for payment processing
- **Cloudinary** account for image uploads

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VinayBabuSS22/HappyShop-ecommerce.git
   cd HappyShop-ecommerce
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend && npm install

   # Frontend
   cd ../frontend && npm install

   # Socket Server
   cd ../socket && npm install
   ```

3. **Environment Variables**

   Create `.env` files in the following directories:

   **`backend/config/.env`**
   ```env
   PORT=8000
   DB_URL=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret
   JWT_EXPIRES=7d
   ACTIVATION_SECRET=your_activation_secret
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_MAIL=your_email@gmail.com
   SMTP_PASSWORD=your_email_app_password
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   STRIPE_API_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   **`frontend/.env`**
   ```env
   REACT_APP_API_URL=http://localhost:8000/api
   ```

   **`socket/.env`**
   ```env
   PORT=4000
   ```

4. **Run the application**
   ```bash
   # Terminal 1 — Backend
   cd backend && npm run dev

   # Terminal 2 — Frontend
   cd frontend && npm start

   # Terminal 3 — Socket Server
   cd socket && npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
HappyShop-ecommerce/
├── backend/
│   ├── config/           # Environment configuration
│   ├── controller/       # Route handlers (user, shop, product, order, etc.)
│   ├── db/               # MongoDB connection setup
│   ├── middleware/        # Auth, error handling, async wrapper
│   ├── model/            # Mongoose schemas (User, Shop, Product, Order, etc.)
│   ├── utils/            # JWT tokens, email sender, error handler
│   ├── app.js            # Express app configuration
│   ├── server.js         # Server entry point
│   └── vercel.json       # Vercel deployment config
│
├── frontend/
│   ├── public/           # Static assets
│   └── src/
│       ├── components/   # Reusable UI components
│       │   ├── Admin/    # Admin dashboard components
│       │   ├── Cart/     # Shopping cart
│       │   ├── Checkout/ # Checkout flow
│       │   ├── Events/   # Event cards and countdown
│       │   ├── Layout/   # Header, Footer, Navbar, Loader
│       │   ├── Login/    # Login form
│       │   ├── Payment/  # Payment integration
│       │   ├── Products/ # Product details, ratings
│       │   ├── Profile/  # User profile management
│       │   ├── Route/    # Homepage sections (Hero, Categories, etc.)
│       │   ├── Shop/     # Seller dashboard components
│       │   ├── Signup/   # Registration form
│       │   └── Wishlist/ # Wishlist drawer
│       ├── pages/        # Page-level components
│       ├── redux/        # Redux store, actions, reducers
│       ├── routes/       # Protected and public route definitions
│       ├── static/       # Static data (categories, nav items)
│       └── styles/       # Shared style utilities
│
└── socket/
    └── index.js          # Socket.IO server for real-time chat
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v2/user/create-user` | Register a new user |
| `POST` | `/api/v2/user/login-user` | Login user |
| `GET` | `/api/v2/user/getuser` | Get logged-in user info |
| `POST` | `/api/v2/shop/create-shop` | Register a new shop |
| `POST` | `/api/v2/shop/login-shop` | Login shop |

### Products & Events
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v2/product/create-product` | Create a product |
| `GET` | `/api/v2/product/get-all-products` | Get all products |
| `POST` | `/api/v2/event/create-event` | Create an event |
| `GET` | `/api/v2/event/get-all-events` | Get all events |

### Orders & Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v2/order/create-order` | Place a new order |
| `GET` | `/api/v2/order/get-all-orders` | Get user's orders |
| `POST` | `/api/v2/payment/process` | Process Stripe payment |

### Messaging
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v2/conversation/create-new-conversation` | Start a conversation |
| `POST` | `/api/v2/message/create-new-message` | Send a message |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

<div align="center">

**Built with ❤️ using the MERN Stack**

⭐ Star this repo if you find it useful!

</div>
