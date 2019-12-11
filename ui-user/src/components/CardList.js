import React from "react";
import CardTuitor from "./CardTuitor";

class CardList extends React.PureComponent {
  render() {
    const { listTeachers } = this.props;
    return (
      <div>
        <div className="row">
          {listTeachers
            ? listTeachers.map(listTeachers => {
                return (
                  <div className="col-md-4 col-sm-12">
                    <CardTuitor listTeachers={listTeachers} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default CardList;
