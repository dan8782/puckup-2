import React,{Component} from 'react';
import { Modal, Button } from "react-bootstrap";

import './index.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      modalVisible:true,
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
    let r = JSON.parse(httpGet(theUrl))
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
    const spinning = selectedItem !== null ? 'spinning' : '';
    return (
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
            {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  {item}
                </div>
            ))}
          </div>
        </div>
    );
  }
}
