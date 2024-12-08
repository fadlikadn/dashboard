# Patient Dashboard

This project is a Patient Dashboard application built with React, TypeScript, and Vite. It includes various features such as user authentication, patient management, and real-time updates using WebSockets.

## Features

- **User Authentication**: Secure login functionality using `react-hook-form` and `@tanstack/react-query`.
- **Patient Management**: View and manage patient details, diagnoses, medications, allergies, and appointments.
- **Real-Time Updates**: Real-time updates for appointments using WebSockets.
- **State Management**: State management using React Context and `@tanstack/react-query`.
- **Form Handling**: Form handling with `react-hook-form`.
- **Routing**: Client-side routing with `react-router`.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **@tanstack/react-query**: Powerful data-fetching and state management for React.
- **react-hook-form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **WebSockets**: Real-time communication for live updates.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/patient-dashboard.git
   cd patient-dashboard
    ```
2. Install the dependencies:
   ```bash
   npm install
   ```
### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and visit `http://localhost:5173` to view the application.

### Building the Application
1. Build the application for production:
   ```bash
   npm run build
   ```
2. Preview the production build:
   ```bash
   npm run preview
   ```
3. Preview the production build:
  ```bash
  npm run preview
  ```

### Linting and Formatting
- Run ESLint to lint your code:
  ```bash
  npm run lint
  ```

### Project Structure
```
├── src
│   ├── components
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── ...
│   │   ├── PatientDashboard.tsx
│   │   ├── PatientDetail.tsx
│   │   ├── PatientList.tsx
│   │   └── ...
│   ├── lib
│   │   ├── api
│   │   │   ├── patient-api.ts
│   │   │   └── ...
│   │   ├── useAuth.ts
│   │   └── ...
│   ├── providers
│   │   ├── AuthContext.tsx
│   │   ├── PatientContext.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
└── ...
```

### API Endpoints
Authentication:
- `POST /api/auth/login`: Login with email and password.
- `POST /api/auth/logout`: Logout the current user.

Patients:
- `GET /api/patients`: Fetch all patients.
- `GET /api/patients/:id`: Fetch a patient by ID.
- `GET /api/patients/:id/diagnoses`: Fetch recent diagnoses for a patient.
- `GET /api/patients/:id/medications`: Fetch current medications for a patient.
- `GET /api/patients/:id/allergies`: Fetch known allergies for a patient.
- `GET /api/patients/:id/appointments`: Fetch upcoming appointments for a patient.

# Simulate trigger websocket using CURL
- Run the following command to simulate a WebSocket trigger. Make sure the server is running.
  ```bash
  curl -X POST http://localhost:3001/broadcast
  ```

### TODO
- Implement unit & integration test
- Add miragejs for mocking data
- Add more features to the dashboard
- Add more API endpoints

### References:
- https://ui.shadcn.com/blocks
- https://www.figma.com/community/file/1294259723229617122/doctor-patient-dashboard
- https://www.figma.com/community/file/1171394209400750256/medical-dashboard
