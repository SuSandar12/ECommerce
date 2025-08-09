import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';

// Get the root element
const container = document.getElementById('root');

// Create the root
const root = createRoot(container);

// Render the app
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
