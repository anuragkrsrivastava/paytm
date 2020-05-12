import React, {Component} from "react";
import App from './App';
import UserInfo from './UserInfo';

class AccessToken extends Component = ({authId}) => {
    
    state = {
        access_token: null,
        expires: null,
        resourceOwnerId: null,
    };

    componentDidMount(){
        url="https://accounts.paytm.com/oauth2/v2/token"
        const data = {
            "grant_type" : "authorization_code",
            "code": this.authId,
            "client_id" : "merchant-abc",
            "scope" : "basic"
        }
          
          let formBody=[];
          
          for (var property in data) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(data[property]);
          
              formBody.push(encodedKey + "=" + encodedValue);
            }
          
          const requestBody = formBody.join("&");
          const otherParams={
           headers: {
             "Content-Type": "x-www-form-urlencoded",
             "Authorization": "Basic YWxhZGRpbjpvcGVuc2VzYW1l"
            },
           body: requestBody,
           method: "POST"
          };
          
          fetch(url, otherParams)
          .then(res => res.json())
          .then(res => this.setState({access_token: res.access_token, expires: res.expires, resourceOwnerId: res.resourceOwnerId}))
          .catch(err => console.log(err))
    }
    
    render() {
        return(
            <div>
                <p>Access Token is passed</p>
                <UserInfo authId = {this.authId}/>
            </div>;
        );
    }
}