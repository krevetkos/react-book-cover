import React from 'react';
import './App.css';
import Header from './components/header/HeaderComponent';
import Footer from './components/footer/FooterComponent';
import Main from './components/main-components/MainContent/MainContent'
function App() {
  return ( 
    <React.Fragment>
      <Header></Header> 
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App;
