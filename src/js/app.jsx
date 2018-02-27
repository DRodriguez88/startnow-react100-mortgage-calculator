import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  render() {
    return (
      <div className='container'>      
          <input name="balance" type="number" placeholder="Balance"></input>
          <input name="rate" type="number" step="0.01" placeholder="Rate"></input>
          <select name="term">
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
          <button name="submit"/>
          <div name="output">
          </div>
      </div>
    );
  }
}
