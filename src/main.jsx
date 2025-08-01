import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// import ReactDOM from "react-dom/client";

// import App from "./App.jsx";
// import "./index.css";

// const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);