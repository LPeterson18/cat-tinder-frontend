import React, { Component } from 'react';
import cats from './mockCats.js';
import Header from './components/Header';
import Footer from './components/Footer';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/catIndex' component={CatIndex} />
          <Route path='/catShow/:id' component={CatShow} />
          <Route path='/catNew' component={CatNew} />
          <Route path='/catEdit/:id' component={CatEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
