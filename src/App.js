import React, { Component } from 'react';
import Header from './blog/header';
import Main from './blog/main';
import Nav from './blog/nav';
import Footer from './blog/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="MainArticle">
            <Main/>
            <Nav/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
