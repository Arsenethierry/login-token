import React from 'react';
import { LoginForm } from './components/LoginForm';
import { Navbars } from './components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbars/>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-6 col-sm-12' style={{padding: "15% 10% 16% 10%"}}>
            <LoginForm/>
          </div>
          <div className='col-6 bg-dark'>
            
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default App;
