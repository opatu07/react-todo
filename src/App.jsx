import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
// import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./dummy/initial-data.js"
import { TodoTemplate } from '../src/components/pages/TodoTemplate';
import { TodoProvider } from './contexts/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route 
              path="/todo" 
              element={
                  <TodoTemplate />
              } 
            />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
};

export default App;
