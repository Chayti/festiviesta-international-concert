import logo from './logo.svg';
import './App.css';
import Singer from './components/singer';
import { useState,useEffect } from 'react';

function App() {
  const [singers,setSingers] = useState([]);
  useEffect(()=>{
    fetch('./singers.JSON')
    .then(res=>res.json())
    .then(data=>setSingers(data));
  },[]);
  return (
    <div>
      <Singer singers={singers}></Singer>
    </div>
  );
}

export default App;
