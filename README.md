# 🧪 Experiment 4 – Advanced React E‑Commerce Application

## 📌 Brief Description (Experiment 4)

This experiment is an extension of **Experiment 3**, where the existing React e‑commerce application is enhanced using advanced React hooks such as **useContext**, **useReducer**, and **useMemo**. The project also introduces a new page using **React Router**, animated page transitions, chart‑based analytics, and a modern animated background to improve performance, scalability, and user experience.

---

## 🛒 Project Title

**Advanced E‑Commerce SPA using React (Context API, Reducer & Performance Optimization)**

---

## 🎯 Objective of the Experiment

The main objectives of this experiment are:

* To understand and implement **global state management** using Context API
* To manage complex state transitions using **useReducer**
* To optimize derived computations using **useMemo**
* To extend a multi‑page React SPA using **React Router**
* To enhance UI/UX with animations, charts, and modern design patterns

---

## 📖 Project Overview

This project is a **multi‑page e‑commerce Single Page Application (SPA)** built using **React** and **React Bootstrap**. It simulates a real‑world shopping platform with pages such as Home, Products, Cart, and Analytics.

The application uses **Context API combined with useReducer** for managing global cart and theme state, **useMemo** for performance‑optimized calculations, animated page transitions for smooth navigation, and **chart‑based analytics** to visualize cart data.

A modern animated RGB background with floating shapes is implemented using pure CSS to enhance the visual appeal without affecting application logic.

---

## ✨ Key Features

* Multi‑page SPA using **React Router DOM**
* Global state management using **Context API**
* Structured state updates using **useReducer**
* Performance optimization using **useMemo**
* Cart management (Add / Remove / Clear items)
* Analytics dashboard with **Chart.js**
* Animated page transitions
* Animated RGB background (pure CSS)
* Modern glassmorphism UI design
* Responsive design (mobile + desktop)

---

## 🧩 React Hooks Used

| Hook       | Purpose                                         |
| ---------- | ----------------------------------------------- |
| useContext | Access global application state                 |
| useReducer | Manage complex cart and theme logic             |
| useMemo    | Optimize total price and analytics calculations |

---

## 🗂️ Project Structure

```
src/
│
├── components/
│   ├── AppNavbar.jsx
│   ├── AppFooter.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   └── Analytics.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Technologies Used

* **React**
* **React Bootstrap**
* **React Router DOM**
* **Chart.js & react‑chartjs‑2**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

The application will run locally on `http://localhost:5173/`.

---

## 📊 Analytics Page

The Analytics page demonstrates:

* useContext to access global cart data
* useMemo to optimize derived values
* Chart.js for visual data representation
* Conditional rendering based on cart state

---

## 🎨 UI & UX Enhancements

* Animated RGB background with floating shapes
* Smooth page transitions
* Glassmorphism card design
* Gradient buttons and hover effects
* Sticky navigation bar

---

## 📚 Academic Context

This project was developed as part of **Experiment 4** in the *Full Stack Web Development / Full Stack – II* course. It strictly follows the experiment guidelines provided by the faculty and demonstrates the practical use of advanced React concepts.

---

## 🎓 Learning Outcomes

* Practical understanding of global state management
* Experience with reducer‑based state logic
* Performance optimization techniques in React
* Building scalable and maintainable SPAs
* Integrating animations and data visualization

---

## 👤 Author

**Mohammad Mehfooz**
B.E. Computer Science & Engineering

---

## 📄 License

This project is created for **educational purposes only**.
