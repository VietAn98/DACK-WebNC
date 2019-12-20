import React, { Component } from "react";
import firebase from "firebase";
import { realtimedb } from '../firebase/index';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Sebastian",
      message: "",
      list: []
    };
    this.messageRef = realtimedb.ref().child("messages");
    this.listenMessages();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ userName: nextProps.user.displayName });
    }
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSend() {
    if (this.state.message) {
      const newItem = {
        userName: this.state.userName,
        message: this.state.message
      };
      this.messageRef.push(newItem);
      this.setState({ message: "" });
    }
  }

  handleKeyPress(event) {
    if (event.key !== "Enter") return;
    this.handleSend();
  }

  listenMessages() {
    this.messageRef.limitToLast(10).on("value", message => {
        console.log(Object.values(message.val()));
      this.setState({
        list: Object.values(message.val())
       });
     });
  }

  render() {
    return (
      <div style={{marginTop:"100px"}} className="form">
        <div className="form__message">
          {this.state.list.map((item, index) => (
            <div className="message">
              <span className="message__author">{item.userName}:</span>
              {item.message}
            </div>
          ))}
        </div>
        <div className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button className="form__button" onClick={this.handleSend.bind(this)}>
            send
          </button>
        </div>
      </div>
    );
  }
}
