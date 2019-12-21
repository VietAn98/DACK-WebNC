import React, { Component } from 'react';
import firebase from 'firebase';
import jwtDecode from 'jwt-decode';
import {
  Button, Form
} from 'react-bootstrap';
import './message.css';
import { realtimedb } from '../../firebase/index';

export default class FormMessage extends Component {
  constructor(props) {
    super(props);
    const tokenn = localStorage.token;
    const decoded = jwtDecode(tokenn);
    const path = window.location.pathname.split('/');
    const idReceive = path[path.length - 1];
    this.state = {
      userName: decoded.userId,
      message: '',
      list: []
    };
    // this.messageRef = realtimedb.ref().child(`${decoded.userId}+${decoded.userId}`);
    // console.log('111111111', decoded)
    if (decoded.categoryUser === 0) {
      this.messageRef = realtimedb.ref().child(`chatchit/${decoded.userId}+${idReceive}`);
    } else {
      this.messageRef = realtimedb.ref().child(`chatchit/${idReceive}+${decoded.userId}`);
    }
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
    console.log(this.state.message);
    if (this.state.message) {
      const newItem = {
        userName: this.state.userName,
        message: this.state.message
      };
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }

  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }

  listenMessages() {
    // get danh sách chat
    const array = [];
    realtimedb.ref().child('chatchit').on('child_added', (item) => {
      array.push(item.ref_.key);
    });
    console.log('aaaaaaaaaaaaaaa', array.length);

    this.messageRef.limitToLast(10).on('value', (message) => {
      // console.log(Object.values(message.val()));
      console.log('11111', message.val());
      if (message.val() !== null) {
        this.setState({
          list: Object.values(message.val())
        });
      }
    });
  }

  render() {
    const tokenn = localStorage.token;
    const decoded = jwtDecode(tokenn);
    return (
      <div>
        <div style={{ marginTop: '20px', marginBottom: '20px' }} className="container py-5 px-4">
          <header className="text-center">
            <h1 className="display-4 text-white">WEB gia sư online</h1>
            <p className="text-white lead mb-0">Hãy nói theo cách của bạn</p>
          </header>

          <div className="row rounded-lg overflow-hidden shadow">
            <div className="col-5 px-0">
              <div className="bg-white">

                <div className="bg-gray px-4 py-2 bg-light">
                  <p className="h5 mb-0 py-1">Recent</p>
                </div>

                <div className="messages-box">
                  <div className="list-group rounded-0">
                    <a href="#" className="list-group-item list-group-item-action active text-white rounded-0">
                      <div className="media">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                        <div className="media-body ml-4">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <h6 className="mb-0">Jason Doe</h6>
                            <small className="small font-weight-bold">25 Dec</small>
                          </div>
                          <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                      <div className="media">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                        <div className="media-body ml-4">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <h6 className="mb-0">Jason Doe</h6>
                            <small className="small font-weight-bold">14 Dec</small>
                          </div>
                          <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                      <div className="media">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                        <div className="media-body ml-4">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <h6 className="mb-0">Jason Doe</h6>
                            <small className="small font-weight-bold">9 Nov</small>
                          </div>
                          <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 px-0">
              <div className="px-4 py-5 chat-box bg-white">
                {this.state.list.map((item, index) => {
                  if (item.userName !== decoded.userId) {
                    return (
                      <div className="media w-50 mb-3">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                        <div className="media-body ml-3">
                          <div className="bg-light rounded py-2 px-3 mb-2">
                            <p className="text-small mb-0 text-muted">{item.message}</p>
                          </div>
                          <p className="small text-muted">12:00 PM | Aug 13</p>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="media w-50 ml-auto mb-3">
                      <div className="media-body">
                        <div className="bg-primary rounded py-2 px-3 mb-2">
                          <p className="text-small mb-0 text-white">{item.message}</p>
                        </div>
                        <p className="small text-muted">12:00 PM | Aug 13</p>
                      </div>
                    </div>
                  );
                }
                )}
              </div>
              <Form action="#" className="bg-light">
                <div className="input-group">
                  <input
                    type="text"
                    style={{ color: 'black' }}
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    placeholder="Type a message"
                    aria-describedby="button-addon2"
                    className="form-control rounded-0 border-0 py-4 bg-light"
                  />
                  <div className="input-group-append">
                    <Button id="button-addon2" type="submit" className="btn btn-link"><i className="fa fa-paper-plane" /></Button>
                  </div>
                </div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
