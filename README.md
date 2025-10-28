# Mini Kanban Board

A minimal Kanban board web application built with React, TypeScript, and React DnD.

## Features

- **Three Columns**: To Do, In Progress, and Done
- **Drag & Drop**: Move tasks between columns using React DnD
- **Local Storage**: Tasks persist in browser storage
- **Responsive Design**: Adapts to different screen sizes
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vjeko-D/mini-kanban-board.git
cd mini-kanban-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests

## Project Structure

```
src/
├── components/
│   ├── KanbanBoard.tsx    # Main board component
│   ├── KanbanBoard.css    # Board styling
│   ├── Column.tsx         # Column component
│   └── TaskCard.tsx       # Individual task card
├── types.ts               # TypeScript type definitions
├── App.tsx                # Root component
├── App.css               # App styling
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## How It Works

1. **Initial Data**: The app loads 12 sample tasks from the provided JSON data
2. **Task Distribution**: Tasks are randomly distributed across columns based on their ID
3. **Drag & Drop**: Users can drag tasks between columns to change their status
4. **State Management**: Uses React's `useReducer` for predictable state updates
5. **Persistence**: All changes are automatically saved to localStorage

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **React DnD** - Drag and drop functionality
- **Vite** - Build tool and dev server
- **CSS Grid** - Responsive layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC