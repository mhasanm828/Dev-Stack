# 🧱 Dev Stack Builder

A modern web application that helps developers explore different technologies and build their own development stack.

Users can browse frontend, backend, database, language, styling, DevOps, and development tools, then add their preferred technologies to a personal stack.

---

## 🚀 Live Project

🔗 **Live Site:** https://devstack-by-hasan.netlify.app/

🔗 **GitHub Repository:**  https://github.com/mhasanm828/Dev-Stack

---

## ✨ Features

- 🔍 **Explore Technologies**  
  Browse different development technologies with their category, difficulty level, rating, description, and badge.

- 🧰 **Build Your Own Stack**  
  Add technologies to your personal stack and remove individual technologies whenever needed.

- 🔔 **Interactive Notifications**  
  React-Toastify is used to show notifications when technologies are added, removed, duplicated, or when the entire stack is cleared.

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Suspense
- React Hooks
- React-Toastify
- JSON
- Vite
- HTML5
- CSS3
- Git & GitHub



---

👨‍💻 Author

**Md Hasan Mahmud**

Built as a React assignment project.

---


## 📂 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   │
│   └── technology/
│       ├── Technology.tsx
│       ├── TechnologyCard.tsx
│       └── YourStack.tsx
│
├── types/
│   └── technologyType.ts
│
├── App.tsx
├── main.tsx
└── index.css
│
public/
└── data.json

```



---

**1. What is JSX, and why is it used in React?**
JSX stands for JavaScript XML. It lets you write HTML code directly inside your JavaScript file. It is used because it makes building UI components much faster, cleaner, and easier to read.

**2. What is the difference between props and state?**

* **Props:** Short for "properties." Data sent down from a parent component to a child component. Read-only (the child cannot change them).
* **State:** Data stored and managed inside a single component that can change over time (like when a user clicks a button).

**3. What does the useState hook do, and where did you use it in this project?**
`useState` tells React to keep track of a variable that can change. When that variable updates, React automatically updates the screen. In this project, it is used to keep track of which technologies the user has selected.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs code outside the normal rendering process, like fetching data from an API or setting up a timer. Instead of fetching data inside `useEffect`, React's new `use()` hook combined with `Suspense` was used to load and wait for the local JSON file.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the `key` to track every item in a list individually. If items get reordered, added, or deleted, the key helps React figure out exactly what changed so it only updates those specific items on the screen.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing or hiding UI elements based on a true/false condition (like using an `if` statement). In `YourStack`, if the selected list is empty, a simple message like "No technologies selected yet" is shown instead of an empty list.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

* **Parent to Child:** Pass data down using attributes on the component (props).
* **Child to Parent:** Pass a function down from the parent as a prop. The child calls that function and passes data into it as an argument.

---


