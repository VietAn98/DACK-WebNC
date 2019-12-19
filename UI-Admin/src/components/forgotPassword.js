import React from 'react';
import Swal from "sweetalert2";
import {
    Container, Form, Spinner, Button
} from 'react-bootstrap';
import "./AdminSignIn/AdminSignIn.css";
import PageNotFound from './PageNotFound'


class NewPassword extends React.PureComponent {
    constructor(props) {
        super(props);
        const path = window.location.search.split('=');
        const keyPass = path[path.length - 1];
        console.log(keyPass)
        const { getMailByKeyPass } = this.props;
        getMailByKeyPass(keyPass);

    }

    onSubmitNewPassForm = (e) => {
        e.preventDefault();
        alert(document.getElementById('password').value)
        const { updatePassword } = this.props;
        updatePassword(document.getElementById('password').value);
        Swal.fire('Đang cập nhật password');
        Swal.showLoading();
    };

    render() {
        const { keyPass } = this.props
        let check = false;
        if (keyPass.length === 0) {
            check = true
        }
        return (
            <div>
                {check ? <PageNotFound /> : (<div className="adminSignIn" style={{ padding: "5rem" }}>

                    <div className="cover-sigin">
                        <div>
                            <div className="col-md-12 col-sm-12">
                                <h3 className="w3layouts-heading white-title mb-3">
                                    <span>Nhập lại mật khẩu mới</span>
                                </h3>
                                <div className="w3-agile_mail_grids justify-center">
                                    <div className="col-md-12 col-sm-12 w3-agile_mail_grid_right">
                                        <Form
                                            action="#"
                                            method="post"
                                            className="justify-center flex-wrap"
                                            onSubmit={this.onSubmitNewPassForm}
                                        >

                                            <div className="col-md-12 col-sm-12 pb-5 text-white">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    placeholder="Nhập mật khẩu"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-md-12 col-sm-12 pb-5 text-white">
                                                <input
                                                    type="password"
                                                    id="re-password"
                                                    placeholder="Nhập lại mật khẩu"
                                                    required=""
                                                />
                                            </div>
                                            <input type="submit" value="Cập nhật" />
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                }

            </div>
        );
    }
}

export default NewPassword;
