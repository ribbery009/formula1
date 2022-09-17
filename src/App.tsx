import './App.css';
import axios from 'axios';
import { Dashboard } from './app/page/Dashboard';
import { QueryResponseDriversProvider } from './app/components/core/QueryResponseProvider';
function App() {

  
  return (
    <QueryResponseDriversProvider>
      <Dashboard />
    </QueryResponseDriversProvider>

  );
}

export default App;
