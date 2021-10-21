import React from 'react';
import './index.css';
import Popup from "reactjs-popup";


import {Button, Header, Image, Modal, ModalDescription, Icon} from 'semantic-ui-react'




export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };

    this.selectItem = this.selectItem.bind(this);
  }



  selectItem() {


      // govnokod
    const theUrl = 'https://qr-pickuper.herokuapp.com/urls/1'
    function httpGet(theUrl)
    {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
    }

    var r;
    r = JSON.parse(httpGet(theUrl))
    //govnokod end
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);

      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }



      // var page = `${r.urls[selectedItem]}`

      //console.log(page)



      this.setState({ selectedItem });

    } else {

      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 1000);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
//
    const spinning = selectedItem !== null ? 'spinning' : '';
    return (
      <div>
        <Popup trigger={<div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
            {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  {item}
                </div>
            ))}
          </div>
        </div>} position="center" >
          <script src={"index.js"}>setTimeout("alert('Привет')", 1000)</script>
          <div className={'popup'}>Зачем нажал?</div>
        </Popup>
      </div>

    );
  }
}
