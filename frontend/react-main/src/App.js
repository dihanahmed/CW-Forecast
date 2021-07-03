import logo from './logo.svg';
import './App.css';
import React from "react";


class HelloApp extends React.Component{
  constructor(){
    super();
    this.state = {
      helloWorld: {},
    }
  }

  componentDidMount() {
    fetch(`/express`)
        .then(res => res.json())
        .then(data=>{
          this.setState({
            helloWorld:data
          })
        });
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.helloWorld.helloWorld}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


}


export default HelloApp
