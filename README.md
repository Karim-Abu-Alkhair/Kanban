# Kanban Board Application

## Description

This project is a Kanban board application built with React, TypeScript, and Tailwind CSS. It allows users to manage clients through a drag-and-drop interface, organizing them into different stages of a workflow.

## Features

- Drag and drop functionality for moving clients between columns
- Add, edit, and delete clients
- Responsive design for various screen sizes
- Local storage persistence for board data
- Customizable column titles

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- @hello-pangea/dnd (for drag and drop functionality)
- Formik (for form handling)
- Yup (for form validation)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Karim-Abu-Alkhair/Kanban.git
   ```

2. Navigate to the project directory:

   ```bash
   cd kanban-board
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- To add a new client, click the "Add Client" button in the first column.
- To edit or delete a client, use the respective icons on each client card.
- Drag and drop client cards between columns to update their status.
