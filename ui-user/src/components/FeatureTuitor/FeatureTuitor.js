import React from 'react';
import { Container } from 'react-bootstrap';
import './FeatureTuitor.css';

import CardList from '../CardList';

class FeatureTuitor extends React.PureComponent {
	render() {
		const { style, listTeachers } = this.props;
		return (
			<section style={style}>
				<Container>
					<h2>
						<div className="title">
							Giáo Viên
{' '}
							<span>Nổi Bật</span>
						</div>
					</h2>
					<div>
						<h4 style={{ paddingLeft: '90%' }}>
							<a href="/teacherslist">
								Xem thêm
{' '}
								<i className="fas fa-arrow-right" />
								{' '}
							</a>
						</h4>
					</div>
					<div style={{ marginTop: '2rem' }}>
						<CardList listTeachers={listTeachers} />
					</div>
				</Container>
			</section>
		);
	}
}

export default FeatureTuitor;
