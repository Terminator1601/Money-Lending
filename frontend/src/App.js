import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Signup from './components/LoginSignup';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setData(response.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="App">
      <h1>MERN Project</h1>
      <p>{data ? data : 'Loading...'}</p>
      <Signup/>
    </div>
  );
}

export default App;
