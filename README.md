# TaskMaster - Frontend

This repository contains the frontend code for the TaskMaster application, a modern, responsive web-based task management application developed with React and Tailwind CSS.

[See Live Demo](https://task-management-frontend-pied-nu.vercel.app/)

## ✨ About The Project

This frontend application provides a dynamic and user-friendly interface for managing tasks. The frontend application interacts with a distinct backend API to fulfill the CRUD (Create, Read, Update, Delete) functionality; and delivers the user experience as a single-page application (SPA).

### Main Features:

*   **Responsive:** Beautifully crafted, mobile-first design that works on all devices; desktop, tablet, mobile.
*   **Interactive Data Table:** 
    *   **Client-Side Sorting:** Sort data by clicking on table headers, like `Task` and `Due Date`.
    *   **Client-Side Filtering:** Filter the task list using dropdowns on `Status` and `Priority` headers.
*   **Search Field:** Search for tasks in real-time, simply by typing into the search bar.
*   **Global State:** Global state is provided and managed by React's Context API and the `useReducer` hook for efficient, predictable state management.
*   **Modern Boilerplate:** Built with Vite, a new build tool that helps speed-up development.
*   **Component-based Design:** The application follows a component-and-page based approach to enable reuse, maintenance, and logical organization.

## 🛠️ Tech Stack

*   **Framework:** [React](https://reactjs.org/) (v18+)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **State Management:** React Context API with `useReducer`
*   **API Client:** [Axios](https://axios-http.com/) for making HTTP requests to the backend.
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (specifically Font Awesome).

---

## 🚀 Getting Started

Follow these steps to set up and run the frontend project on your local machine.

### Prerequisites

*   Node.js (v16 or newer recommended)
*   npm (or yarn / pnpm)
*   Git

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/KottaiRaja/Task_Management_Frontend.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Task_Management_Frontend
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Important: Ensure the Backend is Running**
    This frontend application requires the backend server to be running to function correctly. Please ensure the [Task_Management_Backend](https://github.com/KottaiRaja/Task_Management_Backend) is running on `http://localhost:5000`.

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KottaiRaja/Task_Management_Frontend/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

Kottai Raja - (kottairaja1220@gmail.com)

Project Link: (https://github.com/KottaiRaja/Task_Management_Frontend)
