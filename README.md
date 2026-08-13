# CV Project

A dynamic resume builder built with React and Vite. This application allows users to enter their personal information, education, work experience, and skills, and instantly preview the changes in a professional CV layout.


## Features

- Two-panel layout with form inputs on the left and live CV preview on the right
- Personal information section for name, email, phone, location, LinkedIn, and GitHub
- Education entries with add/remove functionality
- Work experience entries with add/remove functionality
- Skill tag management with add/remove actions
- Real-time CV preview as users type
- Edit/Preview mode toggle
- Clear All option to reset the form
- Load Example option to fill sample data
- Download CV/print support for exporting the resume
- Responsive and professional visual styling

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

- `src/App.jsx` — main app state and form logic
- `src/components/FormPanel` — form inputs and entry management
- `src/components/CVPreview` — CV preview components
- `src/data/simpleData.js` — sample CV data
- `src/App.css` — styling for the app and CV layout


### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in the browser.

## Deployment

This project is deployed on Vercel:

- https://cv-project-murex.vercel.app/

