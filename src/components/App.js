import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import { LoadingBar } from 'react-redux-loading-bar'
import Nav from './Nav'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      
      <div>
      <Nav/>
      <Dashboard/>  
      
      </div>
  );
}
}
function mapStateToProps({authedUser}){
  return{
    loading:authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
