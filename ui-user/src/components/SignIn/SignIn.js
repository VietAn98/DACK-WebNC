import React from 'react';
import { Container, Form } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
// import Swal from 'sweetalert2';
import history from '../../history';
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
				message: 'Không được để trống Email.'
			},
			{
				field: 'password',
				method: 'isEmpty',
				validWhen: false,
				message: 'Không được để trống mật khẩu.'
			}
		];
		this.validator = new Validator(rules);
	}

	onSubmitSignInForm = (e) => {
		e.preventDefault();
		const { loginRequest } = this.props;
		const gmail = document.getElementById('gmail').value;
		const password = document.getElementById('password').value;

		console.log('gmail, password:', gmail, password);
		Promise.resolve(loginRequest(gmail, password)).then(() => {
			const { user } = localStorage;
			if (user) {
				if (user.categoryUser === 1) {
					if (user.state === 1) {
						if (user.introduce === null) {
							history.push('/teaching');
							window.location.reload();
						} else {
							history.push('/');
							window.location.reload();
						}
					}
				} else {
					history.push('/');
					window.location.reload();
				}
			} else {
				history.push('/');
				window.location.reload();
			}
			console.log('usser localStorage', user);
		});
		// .catch(() => {
		// 	Swal.fire({
		// 		icon: 'error',
		// 		title: 'Đăng Nhập Thất Bại',
		// 		text: 'Xin hãy kiểm tra lại thông tin!'
		// 		// footer: '<a href>Đến Trang Chủ</a>',
		// 	});
		// });
	};

  render() {
    const responseFacebook = response => {
      console.log(response);
      const tokenBlob = new Blob(
        [JSON.stringify({ access_token: response.accessToken }, null, 2)],
        { type: "application/json" }
      );
      console.log("response", tokenBlob);        
      console.log("response", response.accessToken);  

      const options = {
        method: "POST",
        body: tokenBlob,
        mode: "cors",
		cache: "default",
		headers: {
			Accept: 'application/json', 'Content-Type': 'application/json',
		},
      };
      fetch("http://localhost:3001/api/auth/facebook", options).then(r => {
        const token = r.headers.get("x-auth-token");
        r.json().then(user => {
          if (token) {
            // this.setState({ isAuthenticated: true, user, token });
            console.log("--------------------", token, user);
          }
        });
      });
      // console.log('responseFb', response);

			// const { loginRequest } = this.props;

			// const gmail = response.email;
			// const password = response.id;

			// Promise.resolve(loginRequest(gmail, password)).then(() => {
			// 	history.push('/');
			// 	window.location.reload();
			// });
		};

		const responseGoogle = (response) => {
			console.log('responseGG', response);

			const { loginRequest } = this.props;

			const gmail = response.w3.U3;
			const password = response.w3.Eea;

			Promise.resolve(loginRequest(gmail, password)).then(() => {
				history.push('/');
				window.location.reload();
			});
		};

		return (
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
									<div className="col-md-10 col-sm-10 pb-5">
										<input
											type="email"
											id="gmail"
											placeholder="Email"
											required=""
										/>
									</div>
									<div className="col-md-10 col-sm-10 pb-5">
										<input
											type="password"
											id="password"
											placeholder="Nhập mật khẩu"
											required=""
										/>
									</div>
									<input type="submit" value="Đăng nhập" />
								</Form>

								<div style={{ textAlign: 'center' }}>
									<h4 className="mt-4 text-white">Hoặc</h4>
									<h5 className="text-white">Đăng nhập tài khoản bằng</h5>
									{/* <a
										href="https://facebook.com"
										target="_blank"
										rel="noopener noreferrer"
										className="fb-btn"
									>
										<div>
											<i className="fa fa-facebook fa-fw" />
											Facebook
										</div>
									</a>
									<a
										href="https://google.com.vn"
										target="_blank"
										rel="noopener noreferrer"
										className="google-btn"
									>
										<div>
											<i className="fa fa-google fa-fw" />
											Google+
										</div>
									</a> */}
									<FacebookLogin
										appId="440333676888106"
										fields="name,email,picture"
										callback={responseFacebook}
										size="small"
										textButton="Facebook"
									/>
									<GoogleLogin
										clientId="393244693223-24j22eqh4v3polhcc1tmmga6dnn40g1u.apps.googleusercontent.com" // CLIENTID NOT CREATED YET
										buttonText="GOOGLE"
										onSuccess={responseGoogle}
										onFailure={responseGoogle}
									/>
									<h5 className="text-white">
										Bạn chưa có tài khoản? Hãy
  									<a
											href="/signup"
											target="_blank"
											rel="noopener noreferrer"
											className="a-href"
  									>
											<span> Đăng ký</span>
           </a>
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
