import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import numeral from 'numeral';
import history from '../history';
import './CardTuitor.css';
import avatar from '../public/images/avatar.jpg';

class Card extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   // const { listTeachers, listNameSkill } = this.props;
  //   // listNameSkill(listTeachers.userId);
  // }

  onnclicks = (id) => {
    history.push(`/teacher-info/${id}`);
  };

  onClickHire = (id) => {
    history.push(`/contract/teacher-${id}`);
  };

  render() {
    const { listTeachers, style } = this.props;
    // console.log('3333333333333333333s3', listTeachers);
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
                <div>
                  Giá thuê:
{' '}
                  {numeral(`${listTeachers.price}`).format('(0,0)')}
                  {' '}
                  VND/giờ
                </div>
                {listTeachers.rateSuccess <= 20
                  && listTeachers.rateSuccess > 0 ? (
                    <div className="stars mt-2">
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                    </div>
                  ) : null}
                {listTeachers.rateSuccess <= 40
                  && listTeachers.rateSuccess > 20 ? (
                    <div className="stars mt-2">
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                    </div>
                  ) : null}
                {listTeachers.rateSuccess <= 60
                  && listTeachers.rateSuccess > 40 ? (
                    <div className="stars mt-2">
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                    </div>
                  ) : null}
                {listTeachers.rateSuccess <= 80
                  && listTeachers.rateSuccess > 60 ? (
                    <div className="stars mt-2">
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star-o" aria-hidden="true" />
                      </li>
                    </div>
                  ) : null}
                {listTeachers.rateSuccess > 80 ? (
                  <div className="stars mt-2">
                    <li>
                      <span className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <span className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <span className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <span className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li>
                      <span className="fa fa-star" aria-hidden="true" />
                    </li>
                  </div>
                ) : null}
                <div style={{ marginTop: '2.5rem' }}>
                  <Button
                    variant="primary"
                    className="mx-2"
                    size="sm"
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={this.onnclicks.bind(this, listTeachers.userId)}
                  >
                    Thông Tin
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    size="sm"
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={this.onClickHire.bind(this, listTeachers.userId)}
                  >
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
