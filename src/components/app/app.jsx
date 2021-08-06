import React from 'react';
import '../../styles/style.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default App;
