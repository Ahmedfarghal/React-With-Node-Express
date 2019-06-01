import React, { Component } from '../node_modules/react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    state={
      customers: []
    }

 componentDidMount() {
   fetch('/customers')
     .then(res => res.json())
     .then(customers => this.setState({
       customers
     }, () => console.log("data fetched...", customers)));
 }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <p>Hello node from inside the react</p>
      <p>{this.state.customers.map(customer => <li key={customer.id}>{customer.id}- {customer.name}</li>)}</p>
    </div>
    )
  }
}







