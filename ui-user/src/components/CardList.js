import React from 'react';
import CardTuitor from '../containers/CardTuitorContainer';

class CardList extends React.PureComponent {
  render() {
    const { listTeachers } = this.props;
    return (
      <div>
        <div className="row">
          {listTeachers
            ? listTeachers.map((item) => (
              <div className="col-md-4 col-sm-4" key={item.userId}>
                <CardTuitor
                  listTeacherss={item}
                />
              </div>
            ))
            : null}
        </div>
      </div>
    );
  }
}

export default CardList;
