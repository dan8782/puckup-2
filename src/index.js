import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

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
console.log(r.urls)

setInterval(function() {
  s+=1;
  document.title='svyat pernul '+s+'raz';
}, 100);

export class App extends React.Component {
  constructor() {
    super();
    this.places = r.urls;
  }


  render() {

    return (
      <div className="App" style={{
        Background: '#ee9ca7',
        background: 'linear-gradient(to right, #ffdde1, #ee9ca7)',
      }} >

        <h1>Кто завтра сладко обдристает штаны</h1>
        <Wheel items={this.places} />

      </div>

    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
