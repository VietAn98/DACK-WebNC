import React from 'react';
import jwtDecode from 'jwt-decode';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AfterLogin from '../AfterLogin/AfterLogin';
import './Header.css';

class Header extends React.PureComponent {
	render() {
		// const tokenn = localStorage.token;
		// let decoded = null;
		// if (tokenn) {
		// 	decoded = jwtDecode(tokenn);
		// 	// console.log('decoded', decoded);
		// }
		const { userProfile } = this.props;
		console.log('userProfile', userProfile);

		return (
			<div>
				<header>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
						<Container>
							<NavLink to="/">
								<Navbar.Brand style={{ fontWeight: 'bold', fontSize: '2rem' }}>
									GIA SƯ ONLINE
								</Navbar.Brand>
							</NavLink>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav>
									<div className=" d-flex ml-5">
										<NavLink to="/" className="nav-link" exact>
											Trang Chủ
										</NavLink>
										{/* {decoded.categoryUser === 0
											? (
												<NavLink to="/abc" className="nav-link">
													Danh Sách Giáo Viên
												</NavLink>
											)
											: (
												<NavLink to="/abc" className="nav-link">
													Thống Kê Doanh Thu Dạy
												</NavLink>
											)} */}
									</div>
								</Nav>
								<Nav className="ml-auto">
									<div>
										{/* {tokenn ? (
											<AfterLogin />
										) : ( */}
											<div className="d-flex flex-row justify-content-end">
												<NavLink to="/signin" className="nav-link signIn">
														Đăng nhập
												</NavLink>
												<NavLink to="/signup" className="nav-link signUp">
														Đăng Ký
												</NavLink>
											</div>
										{/* )} */}
									</div>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</header>
			</div>
		);
	}
}

export default Header;
