# Matrix Value Generation UI

## Overview

The Matrix Value Generation UI is a responsive React application built to showcase a modern corporate landing page for Matrix Industries. The application demonstrates a clean component-based architecture, responsive design, and integration with a backend Contact API.

---

## Tech Stack

* React version 19
* Vite
* Tailwind CSS version 4
* Axios
* React Icons
* Node version 24

---

## Project Structure

```
src
│
├── assets
│   ├── matrix.jpg
│   └── matrix.ico
│
├── components
│   ├── Header
│   ├── Hero
│   ├── services
│   ├── testimonials
│   └── valueFramework
│
├── services
│   └── apiService.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Features

* Responsive Header
* Hero Banner
* Services Section
* Contact Form
* Responsive Layout
* API Integration using Axios
* Tailwind CSS Styling

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to project

```bash
cd matrixvalue
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

---

## Build Project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## API Configuration

The Contact Form communicates with the backend API.

Example Endpoint

```
POST http://localhost:5000/api/contact
```

Axios configuration is available inside

```
src/services/apiService.js
```

---

## Components

### Header

* Navigation Menu
* Responsive Layout

### Hero

* Landing Banner
* Call To Action

### Services

* Service Cards
* Contact Form
* API Integration

---

## Future Enhancements

* Framer Motion Animations
* Dark Mode
* SEO Optimization
* Unit Testing
* Form Validation Improvements

---

## Author

Developed by Deepak Kiriti
