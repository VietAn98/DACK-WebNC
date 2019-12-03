import React from "react";
import { Container, Form } from "react-bootstrap";

import "./AdminSignUp.css";

export class AdminCreate extends React.PureComponent {
  onSubmitSignUpForm = e => {
    e.preventDefault();
    const { adminCreateAccount } = this.props;
    const gmail = document.getElementById("gmail").value;
    const password = document.getElementById("password").value;
	const name = document.getElementById("name").value;
	adminCreateAccount(name,gmail,password)
	
	document.getElementById("gmail").value = "";
    document.getElementById("password").value = "";
	document.getElementById("name").value = "";

  };

  render() {
    return (
      <div className="adminSignUp" style={{ marginTop: "7rem" }}>
        <Container>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "20px",
              paddingBottom: "3rem"
            }}
          >
            <h3 className="w3layouts-heading white-title mb-4">
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
                  <div className="col-md-12 col-sm-12 ">
                    <input
                      type="text"
                      id="name"
                      placeholder="Họ và tên"
                      required=""
                    />
                  </div>

                  <br />
                  <div className="col-md-12 col-sm-12 mb-4">
                    <input
                      type="email"
                      id="gmail"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 contact_left_grid mb-4">
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
                      textAlign: "center",
                      transform: "translateX(50%)"
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
