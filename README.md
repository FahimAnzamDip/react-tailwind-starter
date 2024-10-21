# Vite React Starter with Tailwind CSS

This is a basic starter template for building React applications using Vite and Tailwind CSS. It includes the setup for Tailwind CSS along with a custom utility `cn()` that merges Tailwind classes using `clsx` and `tailwind-merge` for better class management.

## Features

- **Vite** for fast, modern development.
- **React** as the front-end framework.
- **Tailwind CSS** for highly customizable styling.
- **`cn()` Utility**: A custom utility built using `clsx` and `tailwind-merge` for merging and deduping class names.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- npm (or Yarn)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/FahimAnzamDip/react-tailwind-starter.git
    cd react-tailwind-starter
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the Vite development server at `http://localhost:3000/` by default.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
