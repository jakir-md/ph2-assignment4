# 📚 Minimal Library Management System

A fully client-side **Library Management System** built with **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**. This project demonstrates a clean, functional UI with proper REST API integration—enabling users to manage books and borrowing operations without authentication or payment flows.

---

## Live Demo

[Live Site](https://library-frontend-six-sigma.vercel.app/)

---

## Tech Stack

| Layer           | Technology                     |
|----------------|---------------------------------|
| Frontend       | React, TypeScript               |
| State Manager  | Redux Toolkit + RTK Query       |
| Styling        | Tailwind CSS                    |
| Backend        | Node.js, Express.js             |
| Database       | MongoDB, Mongoose               |

---

## Features

### Public Routes
All pages are accessible without login or authentication.

---

### 📘 Book Management

- **Book List Table**:
  - Columns: `Title`, `Author`, `Genre`, `ISBN`, `Copies`, `Availability`, `Actions`.
  - Actions:
    -  **Edit**: Updates book details via API.
    -  **Delete**: Confirmation modal before deletion.
    -  **Borrow**: Opens form to borrow book.
- **Business Logic**:
  - If `copies = 0`, mark the book as **unavailable**.

- **Add New Book**:
  - Form fields: `Title`, `Author`, `Genre`, `ISBN`, `Description`, `Copies`, `Available (optional)`.
  - After submission: redirect to book list and update UI.

---

### Borrow Book

- Opens from **“Borrow”** button in book list.
- Fields:
  - Quantity (max: available copies)
  - Due Date
- Validations:
  - Quantity cannot exceed available copies.
  - If copies reach 0 → Book becomes unavailable.
- On submit:
  - API call to borrow endpoint.
  - Redirect to **Borrow Summary** page.

---

### Borrow Summary

- Aggregated borrow data (via backend aggregation).
- Displays:
  - Book Title
  - ISBN
  - Total Quantity Borrowed

---

## API's

### RTK Query
- All API interactions are powered by **Redux Toolkit Query**.
- Queries and mutations are fully **type-safe** using TypeScript interfaces.