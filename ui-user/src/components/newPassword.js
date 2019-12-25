import React from 'react';
import Swal from 'sweetalert2';
import {
  Container, Form,
} from 'react-bootstrap';
import PageNotFound from '../pages/PageNotFound';
// import HomePage from '../containers/HomePageContainer';
import './SignIn/SignIn.css';

class NewPassword extends React.PureComponent {
  constructor(props) {
    super(props);
    const path = window.location.search.split('=');
    const keyPass = path[path.length - 1];
    // console.log(keyPass);
    const { getMailByKeyPass } = this.props;
    getMailByKeyPass(keyPass);
  }

  onSubmitNewPassForm = (e) => {
    e.preventDefault();
    const { updatePassword } = this.props;
    const newPassword = document.getElementById('password').value;
    const rePass = document.getElementById('confirm-password').value;
    if (newPassword === rePass) {
      updatePassword(newPassword);
      Swal.fire('Đang cập nhật password');
      Swal.showLoading();
    } else {
      Swal.fire('Thông báo', 'Nhập lại mật khẩu bị sai!', 'error');
    }
    // const a = req.query.email;
  };

  render() {
    const { keyPass } = this.props;
    let check = false;
    if (keyPass.length === 0) {
      check = true;
    }
    return (
      <div>
        {check ? <PageNotFound />
          : (
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
