/**
 * Main Entry Point for Shramik Web Application
 *
 * This file serves as the root of our React application. It:
 * - Imports necessary React functions for rendering
 * - Imports global CSS styles
 * - Imports the main App component
 * - Renders the App component into the DOM using React 18's createRoot API
 * - Wraps the app in StrictMode for development warnings and checks
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create root element and render the App component
// This is the modern React 18 way of mounting the app to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
