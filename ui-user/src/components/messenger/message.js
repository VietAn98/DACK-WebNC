/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import firebase from 'firebase';
import moment from 'moment';
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
    // const newTime = new Date();
    const idReceive = path[path.length - 1];
    this.state = {
      userName: decoded.userId,
      message: '',
      timeNow: '',
      list: [],
      listKey: [],
      // eslint-disable-next-line react/no-unused-state
      listFriend: {},
    };
    if (decoded.categoryUser === 0) {
      this.messageRef = realtimedb.ref().child(`chatchit/${decoded.userId}+${idReceive}`);
    } else {
      this.messageRef = realtimedb.ref().child(`chatchit/${idReceive}+${decoded.userId}`);
    }
    this.listenMessages();
    this.listenFriendByFB();
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.user) {
      this.setState({ userName: nextProps.user.displayName });
    }
  }

  componentWillUnmount = () => {
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSend = () => {
    // console.log(this.state.message);
    if (this.state.message) {
      const time = new Date();
      const newItem = {
        timeNow: (moment(time).format('lll')).toString(),
        userName: this.state.userName,
        message: this.state.message
      };
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }

  handleKeyPress = (event) => {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }

  listenFriendByFB = () => {
    const array = [];
    const { getChatInforUserById } = this.props;
    realtimedb.ref().child('chatchit').on('child_added', (item) => {
      const TempEndMess = Object.values(item.val());
      const endMess = TempEndMess[TempEndMess.length - 1];
      const idArr = item.key.toString().split('+');
      // console.log('aaaaaaaaaa', endMess);

      // array.push(idArr[1]);
      Promise.resolve(getChatInforUserById(idArr[1])).then(() => {
        const { chatUserInfor } = this.props;
        // lỗi ở đây
        array.push({ chatUserInfor, endMess });
        this.setState({
          listKey: array,
        });
      });
      // console.log('aaaaaaaaaaaaaaa', `${item.key }aaa`);
    });
  }

  listenMessages = () => {
    // get danh sách chat
    this.messageRef.limitToLast(10).on('value', (message) => {
      // console.log(Object.values(message.val()));
      // console.log('11111', message.val());
      if (message.val() !== null) {
        this.setState({
          list: Object.values(message.val())
        });
      }
    });
  }

  onClickChat = () => { }

  render() {
    const tokenn = localStorage.token;
    const decoded = jwtDecode(tokenn);

    return (
      <div className="messageBody">
        <div className="container" style={{ padding: '4em' }}>
          <header className="text-center mt-5">
            <h1 className="display-4 text-white"><b>CHATBOX</b></h1>
            <p className="text-white lead mb-5">Hãy nói theo cách của bạn</p>
          </header>

          <div className="row rounded-lg overflow-hidden shadow">
            <div className="col-5 px-0">
              <div className="bg-white">

                <div className="bg-gray px-4 py-2 bg-light">
                  <p className="h5 mb-0 py-1">Recent</p>
                </div>
                {this.state.listKey ? (
                  <div className="messages-box">
                    <div className="list-group rounded-0">
                      {this.state.listKey.map((item) => (
                        <Button onClick={this.onClickChat} className="list-group-item list-group-item-action active text-white rounded-0">
                          <div className="media">
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                            <div className="media-body ml-4">
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <h6 className="mb-0">{item.chatUserInfor.name}</h6>
                                <small className="small font-weight-bold">25 Dec</small>
                              </div>

                              <p className="font-italic mb-0 text-small">{item.endMess.message}</p>
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : null}


              </div>
            </div>
            <div className="col-7 px-0">
              <div ref={(node) => { this.chatbox = node; }} className="px-4 py-5 chat-box bg-white">
                {this.state.list.map((item, index) => {
                  if (item.userName !== decoded.userId) {
                    return (
                      <div className="media w-50 mb-3">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                        <div className="media-body ml-3">
                          <div className="bg-light rounded py-2 px-3 mb-2">
                            <p className="text-small mb-0 text-muted">{item.message}</p>
                          </div>
                          <p className="small text-muted">{item.timeNow}</p>
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
                        <p className="small text-muted">{item.timeNow}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Form style={{ transform: 'translateY(-27px)' }} onSubmit={(e) => { e.preventDefault(); }} className="bg-light">
                <div className="input-group">
                  <input
                    type="text"
                    style={{ color: 'black', width: '86%' }}
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    placeholder="Type a message"
                    className="form-control rounded-0 border-0 py-4 bg-light text-small"
                  />
                  <Button type="submit" onClick={() => this.handleSend()} className="btn btn-link float-right"><i className="fa fa-paper-plane" /></Button>
                </div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
