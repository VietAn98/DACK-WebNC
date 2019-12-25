import React from 'react';
import { Container, Form } from 'react-bootstrap';

import './AdminSignUp.css';

export class AdminCreate extends React.PureComponent {
  onSubmitSignUpForm = async (e) => {
    e.preventDefault();
    const { adminCreateAccount } = this.props;
    const gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    await adminCreateAccount(name, gmail, password);

    document.getElementById('gmail').value = '';
    document.getElementById('password').value = '';
    document.getElementById('re-password').value = '';
    document.getElementById('name').value = '';
  };

  render() {
    return (
      <div className="adminSignUp inner-block" style={{ padding: '8em 2em 4em 2em' }}>
        <Container className="my-container" style={{ width: '90%' }}>
          <div
            style={{
              // border: "1px dashed black",
              // backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: '20px',
              paddingBottom: '3rem'
            }}
          >
            <h3 className="w3layouts-heading black-title mb-4">
              <span>Tạo tài  khoản quản trị viên</span>
            </h3>
            <div className="w3-agile_mail_grids justify-center">
              <div className="col-md-7 w3-agile_mail_grid_right">
                <Form
                  action="#"
                  method="post"
                  onSubmit={this.onSubmitSignUpForm}
                  className="signupForm"
                >
                  <div className="col-md-12 col-sm-12 mb-2 ">
                    <input
                      type="text"
                      id="name"
                      placeholder="Họ và tên"
                      required=""
                    />
                  </div>

                  <br />
                  <div className="col-md-12 col-sm-12 mb-2">
                    <input
                      type="email"
                      id="gmail"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 contact_left_grid mb-2">
                    <input
                      type="password"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 contact_left_grid mb-5">
                    <input
                      type="password"
                      id="re-password"
                      placeholder="Nhập lại mật khẩu"
                      required=""
                    />
                  </div>

                  <input
                    type="submit"
                    value="Đăng ký"
                    className="signUpSubmit"
                    style={{
                      textAlign: 'center',
                      transform: 'translateX(50%)'
                    }}
                  />
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AdminCreate;
