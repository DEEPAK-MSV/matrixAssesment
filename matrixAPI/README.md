# Matrix Value Generation Backend

## Overview

The backend is a RESTful API built using Express.js. It follows a layered architecture consisting of Controllers, Services, Repositories, Validators, and Middleware.

Instead of using a database, contact submissions are stored in a JSON file, making the project simple to run without external dependencies.

---

## Tech Stack

* Node.js
* Express.js
* Express Validator
* Express Rate Limit
* CORS
* Dotenv

---

## Project Structure

```
src
│
├── controllers
│
├── data
│   └── contacts.json
│
├── middleware
│
├── models
│
├── repositories
│
├── routes
│
├── services
│
├── utils
│
├── validators
│
├── app.js
└── server.js
```

Root Files

```
package.json
.env
```

---

## Architecture

```
Request

↓

Route

↓

Validation

↓

Controller

↓

Service

↓

Repository

↓

contacts.json

↓

Response
```

---

## Installation

Clone repository

```bash
git clone <repository-url>
```

Navigate to backend

```bash
cd matrix-backend
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example

```env
PORT=5000
```

---

## Run Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server URL

```
http://localhost:5000
```

---

## API Endpoints

### Save Contact

```
POST /api/contact
```

Sample Request

```json
{
  "name": "Deepak",
  "email": "deepak@gmail.com",
  "company": "Zestiot Technologies",
  "phone": "+91 9876543210",
  "service": "Facilities Management",
  "message": "Need Consultation"
}
```

Sample Response

```json
{
  "success": true,
  "message": "Contact Saved Successfully",
  "data": {
    "id": 1751390900,
    "name": "Deepak",
    "email": "deepak@gmail.com"
  }
}
```

### Get All Contacts

```
GET /api/contact
```

Returns all submitted contact records stored in `contacts.json`.

---

## Features

* RESTful API
* Layered Architecture
* Request Validation
* Error Handling Middleware
* Rate Limiting
* JSON File Storage
* Modular Code Structure

---

## Folder Responsibilities

### Controllers

Handles HTTP request and response.

### Services

Contains business logic.

### Repositories

Reads and writes contact data to `contacts.json`.

### Validators

Validates incoming request data.

### Middleware

Handles validation, rate limiting, and centralized error handling.

### Data

Stores submitted contact information.

---

## Future Enhancements

* MongoDB Integration
* Authentication
* Email Notifications
* Swagger API Documentation
* Docker Support
* Unit Testing

---

## Author

Developed by Deepak Kiriti
