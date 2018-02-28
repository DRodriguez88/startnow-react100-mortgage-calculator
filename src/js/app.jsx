import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(){
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 30,
      payment: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ 
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  calculatePayment(balance, rate, term){
    balance = parseFloat(this.state.balance);
    rate = parseFloat(this.state.rate) /100 /12;
    // rate /= 100;
    // rate /= 12;   
    term = parseFloat(this.state.term)*12;
    let top = rate*Math.pow((1+rate),term);
    let bottom = Math.pow((1+rate), term) - 1;
    let middle = top/bottom;
    let monthlyPay = balance*middle;
    monthlyPay = Math.round(100*monthlyPay)/100

    this.setState({
      payment: monthlyPay,
    })
  }  

  render() {
    return (
      <div className='container'>
          <h3>Mortgage Calculator</h3> 
          Loan Balance     
          <input name="balance" type="number" defaultValue={this.state.balance} onChange={this.handleChange} placeholder="Balance"></input>
          Interest Rate (%)
          <input name="rate" type="number" step="0.01" defaultValue={this.state.rate} onChange={this.handleChange} placeholder="Rate"></input>
          Loan Term (years)
          <select name="term" defaultValue="30" onChange={this.handleChange}>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
          <button name="submit" onClick={this.calculatePayment} >Calculate</button>
          <div name="output" id="output">
          {this.calculatePayment = this.calculatePayment.bind(this)}
          ${this.state.payment} is your payment.
          </div>
      </div>
    );
  }
}
