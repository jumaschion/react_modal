import './index.css';

import Modal from "./Components/Modal";
import React from "react";

class App extends React.Component {

  state = {
    show: false,
    hideButtonAndText: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  handleChange = e => {
    this.setState({
    hideButtonAndText: !this.state.hideButtonAndText
    });
  };
  
    
  render() {

    const style = this.state.hideButtonAndText ? { display: "none"} : {}
    return (
      <div className="App">
        <h1  handleChange={this.state.hideButtonAndText} style={style}>Modal</h1>
        <button  handleChange={this.state.hideButtonAndText} style={style} class="toggle-button" id="centered-toggle-button" onClick={e => {this.showModal(e);}}>show Modal</button>
        <Modal onClose={this.showModal} show={this.state.show}>
          Message in Modal </Modal>
      </div>
    );
  }
}
export default App;