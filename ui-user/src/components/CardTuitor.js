import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "../history";
import "./CardTuitor.css";
import avatar from "../public/images/avatar.jpg";

class Card extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   // const { listTeachers, listNameSkill } = this.props;
  //   // listNameSkill(listTeachers.userId);
  // }

  onnclicks = id => {
    history.push(`/teacher-info/${id}`);
  };

  render() {
    const { listTeachers, style } = this.props;
    // console.log('listTeacherslistTeacherslistTeachers', nameSkill[0]);
    return (
      <div style={style}>
        {listTeachers ? (
          <div className="cardTuitor">
            <img src={avatar} alt="avatar" />
            <div className="cardCaption">
              <div className="cardInfo">
                <h6>{listTeachers.name}</h6>
                {/* {nameSkill ? (<div>{nameSkill.name}</div>) : null} */}
                <div>Giá thuê: {listTeachers.price} VND/giờ</div>
                <div style={{ marginTop: "1.5rem" }}>
                  <Button
                    variant="primary"
                    className="mx-2"
                    size="sm"
                    onClick = {this.onnclicks.bind(this, listTeachers.userId)}
                  >
                    Thông Tin
                  </Button>
                  <Button variant="danger" className="mx-2" size="sm">
                    Thuê Ngay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
