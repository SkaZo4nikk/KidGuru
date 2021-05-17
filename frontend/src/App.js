import { Container } from '@sberdevices/plasma-ui/components/Grid';
import React from 'react';

import './App.css';
import Scene from './components/menu.js';
import MainPage from './pages/main_page'
import Page0 from './pages/page0'
import Page1 from './pages/page1'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";


class App extends React.Component{
  render(){
    // return this.state.page === 0 ? <MainPage state = { this.state.page } changePage = {this.changePage}  /> : this.state.page === 1 ? <Page0 /> : <Page1 />
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/main_page' component={MainPage} />
          <Route path='/math_guru' component={Page0} />
          <Route path='/g_animal' component={Page1} />
          <Route path='/' exact >
            <Redirect to='/main_page' exact/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
