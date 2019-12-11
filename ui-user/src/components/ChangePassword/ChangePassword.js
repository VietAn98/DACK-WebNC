import React from 'react';
import { Form } from 'react-bootstrap';
import './ChangePassword.css';

class ChangePassword extends React.PureComponent {
    render() {
        return (
            <div
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '20px',
                    marginRight: '3rem',
                    paddingBottom: '3rem'
                }}
            >
                <h3 className="w3layouts-heading text-white">
                    <span>Thay Đổi Mật Khẩu</span>
                </h3>
                <div className="w3-agile_mail_grids justify-center">
                    <div className="col-md-12 w3-agile_mail_grid_right">
                        <Form action="#" method="post" onSubmit={this.onSubmitInforTeaching} novalidate>
                            <div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Mật khẩu cũ:</b>
                                </h5>
                                <input
                                    type="text"
                                    id="oldPass"
                                    required
                                />
                            </div>
                            <div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Mật khẩu mới:</b>
                                </h5>
                                <input
                                    type="text"
                                    id="newPass"
                                    required
                                />
                            </div>
                            <div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Nhập lại mật khẩu mới:</b>
                                </h5>
                                <input
                                    type="text"
                                    id="rePass"
                                    required
                                />
                            </div>
                            <div className="col-md-12 col-sm-12 text-center">
                                <input
                                    type="submit"
                                    value="Thay đổi"
                                    className="mt-5"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
