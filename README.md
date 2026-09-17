# 🧱 Dev Stack Builder

A modern and responsive web application that helps developers explore different technologies and build their own development stack.

Users can browse frontend, backend, database, language, styling, DevOps, and development tools, then add their preferred technologies to a personal stack.

---

## 🚀 Live Project

🔗 **Live Site:** [Add your live site link here]

🔗 **GitHub Repository:** [Add your GitHub repository link here]

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
