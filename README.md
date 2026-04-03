1. High-Level Overview
This is a modern frontend web application built using:
* React (JSX) → UI & components
* Vite → fast build tool
* Tailwind CSS → styling
* JavaScript (ES6+) → core logic
* HTML + CSS → base structure
👉 It’s essentially a single-page application (SPA) for a luxury travel / expedition platform (“Solvara”).

📁 2. File Structure (Simplified)
solvara-main/
│
├── public/                # Static assets (images, videos, icons)
│
├── src/                   # Main application code
│   ├── components/        # Reusable UI components
│   │   ├── layout/        # Navbar, Footer
│   │   ├── ui/            # Buttons, Cards
│   │
│   ├── pages/             # Page-level components (routes)
│   │   ├── Home.jsx
│   │   ├── Expeditions.jsx
│   │   ├── ExpeditionDetail.jsx
│   │   ├── Booking.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Contact.jsx
│   │   └── Confirmation.jsx
│   │
│   ├── data/              # Mock/static data
│   │   └── mockData.js
│   │
│   ├── App.jsx            # Main app layout + routing
│   ├── main.jsx           # Entry point (React root)
│   ├── App.css / index.css
│
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind setup
├── vite.config.js         # Vite config
├── index.html             # Root HTML

🔄 3. Application Flow (Very Important)
🚀 Entry Point
index.html → main.jsx → App.jsx
Step-by-step flow:
1. index.html
	• Root <div id="root">
	• Loads the React app
2. main.jsx
	• Initializes React
	• Mounts <App /> to DOM
3. App.jsx
	• Core controller of your app
	• Handles: 
		• Routing (pages)
		• Layout (Navbar + Footer)
		• Page switching

🧭 Page Navigation Flow
Navbar → Routes → Pages
Example:
* Home → /
* Expeditions → /expeditions
* Booking → /booking
* Dashboard → /dashboard

🧩 Component Flow
Pages → Components → UI Elements
Example:
Expeditions.jsx
   ↓
ExpeditionCard.jsx
   ↓
Button.jsx
👉 Pages use reusable components → components use UI primitives.

🧠 4. Code Architecture (How It’s Designed)
1. Component-Based Architecture
* Everything is modular
* Reusable UI (Button, Card, Navbar)
2. Separation of Concerns
* pages/ → screens
* components/ → reusable parts
* data/ → static/mock backend
3. Data Flow
* Static data from:
* Passed as props to components

🎨 5. Styling System
* Uses Tailwind CSS
* Config:
* Utility-based styling:

🌐 6. Assets Handling
public/
Contains:
* Images (expeditions, jets)
* Videos (hero section)
* Icons
👉 These are directly used in UI components.

⚙️ 7. Build & Deployment
* Vite → fast dev + build
* Vercel config present → ready for deployment

🧾 8. Tech Stack Summary
Layer	Technology
Frontend	React (JSX)
Styling	Tailwind CSS
Build Tool	Vite
Language	JavaScript (ES6)
Assets	HTML/CSS + Media
Deployment	Vercel

🧭 9. One-Line Understanding
👉 This is a React + Vite + Tailwind SPA where:
* App.jsx controls flow
* pages/ define screens
* components/ build UI
* mockData.js simulates backend
<div className="bg-black text-white p-4 rounded-xl">
tailwind.config.js
src/data/mockData.jsa production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
