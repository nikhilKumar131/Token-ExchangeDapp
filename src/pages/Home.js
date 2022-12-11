import "bulma/css/bulma.min.css";
import React, { Component } from "react";
import { ethers } from "ethers";
import ERC20_ABI from "../components/ERC20_ABI.json"

class Home extends Component {

    address = "0xEc679440f32de9aC769dDe69E33A1ba160a46dB5";

    constructor() {
        super();
        this.state = {
            name: "",
            symbol: "",
            amount: 0,
            address: "",
            addressBalance: "",
            balance: 0
        }
    }

    async Token() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const daiContract = new ethers.Contract(this.address, ERC20_ABI, provider);
        const name = await daiContract.name();
        const symbol = await daiContract.symbol();
        this.setState({
            name: name,
            symbol: symbol,

        });
        console.log(name)
    }

    //inputHandler: handles input of amount you want to send
    inputHandler = event =>{
        
        this.setState({amount: event.target.value})
        console.log(this.state.amount)
    }

    addressHandler = event =>{
        this.setState({address: event.target.value})
        console.log(this.state.address)
    }

    balanceHandler = event => {
        this.setState({addressBalance: event.target.value})
    }

    async sendToken(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const TokenContract = new ethers.Contract(this.address, ERC20_ABI, provider)
        const signer = provider.getSigner();
        const TokenContractWithSigner = TokenContract.connect(signer);
        console.log(this.state.address);
        //function here
        TokenContractWithSigner.transfer(this.state.address,this.state.amount);
    }

    async checkBalance(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const TokenContract = new ethers.Contract(this.address, ERC20_ABI, provider)
        const addressBalance = this.state.addressBalance;
        const balance_hex = await TokenContract.balanceOf(addressBalance);
        const balance = parseInt(balance_hex);
        console.log(balance);
        this.setState({balance: balance});
        
    }



    render() {

        {
            this.Token()
        }


        return (
            <div>
                <section className="hero is-link">
                    <p>Switch to Sepoli test net to access token smart contract.</p>
                    <p>Works on Sepoli test net only</p>
                    <p>Private key of address with 100000 tokens:</p>
                    <strong>b857d15af83b3d7bab98a0bef37ceb6cfc1702d4b7b3367f415505ceb90b703d</strong>
                </section>
                <strong>Token Information</strong>
                <p>Token Name: <strong>{this.state.name}</strong></p>
                <p>Token Symbol: <strong>{this.state.symbol}</strong></p>
                <p>Token amount you wan to send</p>
                <input className="input" onChange={this.inputHandler} type="text" placeholder="Text input" />
                <p>{this.state.amount}</p>
                <p>Address you want to send to</p>
                <input className="input" onChange={this.addressHandler} type="text" placeholder="Send To Address"/>
                <p>Send Button</p>
                <button className="button is-primary" onClick={() => this.sendToken()} >Send</button>
                <p>Balance of</p>
                <input className="input " onChange={this.balanceHandler} />
                <button className="button is-primary" onClick={() => this.checkBalance()}>Balance</button>
                <p>{this.state.balance}</p>


            </div>
        );
    }
}

export default Home;