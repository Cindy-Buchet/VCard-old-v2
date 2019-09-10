import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Infos, Header, Footer, Competence, Portefolio } from './components';
import './index.scss';

class App extends Component{

  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <Infos />
        </div>  
          <Competence />
          <Portefolio />
      <Footer />
      </div>
      
    );
  }
}
export default App;
