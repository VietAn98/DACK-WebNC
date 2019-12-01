import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Validator from '../../utils/validator';
import './SignIn.css';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    const rules = [
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống Email.',
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống mật khẩu.',
      },
    ];
    this.validator = new Validator(rules);
  }

  render() {
    return (
      <div className="contact-sectn" id="contact">
        <Container>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '20px', paddingBottom: '3rem' }}>
            <h3 className="w3layouts-heading white-title">
              <span>Đăng Nhập</span>
            </h3>
            <div className="w3-agile_mail_grids justify-center">
              <div className="col-md-7 w3-agile_mail_grid_right">
                <Form action="#" method="post" className="justify-center flex-wrap">
                  <div className="col-md-10 col-sm-10 pb-5">
                    <input type="email" name="email" placeholder="Email" required="" />
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

                <div style={{ textAlign: 'center' }}>
                  <h4 className="mt-4 text-white">Hoặc</h4>
                  <h5 className="text-white">Đăng nhập tài khoản bằng</h5>
                  <a href="#" className="fb-btn">
                    <i className="fa fa-facebook fa-fw" />
                    {' '}
Facebook
                  </a>
                  <a href="#" className="google-btn">
                    <i className="fa fa-google fa-fw" />
                    {' '}
Google+
                  </a>
                  <h5 className="text-white">
Bạn chưa có tài khoản? Hãy
                    {' '}
                    <a href="/signup" className="a-href">
                      {' '}
Đăng ký
                    </a>
                    {' '}
cho mình một tài khoản nhé!
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
