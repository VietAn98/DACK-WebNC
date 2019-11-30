import React, { Component } from 'react';
import CardTuitor from './CardTuitor';

export class CardList extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<CardTuitor />
					</div>
					<div className="col-md-4 col-sm-12">
						<CardTuitor />
					</div>
					<div className="col-md-4 col-sm-12">
						<CardTuitor />
					</div>
					<div className="col-md-4 col-sm-12">
						<CardTuitor />
					</div>
					<div className="col-md-4 col-sm-12">
						<CardTuitor />
					</div>
					<div className="col-md-4 col-sm-12">
						<CardTuitor />
					</div>
				</div>
			</div>
		);
	}
}

export default CardList;
