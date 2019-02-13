import React, { Component } from 'react';
import './index.css'
import Login from './Login/Login';
import MainContainer from './MainContainer/MainContainer'



export default class App extends Component {

constructor(props){
    super(props);
    
    this.state = {
      logged: false,
      username: ''
    }
  }
  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }


 
  render(){
    console.log(this.state)
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} />}
      </div>
    );
  }
}
     
