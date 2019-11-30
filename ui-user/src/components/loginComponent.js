import React from "react";
import { Button, Form } from "react-bootstrap";
import Validator from "../utils/validator";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    const rules = [
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống Email."
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống mật khẩu."
      }
    ];
    this.validator = new Validator(rules);
  }

  render() {
    return (
      <div className="contact-sectn" id="contact">
        <div className="container">
          <h3 className="w3layouts-heading white-title">
            <span>Đăng Nhập</span>
          </h3>
          <div className="w3-agile_mail_grids justify-center">
            <div className="col-md-7 w3-agile_mail_grid_right">
              <Form
                action="#"
                method="post"
                className="justify-center flex-wrap"
              >
                <div className="col-md-10 col-sm-10 pb-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-md-10 col-sm-10 pb-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                    required=""
                  />
                </div>
                <input type="submit" value="Đăng nhập" />
              </Form>
              <h4 className="mt-4 text-white">Hoặc</h4>
              <h5 className="text-white">Đăng nhập tài khoản bằng</h5>
              <a href="#" className="fb-btn">
                <i className="fa fa-facebook fa-fw"></i> Facebook
              </a>
              <a href="#" className="google-btn">
                <i className="fa fa-google fa-fw"></i> Google+
              </a>
              <h5 className="text-white">Bạn chưa có tài khoản? Hãy <a href="" className="a-href">Đăng ký</a> cho mình một tài khoản nhé!</h5>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
