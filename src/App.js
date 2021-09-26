import './App.css';
import Header from './components/Header/Header';
import Singers from './components/Singers/Singers';

function App() {
  
  return (
    <div className="main-bg">
      <div className="container">
        
        <div style={{height:'20px'}}></div>
        <Header></Header>
        <div style={{height:'20px'}}></div>
        <Singers></Singers>
        <div style={{height:'20px'}}></div>

      </div>
    </div>
  );
}

export default App;
