import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <header className="app-header">
          <h1>Mini Kanban Board</h1>
        </header>
        <main className="app-main">
          <KanbanBoard />
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
