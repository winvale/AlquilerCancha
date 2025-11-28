# AI Prompt for Understanding and Deploying AlquilerCancha Project

## Project Overview
This is the "AlquilerCancha" project, a web application for managing court rentals. It consists of two main parts:

- **Backend (Server)**: A Node.js Express server that provides REST API endpoints for managing courts (canchas) and reservations (reservas). It uses in-memory data storage and runs on port 3001.
- **Frontend (Client)**: An Angular application that provides the user interface for viewing courts, making reservations, and managing the system. It runs on port 4200 by default.

The backend includes endpoints for:
- GET /api/canchas: Retrieve all courts
- GET /api/reservas: Retrieve all reservations with court details
- POST /api/reservas: Create a new reservation

The frontend has components for:
- Court list (cancha-list)
- Reservation form (reserva-form)
- Reservation list (reserva-list)
- Navigation and header

## Prerequisites
- Node.js installed (version 18 or higher recommended)
- npm (comes with Node.js)

## Deployment Instructions for Local Development

To deploy this project locally, follow these steps in sequence:

1. **Install backend dependencies**:
   ```
   cd server && npm install
   ```

2. **Start the backend server**:
   ```
   cd server && npm start
   ```
   The server will run on http://localhost:3001

3. **Install frontend dependencies** (in a new terminal):
   ```
   cd client && npm install
   ```

4. **Start the frontend application**:
   ```
   cd client && npm start
   ```
   The application will be available at http://localhost:4200

## Notes
- Both the server and client need to be running simultaneously for the full application to work.
- The backend uses in-memory storage, so data will be lost when the server restarts.
- The frontend communicates with the backend via HTTP requests to localhost:3001.

Once deployed, you can access the application in your browser at http://localhost:4200 to manage court rentals.