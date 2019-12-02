import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AfterLogin from '../AfterLogin/AfterLogin';

import './Header.css';

class Header extends React.PureComponent {
	render() {
		//get user, if login
		const isLogin = false;
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
										<NavLink to="/abc" className="nav-link">
											Danh Sách Giáo Viên
										</NavLink>
									</div>
								</Nav>
								<Nav className="ml-auto">
									<div>
										{isLogin ? (
											<AfterLogin />
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
