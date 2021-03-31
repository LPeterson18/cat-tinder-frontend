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
  constructor(props) {
    super(props);
    this.state = {
      cats: cats,
    };
  }

  createNewCat = (newCat) => {
    console.log(newCat);
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/catIndex'
            render={() => <CatIndex cats={this.state.cats} />}
          />
          <Route
            path='/catShow/:id'
            render={(props) => {
              const id = parseInt(props.match.params.id);
              const foundKitty = this.state.cats.find((cat) => cat.id === id);
              return <CatShow cat={foundKitty} />;
            }}
          />
          <Route
            path='/catNew'
            render={(props) => {
              return <CatNew createNewCat={this.createNewCat} />;
            }}
          />
          <Route path='/catEdit/:id' component={CatEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
