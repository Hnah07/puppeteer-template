# Puppeteer Testing Project

This is a personal testing ground for experimenting with Puppeteer, a Node.js library that provides a high-level API to control Chrome/Chromium over the DevTools Protocol. This project is built on a Node.js + Express + TypeScript template that I can reuse for future projects.

## What is Puppeteer?

Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It's great for:

- Generating screenshots and PDFs of pages
- Crawling Single-Page Applications (SPAs)
- Automating form submissions, UI testing, keyboard input, etc.
- Creating an up-to-date, automated testing environment

## Project Structure

```
├── src
│   ├── controllers
│   │   └── exampleController.ts
│   ├── middleware
│   │   └── exampleMiddleware.ts
│   ├── models
│   │   └── exampleModel.ts
│   ├── routes
│   │   └── exampleRoutes.ts
│   └── server.ts    // Main entry point of the application
├── dist             // Compiled output (auto-generated)
├── package.json     // Project dependencies and scripts
├──.gitignore        // Ignore files to github
├── tsconfig.json    // TypeScript configuration
└── README.md        // Project documentation
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server with hot-reloading:

```bash
npm run dev
```

### Building for Production

Compile TypeScript files to JavaScript:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Available Scripts

- `dev`: Starts the development server with hot-reloading
- `build`: Compiles the TypeScript source code to JavaScript
- `start`: Starts the production server

## Template Features

This project uses a template that includes:

- **TypeScript**: For type-safe code
- **Express**: Web framework for Node.js
- **Project Structure**: Organized with models, controllers, and routes
- **TSX**: For development with automatic server restarts
- **Puppeteer**: For browser automation and testing

## Notes

This is a personal testing project for exploring Puppeteer's capabilities. The underlying template structure can be reused for future Node.js + Express + TypeScript projects.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy testing! 🎯
