import React from "react";
import { Container, Form } from "react-bootstrap";
import './SignUp.css';

class Register extends React.PureComponent {
  render() {
    return (
      <div className="contact-sectn" id="contact">
        <Container>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "20px",
              paddingBottom: "3rem"
            }}
          >
            <h3 className="w3layouts-heading white-title">
              <span>Đăng Ký</span>
            </h3>
            <div className="w3-agile_mail_grids justify-center">
              <div className="col-md-7 w3-agile_mail_grid_right">
                <Form action="#" method="post">
                  <div className="col-md-9 col-sm-9 contact_left_grid">
                    <input
                      type="text"
                      name="name"
                      placeholder="Họ và tên"
                      required=""
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 contact_left_grid">
                    <div className="form-checkbox float-left">
                      <Form.Check
                        className="pt-2 checkbox"
                        type="checkbox"
                        id="male"
                        label="Nam"
                      />
                      <Form.Check
                        className="pt-2 mt-3 ml-5 checkbox"
                        type="checkbox"
                        id="female"
                        label="Nữ"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-md-12 col-sm-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 pt-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Địa chỉ"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 contact_left_grid">
                    <input
                      type="password"
                      name="password"
                      placeholder="Nhập mật khẩu"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 contact_left_grid">
                    <input
                      type="password"
                      name="re-password"
                      placeholder="Nhập lại mật khẩu"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 pb-4">
                    <h5 className="float-left text-white pt-4">
                      <b>Bạn muốn đăng kí tài khoản để trở thành:</b>
                    </h5>
                    <Form.Control as="select" className="select-form">
                      <option className="black-title">Học viên</option>
                      <option className="black-title">Giáo viên</option>
                    </Form.Control>
                    <div className="clearfix" />
                  </div>
                  <input
                    type="submit"
                    value="Đăng ký"
                    className="signUpSubmit"
                  />
                </Form>

                <hr />
                <div style={{ textAlign: "center" }}>
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
