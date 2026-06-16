<div align="center">

<img src="./banner.png" alt="HappyShop Banner" width="100%" />

<br />
<br />

# 🛍️ HappyShop — Full-Stack Multi-Vendor E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_HappyShop-blueviolet?style=for-the-badge)](https://happyshop-frontend.onrender.com/)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github)](https://github.com/VinayBabuSS22/HappyShop-ecommerce)

<br />

![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

<br />

**A production-grade, multi-vendor marketplace built with the MERN stack — featuring real-time seller–buyer chat, dual payment gateways (Stripe + PayPal), a complete seller dashboard, admin panel, event/coupon systems, and 39+ routes across three user roles.**

<br />

[✨ Features](#-features) · [🛠️ Tech Stack](#️-tech-stack) · [🏗️ Architecture](#️-architecture) · [🚀 Getting Started](#-getting-started) · [🔌 API Reference](#-api-reference) · [🤝 Contributing](#-contributing)

</div>

---

## 📌 About

**HappyShop** is a fully-featured multi-vendor e-commerce marketplace built from scratch using the **MERN stack**. It supports three user roles — **Customers**, **Sellers**, and **Admins** — each with dedicated dashboards, protected routes, and role-specific functionality.

This is not a simple CRUD app. It's a **production-grade platform** with:

- 🏪 **Multi-Vendor Architecture** — Sellers register their own shops, manage inventory, and fulfill orders independently
- 💬 **Real-Time Messaging** — Socket.IO-powered live chat between buyers and sellers with read receipts
- 💳 **Dual Payment Gateways** — Stripe (card payments) + PayPal integration for global coverage
- 📊 **Analytics Dashboards** — Revenue tracking, order statistics, and platform-wide metrics for sellers and admins
- 🎪 **Event & Coupon System** — Time-limited flash sales with countdown timers and promotional coupon codes
- 💰 **Seller Payout System** — Sellers can request earnings withdrawals with bank details, approved by admin
- 📧 **Email Verification** — Activation-link-based registration for both users and sellers via Nodemailer
- ☁️ **Cloud-Native** — Cloudinary CDN for all images, MongoDB Atlas for the database, deployed on Render

> 🔗 **Live Demo:** [happyshop-frontend.onrender.com](https://happyshop-frontend.onrender.com/)

---

## ✨ Features

### 🛒 Customer Experience

| Feature | Description |
|---------|-------------|
| **Smart Product Search** | Keyword search with real-time results across the entire catalog |
| **Category Filtering** | Browse by category with dedicated navigation |
| **Product Details** | Rich product pages with image galleries, ratings, reviews, and suggested products |
| **Wishlist** | Save products for later with localStorage persistence |
| **Shopping Cart** | Add/remove items, update quantities — persisted across sessions |
| **Multi-Step Checkout** | Guided flow: Address Selection → Order Review → Payment |
| **Dual Payment Options** | Pay with Stripe (credit/debit cards) or PayPal |
| **Cash on Delivery** | COD option for customers who prefer paying on receipt |
| **Order Tracking** | Real-time status tracking from processing through delivery |
| **Live Chat with Sellers** | Real-time messaging via Socket.IO with online status indicators |
| **Product Reviews** | Star-rated reviews with detailed feedback on purchased products |
| **Profile Management** | Update personal info, avatar, password, and manage saved addresses |
| **Email Verification** | Secure account activation via email link |

### 🏪 Seller Dashboard

| Feature | Description |
|---------|-------------|
| **Shop Registration** | Create a seller account with email verification |
| **Revenue Analytics** | Dashboard overview with sales metrics and earnings breakdown |
| **Product Management** | Full CRUD with multi-image upload to Cloudinary |
| **Event Creation** | Time-limited flash sales with start/end dates and live countdown timers |
| **Coupon System** | Create discount codes with min/max purchase requirements and product targeting |
| **Order Fulfillment** | Process orders, update status, and handle refund requests |
| **Withdraw System** | Request earnings withdrawal with bank account details |
| **Seller Inbox** | Real-time chat with customers including image sharing |
| **Shop Settings** | Customize shop profile, avatar, and contact information |
| **Public Shop Page** | Customer-facing storefront showcasing all seller products and reviews |

### 🔐 Admin Panel

| Feature | Description |
|---------|-------------|
| **Platform Dashboard** | Overview of total users, sellers, orders, products, and revenue |
| **User Management** | View all registered users with delete capability |
| **Seller Management** | View and manage all seller accounts |
| **Order Oversight** | Monitor all orders across the entire platform |
| **Product & Event Moderation** | View all products and events from all sellers |
| **Withdrawal Approvals** | Review and approve/decline seller payout requests |

### 🔧 Technical Highlights

| Feature | Implementation |
|---------|---------------|
| **Authentication** | JWT tokens in HTTP-only cookies with separate tokens for Users (`token`) and Sellers (`seller_token`) |
| **Role-Based Access** | Three middleware guards: `isAuthenticated`, `isSeller`, `isAdmin` |
| **Protected Routes** | Frontend route guards for User, Seller, and Admin sections |
| **Real-Time Engine** | Socket.IO server for live chat, online status, and read receipts |
| **Payment Security** | Server-side Stripe PaymentIntents — card data never touches our server |
| **Image Pipeline** | Base64 → Cloudinary upload for products, avatars, and chat images |
| **Email Service** | Nodemailer SMTP integration for activation links and notifications |
| **Error Handling** | Centralized middleware with custom `ErrorHandler` class and async wrapper |
| **Production Cookies** | `SameSite=None` + `Secure=true` in production, `Lax` in development |
| **State Persistence** | Cart and wishlist persisted in localStorage; auth state in HTTP-only cookies |

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="140">

### 🎨 Frontend

</td>
<td>

| Technology | Purpose |
|-----------|---------|
| **React 18** | Component-based UI with hooks |
| **Redux Toolkit** | Centralized state management (7 slices) |
| **React Router v6** | Client-side routing (39+ routes) |
| **Tailwind CSS 3** | Utility-first styling with JIT mode |
| **Material UI v4** | UI components + DataGrid for tables |
| **Axios** | HTTP client for REST API communication |
| **Socket.IO Client** | Real-time WebSocket messaging |
| **Stripe React** | Secure card payment elements |
| **PayPal React** | PayPal checkout integration |
| **React Icons** | Scalable vector icon library |
| **React Toastify** | Toast notification system |
| **React Lottie** | Animated loading states |
| **Country-State-City** | Address auto-complete dropdowns |
| **timeago.js** | Human-readable timestamps |

</td>
</tr>
<tr>
<td align="center" width="140">

### ⚙️ Backend

</td>
<td>

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | RESTful API framework |
| **MongoDB** | NoSQL document database |
| **Mongoose** | ODM with schema validation & middleware hooks |
| **JWT** | Stateless token-based authentication |
| **Bcrypt.js** | Password hashing with salt rounds |
| **Stripe SDK** | Server-side payment intent processing |
| **Cloudinary** | Cloud image management & CDN delivery |
| **Nodemailer** | Transactional SMTP email service |
| **Cookie Parser** | HTTP-only cookie management |
| **CORS** | Cross-origin request handling |

</td>
</tr>
<tr>
<td align="center" width="140">

### 🔌 Real-Time

</td>
<td>

| Technology | Purpose |
|-----------|---------|
| **Socket.IO** | WebSocket server for real-time communication |
| **User Presence** | Online/offline status tracking |
| **Message Events** | Instant message delivery & read receipts |

</td>
</tr>
<tr>
<td align="center" width="140">

### ☁️ DevOps

</td>
<td>

| Technology | Purpose |
|-----------|---------|
| **Render** | Cloud deployment (frontend + backend) |
| **MongoDB Atlas** | Managed cloud database |
| **Cloudinary CDN** | Image hosting & optimization |
| **Vercel** | Alternative backend deployment config |

</td>
</tr>
</table>

---

## 🏗️ Architecture

### System Design

```
┌──────────────────────────────────────────────────────────────┐
│                     CLIENT (React 18)                         │
│                                                               │
│   ┌────────────┐  ┌────────────┐  ┌────────────────────┐     │
│   │  39+ Pages │  │ Components │  │  Redux Store       │     │
│   │  (3 Roles) │  │  (15+ dirs)│  │  (7 slices)        │     │
│   └─────┬──────┘  └──────┬─────┘  └──────┬─────────────┘     │
│         └────────────────┼───────────────┘                    │
│                          │                                    │
│              ┌───────────┼───────────┐                        │
│              │  Axios    │  Socket.IO │                        │
│              │  (REST)   │  (WS)     │                        │
└──────────────┼───────────┼───────────┼────────────────────────┘
               │           │           │
               ▼           │           ▼
┌──────────────────────┐   │   ┌──────────────────────┐
│  BACKEND (Express)   │   │   │  SOCKET SERVER       │
│                      │   │   │                      │
│  ┌────────────────┐  │   │   │  ┌────────────────┐  │
│  │  10 Route      │  │   │   │  │  User Tracking │  │
│  │  Groups        │  │   │   │  │  Message Relay │  │
│  ├────────────────┤  │   │   │  │  Read Receipts │  │
│  │  Controllers   │  │   │   │  └────────────────┘  │
│  ├────────────────┤  │   │   └──────────────────────┘
│  │  Middleware    │  │   │
│  │  (Auth/Error)  │  │   │
│  ├────────────────┤  │
│  │  9 Mongoose    │  │
│  │  Models        │  │
│  └───────┬────────┘  │
└──────────┼───────────┘
           │
     ┌─────┼─────────────────┐
     ▼     ▼                 ▼
┌────────┐ ┌──────────┐ ┌────────┐
│MongoDB │ │Cloudinary│ │ Stripe │
│ Atlas  │ │  (CDN)   │ │+PayPal │
└────────┘ └──────────┘ └────────┘
```

### Project Structure

```
HappyShop/
│
├── 🔙 backend/                          # Express.js REST API
│   ├── config/
│   │   └── .env                         # Environment variables
│   ├── controller/
│   │   ├── user.js                      # User auth & CRUD (10.7KB)
│   │   ├── shop.js                      # Seller auth & CRUD (9.4KB)
│   │   ├── product.js                   # Product CRUD & reviews
│   │   ├── order.js                     # Order management & status
│   │   ├── event.js                     # Flash sale events
│   │   ├── coupounCode.js               # Discount coupons
│   │   ├── payment.js                   # Stripe payment processing
│   │   ├── conversation.js              # Chat conversations
│   │   ├── message.js                   # Chat messages
│   │   └── withdraw.js                  # Seller payouts
│   ├── db/
│   │   └── Database.js                  # MongoDB connection
│   ├── middleware/
│   │   ├── auth.js                      # isAuthenticated / isSeller / isAdmin
│   │   ├── catchAsyncErrors.js          # Async error wrapper
│   │   └── error.js                     # Global error handler
│   ├── model/                           # 9 Mongoose schemas
│   │   ├── user.js                      # User (name, email, password, addresses, role, avatar)
│   │   ├── shop.js                      # Shop (profile, balance, transactions, withdrawMethod)
│   │   ├── product.js                   # Product (images, reviews, ratings, stock, category)
│   │   ├── order.js                     # Order (cart, shipping, payment, status)
│   │   ├── event.js                     # Event (product + dates + countdown)
│   │   ├── coupounCode.js               # Coupon (code, value, min/max, product scope)
│   │   ├── conversation.js              # Conversation (members, lastMessage)
│   │   ├── messages.js                  # Message (text, sender, images)
│   │   └── withdraw.js                  # Withdraw (seller, amount, status)
│   ├── utils/
│   │   ├── ErrorHandler.js              # Custom error class
│   │   ├── cookieOptions.js             # Production-aware cookie config
│   │   ├── jwtToken.js                  # User JWT + cookie
│   │   ├── shopToken.js                 # Seller JWT + cookie
│   │   └── sendMail.js                  # Nodemailer transport
│   ├── app.js                           # Express app setup
│   ├── server.js                        # Entry point
│   └── vercel.json                      # Deployment config
│
├── 🎨 frontend/                         # React 18 SPA
│   ├── tailwind.config.js               # Tailwind JIT + custom breakpoints
│   └── src/
│       ├── components/
│       │   ├── Admin/                   # 🔐 Admin dashboard + sidebar
│       │   ├── Cart/                    # 🛒 Cart drawer component
│       │   ├── Checkout/               # 💳 Multi-step checkout + step indicator
│       │   ├── Events/                  # 🎪 Event cards + countdown timer
│       │   ├── Layout/                  # 📐 Header, Footer, Navbar, Loader, Dropdown
│       │   ├── Login/                   # 🔑 Login form
│       │   ├── Payment/                 # 💰 Stripe + PayPal + COD (14.4KB)
│       │   ├── Products/               # 📦 Product details, ratings, suggestions
│       │   ├── Profile/                 # 👤 Profile tabs + track order (23KB)
│       │   ├── Route/                   # 🏠 Homepage sections (Hero, Categories, etc.)
│       │   ├── Shop/                    # 🏪 Full seller dashboard (14 components)
│       │   ├── Signup/                  # 📝 Registration form
│       │   └── Wishlist/                # ❤️ Wishlist drawer
│       ├── pages/                       # 39+ page-level components
│       ├── redux/
│       │   ├── store.js                 # configureStore (7 reducers)
│       │   ├── actions/                 # 7 action creator files
│       │   └── reducers/               # 7 reducer files
│       ├── routes/
│       │   ├── Routes.js                # Public + User routes (19 pages)
│       │   ├── ShopRoutes.js            # Seller routes (13 pages)
│       │   ├── AdminRoutes.js           # Admin routes (7 pages)
│       │   ├── ProtectedRoute.js        # User auth guard
│       │   ├── ProtectedAdminRoute.js   # Admin role guard
│       │   └── SellerProtectedRoute.js  # Seller auth guard
│       ├── static/
│       │   └── data.js                  # Categories, nav items, branding data
│       └── styles/
│           └── styles.js                # Shared Tailwind utility strings
│
└── 🔌 socket/                           # Socket.IO server
    ├── index.js                         # User tracking, message relay, read receipts
    └── package.json
```

### State Management (Redux)

| Slice | Key State | Persistence |
|-------|-----------|-------------|
| `user` | `isAuthenticated`, `user`, `users` (admin) | HTTP-only cookies |
| `seller` | `isSeller`, `seller`, `sellers` | HTTP-only cookies |
| `products` | `allProducts`, `products` (shop) | Server |
| `events` | `allEvents`, `events` | Server |
| `cart` | Cart items array | `localStorage` |
| `wishlist` | Wishlist items array | `localStorage` |
| `order` | `orders`, `adminOrders` | Server |

---

## 🔌 API Reference

The backend exposes a RESTful API under `/api/v2/` with **10 route groups**:

### 🔐 Authentication & Users (`/api/v2/user`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-user` | Public | Register + send activation email |
| `POST` | `/activation` | Public | Activate account via token |
| `POST` | `/login-user` | Public | Login & set JWT cookie |
| `GET` | `/getuser` | Auth | Get current user profile |
| `GET` | `/logout` | Auth | Logout & clear cookie |
| `PUT` | `/update-user-info` | Auth | Update name, email, phone |
| `PUT` | `/update-avatar` | Auth | Upload new avatar to Cloudinary |
| `PUT` | `/update-user-password` | Auth | Change password |
| `PUT` | `/update-user-addresses` | Auth | Add/update address |
| `DELETE` | `/delete-user-address/:id` | Auth | Remove saved address |
| `GET` | `/admin-all-users` | Admin | Get all users |
| `DELETE` | `/delete-user/:id` | Admin | Delete user |

### 🏪 Shops (`/api/v2/shop`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-shop` | Public | Register shop + activation email |
| `POST` | `/activation` | Public | Activate shop via token |
| `POST` | `/login-shop` | Seller | Login shop & set seller cookie |
| `GET` | `/getSeller` | Seller | Get current seller profile |
| `GET` | `/logout` | Seller | Logout seller |
| `GET` | `/get-shop-info/:id` | Public | Get shop public info |
| `PUT` | `/update-shop-avatar` | Seller | Update shop avatar |
| `PUT` | `/update-seller-info` | Seller | Update shop details |
| `GET` | `/admin-all-sellers` | Admin | Get all sellers |
| `DELETE` | `/delete-seller/:id` | Admin | Delete seller |

### 📦 Products (`/api/v2/product`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-product` | Seller | Create product with images |
| `GET` | `/get-all-products-shop/:id` | Public | Get all products from a shop |
| `GET` | `/get-all-products` | Public | Get all products (catalog) |
| `DELETE` | `/delete-shop-product/:id` | Seller | Delete a product |
| `PUT` | `/create-new-review` | Auth | Submit product review |

### 🎪 Events (`/api/v2/event`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-event` | Seller | Create flash sale event |
| `GET` | `/get-all-events/:id` | Public | Get shop's events |
| `GET` | `/get-all-events` | Public | Get all active events |
| `DELETE` | `/delete-shop-event/:id` | Seller | Delete event |

### 🎟️ Coupons (`/api/v2/coupon`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-coupon-code` | Seller | Create coupon code |
| `GET` | `/get-coupon/:id` | Seller | Get shop's coupons |
| `DELETE` | `/delete-coupon/:id` | Seller | Delete coupon |
| `GET` | `/get-coupon-value/:name` | Auth | Validate & get coupon value |

### 🛒 Orders (`/api/v2/order`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-order` | Auth | Place a new order |
| `GET` | `/get-all-orders/:userId` | Auth | Get user's orders |
| `GET` | `/get-seller-all-orders/:shopId` | Seller | Get shop's orders |
| `PUT` | `/update-order-status/:id` | Seller | Update order status |
| `PUT` | `/order-refund/:id` | Auth | Request refund |
| `PUT` | `/order-refund-success/:id` | Seller | Accept refund |
| `GET` | `/admin-all-orders` | Admin | Get all orders |

### 💳 Payments (`/api/v2/payment`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/process` | Auth | Create Stripe PaymentIntent |
| `GET` | `/stripeapikey` | Auth | Get Stripe publishable key |

### 💬 Messaging (`/api/v2/conversation` + `/api/v2/message`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/conversation/create-new-conversation` | Auth | Start conversation |
| `GET` | `/conversation/get-all-conversation-seller/:id` | Seller | Get seller's conversations |
| `GET` | `/conversation/get-all-conversation-user/:id` | Auth | Get user's conversations |
| `PUT` | `/conversation/update-last-message/:id` | Auth | Update last message |
| `POST` | `/message/create-new-message` | Auth | Send message (text + images) |
| `GET` | `/message/get-all-messages/:id` | Auth | Get conversation messages |

### 💰 Withdrawals (`/api/v2/withdraw`)

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/create-withdraw-request` | Seller | Request payout |
| `GET` | `/get-all-withdraw-request` | Admin | View all requests |
| `PUT` | `/update-withdraw-request/:id` | Admin | Approve/decline request |

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Link |
|-------------|------|
| **Node.js** ≥ 18.x | [nodejs.org](https://nodejs.org/) |
| **MongoDB Atlas** | [mongodb.com/atlas](https://www.mongodb.com/atlas) |
| **Stripe Account** | [stripe.com](https://stripe.com/) |
| **PayPal Developer** | [developer.paypal.com](https://developer.paypal.com/) |
| **Cloudinary Account** | [cloudinary.com](https://cloudinary.com/) |
| **Gmail App Password** | [Google Guide](https://support.google.com/accounts/answer/185833) |

### 📥 Installation

```bash
# 1. Clone the repository
git clone https://github.com/VinayBabuSS22/HappyShop-ecommerce.git
cd HappyShop-ecommerce

# 2. Install all dependencies
cd backend && npm install
cd ../frontend && npm install
cd ../socket && npm install
```

### ⚙️ Environment Variables

<details>
<summary><b>Backend</b> — <code>backend/config/.env</code></summary>

```env
# Server
PORT=8000
NODE_ENV=DEVELOPMENT

# Database
DB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/happyshop

# Authentication
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRES=7d
ACTIVATION_SECRET=your_activation_secret

# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_API_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key

# Email (SMTP)
SMPT_SERVICE=gmail
SMPT_HOST=smtp.gmail.com
SMPT_PORT=465
SMPT_MAIL=your_email@gmail.com
SMPT_PASSWORD=your_app_password

# CORS
FRONTEND_URL=http://localhost:3000
```

</details>

<details>
<summary><b>Frontend</b> — <code>frontend/.env</code></summary>

```env
REACT_APP_API_URL=http://localhost:8000/api/v2
REACT_APP_BACKEND_URL=http://localhost:8000
GENERATE_SOURCEMAP=false
```

</details>

<details>
<summary><b>Socket Server</b> — <code>socket/.env</code></summary>

```env
PORT=4000
FRONTEND_URL=http://localhost:3000
```

</details>

### ▶️ Run the Application

You need **three terminals** running simultaneously:

```bash
# Terminal 1 — Backend API (port 8000)
cd backend && npm run dev

# Terminal 2 — React Frontend (port 3000)
cd frontend && npm start

# Terminal 3 — Socket.IO Server (port 4000)
cd socket && npm start
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🧠 Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Multi-vendor architecture** | Enables a marketplace model where sellers independently manage their shops, products, and orders |
| **Separate JWT tokens for Users & Sellers** | Clean separation of authentication contexts — users and sellers have independent sessions |
| **Socket.IO for messaging** | True real-time experience for buyer–seller communication with presence tracking and read receipts |
| **Redux Toolkit over Context API** | Manages complex interconnected state across 7 slices (users, sellers, products, events, cart, wishlist, orders) |
| **Server-side Stripe PaymentIntents** | Card details never touch our server — PCI compliance handled by Stripe |
| **Cloudinary with base64 upload** | Eliminates the need for file upload middleware — images encoded on client and sent directly to Cloudinary via backend |
| **HTTP-only cookies over localStorage** | Protection against XSS attacks — tokens are inaccessible to JavaScript |
| **Production cookie config** | `SameSite=None` + `Secure=true` in production for cross-origin cookie support |
| **Tailwind CSS + Material UI** | Tailwind for rapid custom styling, MUI DataGrid for complex admin/seller data tables |
| **Centralized error middleware** | Single middleware handles all error types (CastError, DuplicateKey, JWT) with consistent responses |

---

## 🗂️ Product Categories

| Category | Icon |
|----------|------|
| Computers & Laptops | 💻 |
| SmartPhones | 📱 |
| Cameras | 📷 |
| Accessories | ⌚ |
| Clothes | 👕 |
| Shoes | 👟 |
| Gifts | 🎁 |
| Pet Care | 🐕 |
| Gaming | 🎮 |
| Music & Entertainment | 🎵 |
| Others | 📦 |

---

## 📊 Three-Service Architecture

| Service | Port | Technology | Purpose |
|---------|------|------------|---------|
| **Backend** | 8000 | Express.js | REST API, Auth, Payments, Database |
| **Frontend** | 3000 | React 18 | Single Page Application |
| **Socket** | 4000 | Socket.IO | Real-time messaging & presence |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/awesome-feature

# 3. Commit your changes (follow conventional commits)
git commit -m "feat: add awesome feature"

# 4. Push to the branch
git push origin feature/awesome-feature

# 5. Open a Pull Request
```

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🙋‍♂️ Author

**Vinay Babu SS**

- GitHub: [@VinayBabuSS22](https://github.com/VinayBabuSS22)

---

<div align="center">

### ⭐ Star this repository if you found it useful!

**Built with ❤️ using the MERN Stack**

<br />

[![Live Demo](https://img.shields.io/badge/🚀_Try_the_Live_Demo-blueviolet?style=for-the-badge)](https://happyshop-frontend.onrender.com/)

</div>
