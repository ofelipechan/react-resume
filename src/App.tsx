import React from 'react';
import './App.scss';
import Menu from './components/menu';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Menu />
          <Header />
          <div className="container-page">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
