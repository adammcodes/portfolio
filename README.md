# Project Name

## Overview

This project has been modernized with the following technology migrations:

- Migrated from Create React App to Vite with React plugin for faster build times and a more efficient development experience
- Transitioned from Sass to modern CSS with Tailwind CSS for utility-first styling
- Converted from JavaScript to TypeScript for improved type safety and developer experience

## Technology Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Modern CSS Custom Properties
- **Language**: TypeScript
- **Node Version**: v20.x

## Development Requirements

- Node.js v20 or higher
- npm or yarn

## Getting Started

1. Clone the repository

   ```bash
   git clone [repository-url]
   cd [project-directory]
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
# or
yarn build
```

This will generate optimized assets in the `dist` directory.

## Deployment

The project is configured for deployment on Netlify. The build command `npm run build` should be used for production deployments.

## Project Structure

```
project-root/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── styles/         # Global CSS and Tailwind utilities
│   ├── images/         # Image assets
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Additional Information

- CSS custom properties are used for theming and can be found in `src/styles/index.css`
