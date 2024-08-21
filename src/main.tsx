// import { NextUIProvider } from "@nextui-org/react"

// import React from "react"
// import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client"

import "react-toastify/dist/ReactToastify.css"
import "react-tooltip/dist/react-tooltip.css"

// import App from "./App"
import "./main.css"
import "./main.scss"
import CategoryButtons from "./components/CategoryButtons";
import Header from "./components/Header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "*",
//     element: <Navigate to="/" />,
//   },
// ])

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <NextUIProvider>
//       <RouterProvider router={router} />
//     </NextUIProvider>
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/:category/:searchQuery" element={<CategoryButtons />} />
      <Route path="/:category" element={<CategoryButtons />} />
      <Route path="/" element={<CategoryButtons />} />
    </Routes>
  </Router>
);
