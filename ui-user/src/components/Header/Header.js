import React, { Component } from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Header.css';

export class Header extends Component {
	render() {
		return (
			<div>
				<header style={{}} className="aaaa">
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
						<Container>
							<NavLink to="/">
								<Navbar.Brand style={{ fontWeight: 'bold' }}>GIA SƯ ONLINE</Navbar.Brand>
							</NavLink>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="ml-auto">
									<NavLink to="/" className="nav-link" exact>
										Trang Chủ
									</NavLink>
									<NavLink to="/abc" className="nav-link">
										Danh Sách Giáo Viên
									</NavLink>
									<div className="d-flex flex-row justify-content-end">
										<NavLink to="/signin" className="nav-link signIn">
											Đăng nhập
										</NavLink>
										<NavLink to="/signup" className="nav-link signUp">
											Đăng Ký
										</NavLink>
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
