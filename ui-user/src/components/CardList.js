import React from 'react';
import CardTuitor from './CardTuitor';

class CardList extends React.PureComponent {
  render() {
    const { listTeachers } = this.props;
    return (
      <div>
        <div className="row">
          {listTeachers.length !== 0
            ? listTeachers.map((item) => (
              <div className="col-md-4 col-sm-4" key={item.userId}>
                <CardTuitor listTeachers={item} />
              </div>
            ))
            : null}
        </div>
      </div>
    );
  }
}

export default CardList;
