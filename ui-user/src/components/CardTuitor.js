import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../history';
import './CardTuitor.css';
import avatar from '../public/images/avatar.jpg';

class Card extends React.PureComponent {
	onClickCard = () => {
		history.push('/teacherinfo');
	}

	render() {
		const { listTeachers, style } = this.props;
		console.log('listTeacherslistTeacherslistTeachers', listTeachers);
		return (
			<div style={style}>
				<div className="cardTuitor">
					<img src={avatar} alt="avatar" />
					<div className="cardCaption">
						<div className="cardInfo">
							<h6>{listTeachers ? listTeachers.name : null}</h6>
							<div>HTML, CSS, React</div>
							<div>
								Giá thuê:
								{' '}
								{listTeachers ? listTeachers.price : null}
								{' '}
								VND/giờ
							</div>
							<div style={{ marginTop: '1.5rem' }}>
								<Button variant="primary" className="mx-2" size="sm" onClick={this.onClickCard}>
									Thông Tin
								</Button>
								<Button variant="danger" className="mx-2" size="sm">
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
