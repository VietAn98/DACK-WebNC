import React from 'react';
import CardTuitor from './CardTuitor';

class CardList extends React.PureComponent {
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
