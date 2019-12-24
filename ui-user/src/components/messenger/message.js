/* eslint-disable react/destructuring-assignment */
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
      list: [],
      listKey: [],
      listFriend: {},
    };
    // this.messageRef = realtimedb.ref().child(`${decoded.userId}+${decoded.userId}`);
    // console.log('111111111', decoded)
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
      console.log('aaaaaaaaaa',endMess);

      // array.push(idArr[1]);
      Promise.resolve(getChatInforUserById(idArr[1])).then(() => {
        const { chatUserInfor } = this.props;
        //lỗi ở đây
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
    // const { userInfor } = this.props;
    // let messageEnd = null;
    // if (this.state.list.length !== 0) {
    //   messageEnd = this.state.list[this.state.list.length - 1].message;
    // }

    console.log('listttttttt11111', this.state.listKey);

    return (
      <div className="messageBody">
        <div className="container py-5 px-4">
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
                })}
              </div>

              <Form style={{ transform: 'translateY(-27px)' }} onSubmit={(e) => { e.preventDefault(); }} className="bg-light">
                <div className="input-group">
                  <input
                    type="text"
                    style={{ color: 'black' }}
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    placeholder="Type a message"
                    className="form-control rounded-0 border-0 py-4 bg-light"
                  />
                  <Button type="submit" onClick={() => this.handleSend()} className="btn btn-link"><i className="fa fa-paper-plane" /></Button>
                </div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
