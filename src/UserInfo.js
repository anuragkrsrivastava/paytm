import React, {Component } from "react";
import { render } from "@testing-library/react";

class UserInfo extends Component = ({authId}) => {
    state = {
        email:null,
        displayName: null,
        countryCode: null,
        phoneNumber: null
    };
    
    componentDidMount(){
        const url="https://accounts.paytm.com/v2/user?fetch_strategy=profile_info,phone_number,email"

        const otherParams={
          headers: {
            "verification_type": oauth_token,
            "data": this.authId, // Auth Token you received via S2S call in previous step
            "Authorization": "Basic YWxhZGRpbjpvcGVuc2VzYW1l"
          },
          method: "GET"
        };

        fetch(url, otherParams)
        .then(res => res.json())
        .then(res => this.setState({email: res.email, displayName: res.profileInfo.displayName, countryCode: res.phoneInfo.countryCode, phoneNumber: res.phoneInfo.phoneNumber}))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <p>You get Profile Info of User</p>
            </div>
        );
    }
}