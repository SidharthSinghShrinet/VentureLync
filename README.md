🚀 VentureLync Dashboard

A modern and responsive User Dashboard built using React.js and Tailwind CSS, showcasing efficient state management, real-time search filtering, and clean UI practices.

This project demonstrates your understanding of React fundamentals, optimized rendering, and frontend best practices — ideal for portfolio and internship submissions.

🌟 Features

✅ Dynamic User Data Fetching

Fetches user information from the public API jsonplaceholder.typicode.com
.

Displays each user’s Name, Email, Company, and Website in a structured card layout.

✅ Real-Time Search Functionality

Search users by name or email instantly.

Automatically resets the list when the search input is cleared (Ctrl + A + Backspace edge case handled).

✅ Optimized Rendering

Conditional checks prevent unnecessary state updates and re-renders.

Clean use of useEffect() dependencies for predictable state flow.

✅ Responsive UI with Tailwind CSS

Fully responsive layout optimized for both desktop and mobile views.

Soft shadows, rounded corners, and clean typography ensure a modern dashboard feel.

✅ Error & Loading Handling (Optional)

Graceful error logging for API calls.

Extendable loading indicator for better user experience.

🛠️ Tech Stack
Technology	Purpose
React.js (Vite)	Frontend framework for building fast, modular UI components
Tailwind CSS	Utility-first CSS framework for styling
JavaScript (ES6+)	Logic and interactivity
Fetch API	To retrieve JSON data
JSONPlaceholder API	Mock API for user data
📂 Folder Structure
VentureLync/
├── src/
│   ├── assets/               # (Optional) Static assets
│   ├── components/
│   │   └── Navbar.jsx        # Navigation component
│   ├── Pages/
│   │   └── Dashboard.jsx     # Main user dashboard logic
│   ├── App.jsx               # Entry point for routes
│   ├── index.css             # Global styles
│   └── main.jsx              # React DOM rendering
├── package.json
├── vite.config.js
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/VentureLync.git

2️⃣ Navigate to the project folder
cd VentureLync

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev


Then open your browser and visit 👉 http://localhost:5173

🎯 Evaluation Criteria
Criteria	Description
Code Quality & Organization	Clean, modular, and reusable components with efficient logic
UI/UX Design & Responsiveness	Mobile-friendly, accessible, and visually balanced
Functionality & Creativity	Real-time filtering, clear state handling, smooth performance
Modern Frontend Practices	Hooks (useState, useEffect), optimized re-renders, fetch usage
📸 Preview

💡 Future Enhancements

🔍 Add debounce for smoother search typing

⏳ Integrate a loading spinner for fetch state

🧭 Add routing for user detail pages

🌐 Replace mock API with live backend (Node.js / MongoDB)

👨‍💻 Author

Developed by: Sidharth Singh
Role: Frontend Developer (VentureLync)
Tech Interests: MERN Stack | Web Performance | UI/UX Engineering
