import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import avatar1 from '../../public/images/avatar.jpg';
import './AfterLogin.css';

class AfterLogin extends React.PureComponent {
	// eslint-disable-next-line react/no-deprecated
	componentWillMount = () => {
		const { getUserInfor } = this.props;
		const user = JSON.parse(localStorage.getItem('user'));
		console.log('user', user);
		getUserInfor(user.userId);
	}

	render() {
		const tokenn = localStorage.token;
		let decoded = null;
		if (tokenn) {
			decoded = jwtDecode(tokenn);
		}
		const { signOut, userProfiles } = this.props;
		console.log('userProfiles', userProfiles);
		return (
			<div>
				<div className="after-login">
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							<div className="d-flex flex-row justify-content-around ">
								<div style={{ width: '30px', height: '30px' }}>
									<img style={{ width: '100%', borderRadius: '50%' }} alt="avatar" src={avatar1} />
								</div>
								{tokenn ? (
								<div
									style={{
										fontSize: '1.3rem',
										marginLeft: '10px',
										lineHeight: '30px',
										verticalAlign: 'middle'
									}}
								>

										{userProfiles.name}
									{' '}
									&#x25bc;
								</div>
								) : (
									<div className="d-flex flex-row justify-content-end">
										<NavLink to="/signin" className="nav-link signIn">
											Đăng nhập
										</NavLink>
										<NavLink to="/signup" className="nav-link signUp">
											Đăng Ký
										</NavLink>
									</div>
								)}
							</div>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="/Settings#myinformation">
								<i className="fas fa-user-cog" />
								{' '}
								Settings
								{' '}
							</Dropdown.Item>
							<Dropdown.Item href="/" onClick={signOut}>
								<i className="fas fa-sign-out-alt" />
								{' '}
								Log Out
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		);
	}
}

export default AfterLogin;
