# 🛍️ Alterforge E-Commerce Platform

**Alterforge** is a full-stack, modular eCommerce web application currently built as a **monolithic architecture**, with a clear roadmap to evolve into **microservices**.

The main goal of this project is to **demonstrate a practical transformation from a monolithic structure to a microservice-based system** — focusing on scalability, maintainability, and real-world architecture transition.

---

## 🧩 Project Status

🚧 **Work in Progress**

* Core **eCommerce features** (products, categories, cart, checkout, orders) are under active development.
* **APIs are currently being implemented.**
* **Elasticsearch integration** will be introduced **later** as part of the microservice migration phase.

---

## 🧠 Project Vision

### Phase 1 — Monolithic Foundation (Current)

* Unified codebase combining backend (Node.js/Express), frontend (Angular), and database (MySQL).
* Basic eCommerce operations like:

  * Product catalog management
  * Cart & checkout
  * Authentication
  * Order creation

This phase focuses on **completing all core business logic and APIs** in a single service.

---

### Phase 2 — Transition to Microservices (Planned)

Once the base application is stable, it will be **split into microservices** to improve scalability and fault isolation.

The **Elasticsearch-based search system** will be introduced **as a separate service** to offload search indexing and queries from the main application.

#### Planned Microservices

| Service           | Responsibility                                    |
| ----------------- | ------------------------------------------------- |
| `auth-service`    | User login, registration, JWT authentication      |
| `product-service` | Product, category, and brand management           |
| `order-service`   | Cart, checkout, and order lifecycle               |
| `search-service`  | Elasticsearch-based full-text search and indexing |
| `gateway-service` | Acts as an API gateway / request router           |

Each service will be containerized with its own database (or schema) and will communicate via REST or message queue (RabbitMQ / Redis pub-sub).

---

## 🧱 Current Architecture (Monolithic)

```
          ┌─────────────────────────────┐
          │         Angular UI          │
          └─────────────┬───────────────┘
                        │
              REST API (Express)
                        │
     ┌──────────────────┼──────────────────┐
     │ MySQL (Data)     │ Future: Elastic  │
     │ Sequelize ORM     │ Search Service  │
     └──────────────────┴──────────────────┘
```

---

## 🧩 Planned Microservice Architecture

```
                        ┌──────────────┐
       │ API Gateway  │                │
       └──────┬───────┘                │
              │                        │
   ┌──────────┼──────────┐─────────────────┐
   │ Product  │  Order   │  Auth  │ Search │
   │ Service  │  Service │ Service│ Service│
   └──────────┴──────────┴────────┴────────┘
        │ DB        │ DB       │ DB       │ ES

```

---

## 🧰 Tech Stack

| Layer                    | Technology                                   |
| ------------------------ | -------------------------------------------- |
| **Frontend**             | Angular 17 + Bootstrap 5                     |
| **Backend**              | Node.js (Express) + Sequelize ORM            |
| **Database**             | MySQL                                        |
| **Authentication**       | JWT (JSON Web Tokens)                        |
| **Search Engine**        | *(Planned)* Elasticsearch                    |
| **Containerization**     | Docker + Docker Compose                      |
| **Future Message Queue** | RabbitMQ / Redis (for service communication) |
| **Deployment Target**    | AWS ECS / EC2 / Lambda                       |
| **Validation**           | Joi                                          |
| **Logging**              | Morgan + Winston                             |

---

## 🏗️ Folder Structure

```
services/
└── core/
    ├── config/            # DB, environment, and app configuration
    ├── migrations/        # Sequelize migrations
    ├── models/            # Data models
    ├── seeders/           # Initial data
    ├── src/
    │   ├── modules/       # Feature-based modules (user, product, order)
    │   ├── middlewares/   # Auth, validation, error handlers
    │   ├── loaders/       # Express + DB initialization
    │   ├── utils/         # Logger, response helpers, constants
    │   ├── app.js         # Express setup
    │   └── index.js       # Entry point
frontend/
└── ecommerce-ui/          # Angular (Bootstrap UI)
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/alterforge.git
cd alterforge
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd services/core
npm install
```

#### Frontend

```bash
cd ../../frontend/ecommerce-ui
npm install
```

### 3️⃣ Create `.env`

In `services/core/.env`:

```
PORT=5079
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=alterforge
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run Development Environment

```bash
# Backend
cd services/core
npm run dev

# Frontend
cd ../../frontend/ecommerce-ui
npm start
```

### 5️⃣ (Optional) Run with Docker

```bash
docker-compose up
```

---

## 🧠 Future Elasticsearch Integration

Once the base eCommerce app is complete:

* A new `search-service` will be created.
* Product data will be indexed asynchronously.
* API Gateway will route `/search` requests to the `search-service`.
* This ensures search load doesn’t affect transactional performance.

---

## 📍 Example Workflow (Current vs Future)

| Step            | Monolith                    | Future (Microservice)                 |
| --------------- | --------------------------- | ------------------------------------- |
| Add to cart     | API handled in same backend | Handled by `order-service`            |
| Search products | Temporary DB query          | Elasticsearch in `search-service`     |
| Authentication  | Single JWT service          | Separate `auth-service`               |
| Scaling         | Scale one container         | Scale specific service (e.g., search) |

---

## 🧾 Project Goals

* ✅ Build a functional monolithic eCommerce app
* 🧩 Split into independent microservices
* 🔍 Integrate Elasticsearch as a standalone search engine
* ⚙️ Showcase CI/CD and containerized deployment
* 📚 Document the entire transition process (monolith → microservices)

---

## 👨‍💻 Author

**Yash Talegaonkar**
Full Stack Developer | MEAN / MERN | AWS | Docker | Elasticsearch
[LinkedIn](https://linkedin.com/in/yash-talegaonkar) · [GitHub](https://github.com/yourusername)

---

## 🧾 License

MIT License © 2025 Yash Talegaonkar

---

### ✅ TL;DR Summary

| Stage     | Description                                              |
| --------- | -------------------------------------------------------- |
| **Now**   | Building complete monolithic eCommerce app               |
| **Next**  | Split into modular microservices                         |
| **Later** | Add Elasticsearch as independent `search-service`        |
| **Goal**  | Demonstrate real-world monolith → microservice evolution |

