import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './SignUp.css';

class Register extends React.PureComponent {
  onChangeSelection = (e) => {
    console.log(e.target.value);
  };

  onSubmitSignUpForm = (e) => {
    e.preventDefault();
    // console.log(document.getElementById("selectGender").value);
    const { registerRequest } = this.props;
    const name = document.getElementById('name').value;
    const gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;
    const districtId = document.getElementById('district').value;
    const gender = document.getElementById('selectGender').value;
    const categoryUser = document.getElementById('categoryUser').value;

    Promise.resolve(
      registerRequest(name, gmail, password, districtId, gender, categoryUser)
    ).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Đăng Kí Thành Công',
        text: 'Một đường dẫn kích hoạt tài khoản đã được gửi đến Email của bạn. Xin hãy kiểm tra email và kích hoạt tài khoản để tiếp tục sử dụng trang web!',
        // footer: '<a href>Đến Trang Chủ</a>',
      });
    });
  };

  render() {
    return (
      <div className="contact-sectn" id="contact">
        <Container>
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '20px',
              paddingBottom: '3rem',
            }}
          >
            <h3 className="w3layouts-heading white-title">
              <span>Đăng Ký</span>
            </h3>
            <div className="w3-agile_mail_grids justify-center">
              <div className="col-md-7 w3-agile_mail_grid_right">
                <Form
                  action="#"
                  method="post"
                  onSubmit={this.onSubmitSignUpForm}
                  className="signupForm"
                >
                  <div className="col-md-9 col-sm-9 contact_left_grid">
                    <input
                      type="text"
                      id="name"
                      placeholder="Họ và tên"
                      required=""
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 contact_left_grid">
                    <div className="form-checkbox">
                      <Form.Control
                        as="select"
                        className="select-form"
                        id="selectGender"
                      >
                        <option className="black-title" value="Nam">
                          Nam
                        </option>
                        <option className="black-title" value="Nữ">
                          Nữ
                        </option>
                      </Form.Control>
                    </div>
                  </div>
                  <br />
                  <div className="col-md-12 col-sm-12">
                    <input
                      type="email"
                      id="gmail"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 contact_left_grid pt-3">
                    <Form.Control as="select" className="select-form" id="city">
                      <option className="black-title" value="1">
                        TP Hồ Chí Minh
                      </option>
                      <option className="black-title" value="0">
                        ...
                      </option>
                    </Form.Control>
                    <input
                      type="password"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 contact_left_grid pt-3">
                    <Form.Control as="select" className="select-form" id="district">
                      <option className="black-title" value="1">
                        Quận Bình Thạnh
                      </option>
                      <option className="black-title" value="0">
                        ...
                      </option>
                    </Form.Control>
                    <input
                      type="password"
                      id="re-password"
                      placeholder="Nhập lại mật khẩu"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 pb-4">
                    <h5 className="float-left text-white pt-4">
                      <b>Bạn muốn đăng kí tài khoản để trở thành:</b>
                    </h5>
                    <Form.Control
                      as="select"
                      className="select-form"
                      onChange={this.onChangeSelection}
                      id="categoryUser"
                    >
                      <option className="black-title" value="0">
                        Học viên
                      </option>
                      <option className="black-title" value="1">
                        Giáo viên
                      </option>
                    </Form.Control>
                    <div className="clearfix" />
                  </div>
                  <input
                    type="submit"
                    value="Đăng ký"
                    className="signUpSubmit"
                  />
                </Form>

                <div style={{ textAlign: 'center' }}>
                  <h4 className="mt-4 text-white">Hoặc</h4>
                  <h5 className="text-white">Đăng kí tài khoản bằng</h5>
                  <a href="#" className="fb-btn">
                    <i className="fa fa-facebook fa-fw" /> Facebook
                  </a>
                  <a href="#" className="google-btn">
                    <i className="fa fa-google fa-fw" /> Google+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Register;
