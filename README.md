# Multi-Currency Exchange Rates Dashboard

A minimalist, high-performance web dashboard that tracks and displays real-time exchange rates for global currencies (USD, EUR, PLN) relative to the Ukrainian Hryvnia (UAH). The system leverages a decoupled ES6 module layout and component-based presentation layers.

## Technical Specifications

### Core Architecture & Mechanics

- **Data Integration**: Fetches real-time financial data payloads via an asynchronous controller utilizing the Open Exchange Rates API.
- **Cross-Rate Calculations**: Dynamically computes cross-rates for EUR and PLN based on USD-centric API nodes relative to UAH.
- **Asynchronous Execution**: Implements modern `async/await` syntax to handle network requests efficiently without blockages in the runtime thread.

## Presentation Layer & CSS Architecture

- **Component-Based Styling**: Replaces redundant card definitions with a singular, optimized `.currency-card` pattern to maintain a minimal codebase.
- **Grid Coordination**: Utilizes a centralized flexbox container layout (`.currency-container`) for fluid responsiveness across varied viewports.
- **Theme Concept**: Strict tech-minimalism using slate background configurations (`#0a0a0c`), low-contrast structural dividers, and numeric stabilization via monospace sizing.

## File Structure

```text
├── index.html          # Application Blueprint & DOM Nodes
├── style/
│   └── style.css       # Layout Logic & Typography Context
└── src/
    ├── api.js          # API Endpoint Controller & Fetch Controller
    └── app.js          # UI Orchestration & Event Injections
```
