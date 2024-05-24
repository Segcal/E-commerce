import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import { Router } from "./routes";


export default function App() {
  const router = createBrowserRouter(Router);
  return <RouterProvider router={router} />;
}
