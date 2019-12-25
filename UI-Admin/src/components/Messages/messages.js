import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Message extends React.PureComponent {
    render() {
        return (
            <div style={{ padding: '8em 2em 4em 2em' }}>
                <h1 className="text-center mb-5"><b>Tin Nhắn</b></h1>
                <div className="messageBody">
                    <div className="container">
                        <div className="row rounded-lg overflow-hidden shadow">
                            <div className="col-3 px-0">
                                <div className="bg-white">

                                    <div className="bg-gray px-4 py-2 bg-light">
                                        <p className="h5 mb-0 py-1">Recent</p>
                                    </div>
                                    <div className="messages-box">
                                        <div className="list-group rounded-0">
                                            <Button onClick={this.onClickChat} className="list-group-item list-group-item-action active text-white rounded-0">
                                                <div className="media">
                                                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                                    <div className="media-body ml-4">
                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                            <h6 className="mb-0">Tên User</h6>
                                                            <small className="small font-weight-bold">25 Dec</small>
                                                        </div>

                                                        <p className="font-italic mb-0 text-small">Tin nhắn</p>
                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 px-0">
                                <div
                                    ref={(node) => { this.chatbox = node; }}
                                    className="px-4 py-5 chat-box bg-white"
                                    style={{ overflowY: 'scroll' }}
                                >
                                    <div className="media w-50 mb-3">
                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                        <div className="media-body ml-3">
                                            <div className="bg-light rounded py-2 px-3 mb-2">
                                                <p className="text-small mb-0 text-muted">item.message</p>
                                            </div>
                                            <p className="small text-muted">12:00 PM | Aug 13</p>
                                        </div>
                                    </div>

                                    <div className="media w-50 ml-auto mb-3">
                                        <div className="media-body">
                                            <div className="bg-primary rounded py-2 px-3 mb-2">
                                                <p className="text-small mb-0 text-white">item.message</p>
                                            </div>
                                            <p className="small text-muted">12:00 PM | Aug 13</p>
                                        </div>
                                    </div>

                                    <div className="media w-50 mb-3">
                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />
                                        <div className="media-body ml-3">
                                            <div className="bg-light rounded py-2 px-3 mb-2">
                                                <p className="text-small mb-0 text-muted">item.message</p>
                                            </div>
                                            <p className="small text-muted">12:00 PM | Aug 13</p>
                                        </div>
                                    </div>

                                    <div className="media w-50 ml-auto mb-3">
                                        <div className="media-body">
                                            <div className="bg-primary rounded py-2 px-3 mb-2">
                                                <p className="text-small mb-0 text-white">item.message</p>
                                            </div>
                                            <p className="small text-muted">12:00 PM | Aug 13</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;
