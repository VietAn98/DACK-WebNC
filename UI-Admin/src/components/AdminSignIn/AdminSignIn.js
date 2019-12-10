import React from "react";
import { Container, Form, Spinner } from "react-bootstrap";
// import { connect } from "react-redux";
import "./AdminSignIn.css";

export class AdminSignIn extends React.PureComponent {
  onSubmitSignInForm = e => {
    e.preventDefault();
    const { login, noLogin } = this.props;
    login();
    const { adminLogin } = this.props;
    const gmail = document.getElementById("gmail").value;
    const password = document.getElementById("password").value;
    adminLogin(gmail, password);
    // noLogin();
  };

  render() {
    const { isSigInn } = this.props;
    // const {isLogin} = isSigIn
    console.log(isSigInn);

    return (
      <div className="adminSignIn" style={{ padding: "8rem" }}>
        <Container>
          <div className="">
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: "20px",
                paddingBottom: "3rem"
              }}
            >
              <h3 className="w3layouts-heading white-title mb-3">
                <span>Đăng Nhập</span>
              </h3>
              <div className="w3-agile_mail_grids justify-center">
                <div className="col-md-7 w3-agile_mail_grid_right">
                  <Form
                    action="#"
                    method="post"
                    className="justify-center flex-wrap"
                    onSubmit={this.onSubmitSignInForm}
                  >
                    <div className="col-md-12 col-sm-12 pb-3 text-white">
                      <input
                        type="email"
                        id="gmail"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 pb-5 text-white">
                      <input
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        required=""
                      />
                    </div>
                    {isSigInn.isLogin ? (
                      <div>
                        {" "}
                        <Spinner animation="border" role="status">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </div>
                    ) : null}
                    <input type="submit" value="Đăng nhập" />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AdminSignIn;
