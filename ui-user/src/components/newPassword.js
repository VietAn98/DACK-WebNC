import React from 'react';
import Swal from "sweetalert2";

import {
 Container, Form, Spinner, Button 
} from 'react-bootstrap';
import HomePage from '../containers/HomePageContainer';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
// import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
// import history from '../../history';
// import Validator from '../../utils/validator';
import './SignIn/SignIn.css';

class NewPassword extends React.PureComponent {
  //   constructor(props) {
  //     super(props);
  //     const rules = [
  //       {
  //         field: "email",
  //         method: "isEmpty",
  //         validWhen: false,
  //         message: "Không được để trống Email."
  //       },
  //       {
  //         field: "password",
  //         method: "isEmpty",
  //         validWhen: false,
  //         message: "Không được để trống mật khẩu."
  //       }
  //     ];
  //     this.validator = new Validator(rules);
  //   }s

  onSubmitNewPassForm = (e) => {
    e.preventDefault();
    const { updatePassword } = this.props;
    updatePassword(document.getElementById('password').value);
    Swal.fire('Đang cập nhật password');
    Swal.showLoading();
   // const a = req.query.email;
  };

  render() {
    return (
      <div>
        {localStorage.token ? (
          <HomePage />
        ) : (
          <div className="contact-sectn" id="contact">
            <Container>
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: '20px',
                  paddingBottom: '3rem'
                }}
              >
                <h3 className="w3layouts-heading white-title">
                  <span>Mật khẩu mới</span>
                </h3>

                <div className="w3-agile_mail_grids justify-center">
                  <div className="col-md-7 w3-agile_mail_grid_right">
                    <Form
                      action="#"
                      method="post"
                      className="justify-center flex-wrap"
                      onSubmit={this.onSubmitNewPassForm}
                    >
                      <div className="col-md-10 col-sm-10 pb-5">
                        <input
                          type="password"
                          id="password"
                          placeholder="Nhập mật khẩu"
                          required=""
                        />
                      </div>
                      <div className="col-md-10 col-sm-10 pb-5">
                        <input
                          type="password"
                          id="confirm-password"
                          placeholder="Nhập lại mật khẩu"
                          required=""
                        />
                      </div>
                      {/* {isLogin ? <div className="loader" /> : null} */}
                      <input type="submit" value="Cập nhật" />
                    </Form>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default NewPassword;
