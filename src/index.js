import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';
import {Redirect} from "react-router-dom";

const theUrl = 'https://qr-pickuper.herokuapp.com/urls/1'
function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

var r;
var s=0;

r = JSON.parse(httpGet(theUrl))
const keys= Object.keys(r.data)
console.log(keys[0])



export class App extends React.Component {

  constructor() {
    super();
    /*this.places = r.urls;*/
    this.places = keys;
  }

  render() {
    return (
      <div className="App" style={{
        Background: '#ee9ca7',
        background: 'linear-gradient(to right, #ffdde1, #ee9ca7)',
      }}>

        <h1>Random text</h1>

        <Wheel items={this.places} />

      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
