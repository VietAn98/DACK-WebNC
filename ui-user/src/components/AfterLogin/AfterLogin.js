import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap';
import avatar1 from '../../public/images/avatar.jpg';
import './AfterLogin.css';

export class AfterLogin extends Component {
	render() {
		return (
			<div>
				<div className="after-login">
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							<div className="d-flex flex-row justify-content-around ">
								<div style={{ width: '30px', height: '30px' }}>
									<img style={{ width: '100%', borderRadius: '50%' }} src={avatar1} />
								</div>
								<div
									style={{
										fontSize: '1.3rem',
										marginLeft: '10px',
										lineHeight: '30px',
										verticalAlign: 'middle'
									}}
								>
									Nguyễn Văn Hưng &#x25bc;
								</div>
							</div>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		);
	}
}

export default AfterLogin;
