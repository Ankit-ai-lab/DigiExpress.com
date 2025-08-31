# Digiexpres Tech Solution - React Conversion

This project is a modern React.js conversion of the original Digiexpres Tech Solution website, which was previously built with PHP, JavaScript, HTML, and CSS.

## Tech Stack

- **Frontend Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first responsive design
- **Routing**: React Router for navigation
- **Icons**: Heroicons (via SVG elements)

## Project Structure
src/
├── components/ # Reusable UI components
│ ├── Header.jsx # Navigation header with mobile menu
│ ├── Hero.jsx # Hero section with call-to-action
│ ├── Services.jsx # Services showcase
│ ├── Contact.jsx # Contact form
│ └── Footer.jsx # Site footer
├── pages/ # Page-level components
│ └── Home.jsx # Homepage that composes all sections
├── App.jsx # Main app component with routing
├── main.jsx # React DOM entry point
└── index.css # Global styles with Tailwind imports

text

## How to Run Locally

1. **Clone the repository** (or extract the provided files)
2. **Install dependencies**:
   ```bash
   npm install
Start the development server:

bash
npm run dev
Open your browser and navigate to http://localhost:3000

How to Build for Production
Create an optimized production build:

bash
npm run build
Preview the production build (optional):

bash
npm run preview
The built files will be in the dist/ directory, ready for deployment.

Responsiveness & Styling
This implementation uses a mobile-first approach with Tailwind CSS:

Fully responsive across all screen sizes (mobile, tablet, desktop)

Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:)

Custom color palette defined in tailwind.config.js

Reusable component classes in index.css

Modern, clean design with appropriate spacing and typography

Developer Notes
Form Handling: The contact form includes basic state management but does not currently submit to a backend. In a real application, you would connect this to your API.

Navigation: The single-page navigation uses hash links for section scrolling.

Icons: SVG icons are used directly in components. For a larger project, consider creating an icon component library.

Images: The logo is referenced from the public directory. Make sure to place your digiexpres_logo.png file in the public folder.

Future Improvements
Backend Integration: Connect the contact form to a real API endpoint

Additional Pages: Create separate pages for Services, About, etc. using React Router

State Management: Implement React Context or Redux for more complex state needs

Animation: Add subtle animations with Framer Motion or similar library

Testing: Add unit and integration tests with Jest and React Testing Library

Internationalization: Add support for multiple languages if needed

Performance Optimization: Implement code splitting and lazy loading for larger applications

text

## Setup Instructions

1. Extract all files to a project folder
2. Make sure you have Node.js installed (version 16 or higher)
3. Run `npm install` to install dependencies
4. Place your `digiexpres_logo.png` file in the `public/` directory
5. Run `npm run dev` to start the development server
6. Open your browser to `http://localhost:3000`

The application is now fully converted to React with a modern, responsive design using Tailwind CSS. All components are functional with hooks, and the code is organized in a clean, maintainable structure.