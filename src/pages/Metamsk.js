

import "bulma/css/bulma.min.css"
import React, { Component } from 'react';

class MetaMaskButton extends Component {

    constructor() {
        super()
        this.state = {
            text: "MetaMask"
        }
    }


    // Nested functions
    async MetaMaskHandler() {
        console.log("MetaMask is pressed");

        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log(account);
            this.setState({
                text: account
            })
        }
        else { console.log('Install metamask first'); }
    }

    render(){
        return(
            <div>
                <button className="button is-primary" onClick={() => this.MetaMaskHandler()}>{this.state.text}</button>
            </div>
        );
    }

}

export default MetaMaskButton;