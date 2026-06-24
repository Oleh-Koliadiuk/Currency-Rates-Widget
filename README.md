# Dollar Exchange Rate Widget

A minimalist web application that tracks and displays the official USD to UAH exchange rate in real-time. The system implements a strict tech-minimalism layout combined with a decoupled JavaScript module design pattern.

## Product Specification

### Core Mechanics

- **Data Integration**: Fetches real-time financial data directly from the official National Bank of Ukraine (NBU) API.
- **Asynchronous Flow**: Uses modern `async/await` syntax to handle API network responses without blocking the browser thread.
- **Dynamic DOM Mutation**: Intercepts the response data payload and injects formatting values directly into target layout nodes.

## Presentation Layer & Layout

- **Theme Concept**: Dark tech-minimalism using slate backgrounds (`#0a0a0c`), subtle structural borders, and monospace font sizing (`SF Mono`) for numerical layout stability.
- **Interactive UI Modules**: Features a standalone asset container featuring structural SVG vector elements and hover state button scales.

## Deployment

### Prerequisites

A modern browser runtime environment supporting HTML5 document trees, ES6 native modules, and CORS network protocols.

### File Architecture

- `index.html` (Application Layout DOM Blueprint)
- `.gitignore` (Git exclusion configurations)
- `style/style.css` (Presentation & Monochromatic Layout)
- `src/app.js` (Main Core UI Orchestrator & Event Listeners)
- `src/api.js` (NBU Endpoint Communication & Fetch Controller)
