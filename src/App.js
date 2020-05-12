import React, {Component} from 'react';
import './App.css';
import JSBridge from 'react-js-bridge';
import AccessToken from './AccessToken';

class App extends Component{

  state = {
    authId: null,
    openId: null,
  };

  onClick = () => {
    JSBridge.call('paytmFetchAuthCode',{
      clientId:"/*your reqClient ID*/"},
      function(result) {
       var obj = JSON.parse(result);
       this.setState({authId: obj.authId, openId: obj.openId});
    });
    if((!this.state.authId) || (!this.state.openId)){
      // redirect to login page and display message
      <p>Please approve to get into Website</p>
    }
    else{
      <AccessToken authId={this.state.authId}/>
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.onClick}>Paytm</button>
      </div>
    );
  }
}

export default App;