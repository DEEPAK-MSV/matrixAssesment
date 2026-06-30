# Matrix Value Generation Assessment

This repository contains the solution for the **Website Developer Assessment**. The project is divided into two independent applications:

* **Client** – React + Vite frontend application
* **Server** – Express.js REST API

The application demonstrates a responsive landing page for **Matrix Industries** with backend integration for handling contact form submissions.

---

## Repository Structure

```text
matrix-assessment/
│
├── matrixValueUI/        # React + Vite Frontend
│
├── matrixAPI/        # Express Backend API
│
└── README.md
```

---

## Features

### Frontend

* Responsive Header
* Hero Banner
* Services Section
* Value Generation Framework
* Client Testimonials
* Contact Form
* Responsive Design
* API Integration using Axios

### Backend

* REST API
* Layered Architecture
* Controller → Service → Repository Pattern
* Request Validation
* Error Handling
* Rate Limiting
* Contact Submission Storage (JSON File)

---

## Technology Stack

### Frontend

* React 19
* Vite
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* Express Validator
* Express Rate Limit
* CORS

---

# Getting Started

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Install Frontend

```bash
cd client

npm install
```

Run

```bash
npm run dev
```

Frontend URL

```text
http://localhost:5173
```

---

## 3. Install Backend

```bash
cd server

npm install
```

Run

```bash
npm run dev
```

Backend URL

```text
http://localhost:5000
```

---

## Project Documentation

Each application contains its own documentation.

* `matrixValueUI/README.md` – Frontend setup and project details
* `matrixAPI/README.md` – Backend setup, API documentation, and architecture

---

## Contact API

```http
POST /api/contact
```

Stores submitted contact details through the backend.

---

## Notes

* The frontend and backend are developed as separate applications for better maintainability.
* Contact form submissions are stored in a local JSON file for demonstration purposes.
* The application is fully responsive and designed following a component-based architecture.

---

## Author

**Deepak Kiriti**

Website Developer Assessment Submission
