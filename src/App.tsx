import  { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Dashboard } from './app/page/Dashboard';
function App() {

  useEffect(() => {

    axios.get('http://localhost:3005/api/drivers',)
      .then(response => {
        console.log("RESPONSE: ", response)
      }, error => {
        console.log("AXIOS GET ERROR: ", error);
      });
  }, [])
  return (
      <Dashboard />
  );
}

export default App;
