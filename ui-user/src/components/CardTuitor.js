import React, { Component } from 'react';
import './CardTuitor.css';
import avatar from '../public/images/avatar.jpg';
import { Button } from 'react-bootstrap';

export class Card extends Component {
	render() {
		return (
			<div style={this.props.style}>
				<div className="cardTuitor">
					<img src={avatar} alt="avatar" />
					<div className="cardCaption">
						<div className="cardInfo">
							<h4>Nguyễn Văn A</h4>
							<div>HTML, CSS, React</div>
							<div>Giá thuê: 90000 VND/giờ</div>
							<div style={{ marginTop: '1.5rem' }}>
								<Button variant="primary" className="mx-2" size="lg">
									Thông Tin
								</Button>
								<Button variant="danger" className="mx-2" size="lg">
									Thuê Ngay
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
