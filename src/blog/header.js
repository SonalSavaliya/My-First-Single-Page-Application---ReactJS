import React from 'react';
import road from './road.jpg';

const Header = () => {
  return(
    <header className="App-header">
      <span className="HeaderName">"Small Funny and Inspiring Stories!!!"</span>
      <img src={road} className="App-logo" alt="logo" />
  {  /*  <h1 className="App-title">Welcome to React</h1> */}
    </header>
  )
}

export default Header;
