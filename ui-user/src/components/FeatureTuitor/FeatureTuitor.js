import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './FeatureTuitor.css';

import CardList from '../CardList';

export class FeatureTuitor extends Component {
	render() {
		return (
			<section style={this.props.style}>
				<Container>
					<h2>
						<div className="title">
							Giáo Viên <span>Nổi Bật</span>
						</div>
					</h2>
					<div style={{ marginTop: '2rem' }}>
						<CardList />
					</div>
				</Container>
			</section>
		);
	}
}

export default FeatureTuitor;
