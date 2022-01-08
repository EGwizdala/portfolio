import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import '../styles/App.sass'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
