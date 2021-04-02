import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

//import cats from './mockCats.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    this.catIndex();
  }

  catIndex = () => {
    fetch('http://localhost:3000/cats')
      .then((response) => {
        return response.json();
      })
      .then((arrayOfCats) => {
        this.setState({ cats: arrayOfCats });
      })
      .catch((errors) => {
        console.log('index errors:', errors);
      });
  };

  createNewCat = (newCat) => {
    fetch('http://localhost:3000/cats', {
      body: JSON.stringify(newCat),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 422) {
          alert('Something went wrong here');
        } else {
          return response.json();
        }
      })
      .then((payload) => {
        this.catIndex();
      })
      .catch((errors) => {
        console.log('create errors', errors);
      });
  };

  editCat = (editedCat) => {
    console.log(editedCat);
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
          <Route
            path='/catEdit/:id'
            render={(props) => {
              const id = +props.match.params.id;
              const foundCat = this.state.cats.find((cat) => cat.id === id);
              return <CatEdit cat={foundCat} editCat={this.editCat} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
