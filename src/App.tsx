import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header'
import MenuBoard from './components/MenuBoard';
import Loading from './components/Loading';

function App() {

  const [displayLoading, setDisplayLoading] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <div>
      <div className="h-screen overflow-hidden">
        <Header />
        {/* <div className='h-12'></div> */}
        <div className='h-full max-h-full'>
          <Loading display={displayLoading} setDisplay={setDisplayLoading} />
          <MenuBoard display={displayMenu} setDisplay={setDisplayMenu} />
          <Outlet context={[displayMenu, setDisplayMenu, displayLoading, setDisplayLoading]} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
