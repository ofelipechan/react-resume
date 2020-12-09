import React from 'react';
import './App.scss';
import Menu from './components/menu';
import Header from './components/header';
import Home from './pages/home';
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
          </div>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
