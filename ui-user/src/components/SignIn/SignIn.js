import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
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
		Promise.resolve(loginRequest(gmail, password))
			.then(() => {
				Swal.fire({
					icon: 'success',
					title: 'Đăng Nhập Thành Công',
					text:
						'Một đường dẫn kích hoạt tài khoản đã được gửi đến Email của bạn. Xin hãy kiểm tra email và kích hoạt tài khoản để tiếp tục sử dụng trang web!'
					// footer: '<a href>Đến Trang Chủ</a>',
				});
			})
			.catch(() => {
				Swal.fire({
					icon: 'error',
					title: 'Đăng Nhập Thất Bại',
					text: 'Xin hãy kiểm tra lại thông tin!'
					// footer: '<a href>Đến Trang Chủ</a>',
				});
			});
	};

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
								<Form
									action="#"
									method="post"
									className="justify-center flex-wrap"
									onSubmit={this.onSubmitSignInForm}
								>
									<div className="col-md-10 col-sm-10 pb-5">
										<input type="email" id="gmail" placeholder="Email" required="" />
									</div>
									<div className="col-md-10 col-sm-10 pb-5">
										<input type="password" id="password" placeholder="Nhập mật khẩu" required="" />
									</div>
									<input type="submit" value="Đăng nhập" />
								</Form>

								<div style={{ textAlign: 'center' }}>
									<h4 className="mt-4 text-white">Hoặc</h4>
									<h5 className="text-white">Đăng nhập tài khoản bằng</h5>
									<a
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
									</a>
									<h5 className="text-white">
										Bạn chưa có tài khoản? Hãy
										<a href="/signup" target="_blank" rel="noopener noreferrer" className="a-href">
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
