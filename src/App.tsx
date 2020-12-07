import React from 'react';
import './App.scss';
import Menu from './components/menu';
import Home from './pages/home';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />
        <div className="container-page">
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
