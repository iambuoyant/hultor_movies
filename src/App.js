import React, { Component } from 'react'
import 'App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from 'react-router-dom'

import Nav from 'containers/Nav/Nav'
import MovieList from 'containers/MovieList/MovieList'
import MovieShow from 'containers/MovieShow/MovieShow'
import NotFound from 'components/NotFound/NotFound';
import Footer from 'components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={MovieList}/>
        <Route path="/movie/:id" component={MovieShow}/>
        <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}
export default App;
