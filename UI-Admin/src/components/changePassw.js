import React from 'react';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { Container, Form } from 'react-bootstrap';
import './AdminCreate/AdminSignUp.css';

class ChangePassw extends React.PureComponent {
  onSubmitSignUpForm = async (e) => {
    e.preventDefault();
    Swal.fire('Đang cập nhật password');
    Swal.showLoading();
    const { changePassword } = this.props;
    const tokenn = localStorage.token;
    const decoded = jwtDecode(tokenn);
    const oldPass = document.getElementById('oldPassword').value;
    const newPass = document.getElementById('newPassword').value;
    changePassword(decoded.userId, newPass, oldPass);
    document.getElementById('oldPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('re-password').value = '';
  };

  render() {
    return (
      <div className="adminSignUp inner-block" style={{color: "black", padding: '2em 2em 2em 1em' }}>
        <Container className="my-container">
          <div
            style={{
              // border: "1px dashed black",
              // backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: '20px',
              paddingBottom: '3rem'
            }}
          >
            <h3 className="w3layouts-heading black-title mb-4">
              <span>Thay đổi mật khẩu</span>
            </h3>
            <div className="w3-agile_mail_grids justify-center">
              <div className="col-md-7 w3-agile_mail_grid_right">
                <Form
                  action="#"
                  method="post"
                  onSubmit={this.onSubmitSignUpForm}
                  className="signupForm"
                >
                  <div className="col-md-12 col-sm-12 mb-2">
                    <input
                      type="password"
                      id="oldPassword"
                      placeholder="Nhập mật khẩu cũ"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 contact_left_grid mb-2">
                    <input
                      type="password"
                      id="newPassword"
                      placeholder="Nhập mật khẩu mới"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 contact_left_grid mb-5">
                    <input
                      type="password"
                      id="re-password"
                      placeholder="Nhập lại mật khẩu mới"
                      required=""
                    />
                  </div>

                  <input
                    type="submit"
                    value="Lưu lại"
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
export default ChangePassw;
