/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Container, Row, Col, Form
} from 'react-bootstrap';
import './TeacherList.css';
import CardTuitor from '../CardTuitor';
import star from '../../public/images/star.png';

class TeacherList extends React.PureComponent {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = () => {
    const { getListTeacher, getListCity, getListSkills } = this.props;
    getListTeacher();
    getListCity();
    getListSkills();
  };

  onChangeCity = (e) => {
    const { getDistrictByIdCity } = this.props;
    getDistrictByIdCity(e.target.value);
  };

  sortPriceIncrease = () => {
    const { sortIncreaseByPrice } = this.props;
    sortIncreaseByPrice();
  };

  sortPriceDecrease = () => {
    const { sortDecreaseByPrice } = this.props;
    sortDecreaseByPrice();
  };

  sortDecreaseByRateSuccess = () => {
    const { sortDecreaseByRateSuccess } = this.props;
    sortDecreaseByRateSuccess();
  };

  filterByMinPrice = () => {
    const { filterPriceMin } = this.props;
    filterPriceMin();
  };

  filterByMiddlePrice = () => {
    const { filterPriceMiddle } = this.props;
    filterPriceMiddle();
  };

  filterByMaxPrice = () => {
    const { filterPriceMax } = this.props;
    filterPriceMax();
  };

  filterByOneStars = () => {
    const { filterByOneStar } = this.props;
    filterByOneStar();
  };

  filterByTwoStars = () => {
    const { filterByTwoStar } = this.props;
    filterByTwoStar();
  };

  filterByThreeStars = () => {
    const { filterByThreeStar } = this.props;
    filterByThreeStar();
  };

  filterByFourStars = () => {
    const { filterByFourStar } = this.props;
    filterByFourStar();
  };

  filterByFiveStars = () => {
    const { filterByFiveStar } = this.props;
    filterByFiveStar();
  };

  onChangeDistrict = (obj) => {
    const { getTeacherByDistrict } = this.props;
    const id = obj.target.value;
    getTeacherByDistrict(id);
  };

  onChangeSkills = (obj) => {
    const id = obj.target.value;
    const { filterSkillTeacher } = this.props;
    filterSkillTeacher(id);
    // getTeaacherBySkill
  };

  render() {
    const {
      listTeachers, listCity, districtNames, listSkills
    } = this.props;
    // console.log("listSkillslistSkillslistSkills", listTeachers);
    return (
      <Container className="bodyChat">
        <div className="flex-nowrap">
          <div className="mt-5em">
            <div className="title">
              <h1>
                DANH SÁCH
{' '}
                <span>GIÁO VIÊN</span>
              </h1>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 mt-5 mb-5">
            <Row className="mb-5">
              <Col sm={12}>
                {/* <CardTuitor /> */}
                <div className="sidebar">
                  <div className="inner-sidebar">
                    <div className="sm-title mb-4">
                      <p className="text-center ">Sắp Xếp</p>
                    </div>
                    <div className="pl-4 column-flex mb-3 ">
                      <Form>
                        <Form.Check
                          custom
                          inline
                          label="Giá tiền/giờ tăng dần"
                          type="radio"
                          id="custom-inline-radio-1"
                          name="radSort"
                          onClick={this.sortPriceIncrease}
                        />
                        <Form.Check
                          custom
                          inline
                          label="Giá tiền/giờ giảm dần"
                          type="radio"
                          id="custom-inline-radio-2"
                          name="radSort"
                          onClick={this.sortPriceDecrease}
                        />
                        <Form.Check
                          custom
                          inline
                          label="Phổ biến nhất"
                          type="radio"
                          id="custom-inline-radio-3"
                          name="radSort"
                          onClick={this.sortDecreaseByRateSuccess}
                        />
                      </Form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <div className="sidebar">
                  <div className="inner-sidebar">
                    <div className="sm-title mb-4">
                      <p className="text-center ">Lọc</p>
                    </div>
                    <div className="column-flex mb-3 ">
                      <b className="">
                        <i className="fa fa-fish" />
                        Giá tiền/giờ:
                      </b>
                      <Form className="pl-3">
                        <div>
                          <Form.Check
                            custom
                            inline
                            label=""
                            type="radio"
                            id="custom-inline-radio-4"
                            name="radSort"
                            onClick={this.filterByMinPrice}
                          />
                          <label>
                            Dưới
                            <b> 100,000đ</b>
                          </label>
                        </div>

                        <Form.Check
                          custom
                          inline
                          label=""
                          type="radio"
                          id="custom-inline-radio-5"
                          name="radSort"
                          onClick={this.filterByMiddlePrice}
                        />
                        <label>
                          Từ
{' '}
                          <b>100,000đ</b>
                          {' '}
                          <i className="fas fa-arrow-right" />
                          {' '}
                          <b>500,000đ</b>
                        </label>

                        <Form.Check
                          custom
                          inline
                          label=""
                          type="radio"
                          id="custom-inline-radio-6"
                          name="radSort"
                          onClick={this.filterByMaxPrice}
                        />
                        <label>
                          Trên
{' '}
                          <b> 500,000đ </b>
                        </label>
                      </Form>

                      <b className="mt-3">
                        <i className="fa fa-fish" />
                        Rating:
                      </b>
                      <Form className="pl-3">
                        <div>
                          <Form.Check
                            custom
                            inline
                            label=""
                            type="radio"
                            id="star1"
                            name="radSort"
                            onClick={this.filterByOneStars}
                            style={{ cursor: 'pointer' }}
                          >
                          </Form.Check>
                          <img className="img-star" alt="star" src={star} />
                        </div>

                        <div>
                          <Form.Check
                            custom
                            inline
                            label=""
                            type="radio"
                            id="star2"
                            name="radSort"
                            onClick={this.filterByTwoStars}
                          />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                        </div>
                        <div>
                          <Form.Check
                            custom
                            inline
                            label=""
                            type="radio"
                            id="star3"
                            name="radSort"
                            onClick={this.filterByThreeStars}
                          />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                        </div>
                        <div>
                          <Form.Check
                            custom
                            inline
                            label=""
                            type="radio"
                            id="star4"
                            name="radSort"
                            onClick={this.filterByFourStars}
                          />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                        </div>
                        <div>
                          <Form.Check
                            custom
                            inline
                            label=""
                            type="radio"
                            id="star5"
                            name="radSort"
                            onClick={this.filterByFiveStars}
                          />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                          <img className="img-star" alt="star" src={star} />
                        </div>
                      </Form>

                      <b className="mt-3">
                        <i className="fa fa-fish" />
                        Theo địa điểm:
                      </b>
                      <Form className="pl-3">
                        <div className="">
                          Tỉnh:
                          <Form.Control
                            as="select"
                            className="select-form-city"
                            id="selectCity"
                            required
                            onChange={this.onChangeCity}
                          >
                            {listCity
                              ? listCity.map((item) => (
                                <option
                                  value={item.cityId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              ))
                              : null}
                          </Form.Control>
                        </div>
                        <div className="pt-3">
                          Quận/Thành phố:
                          <Form.Control
                            as="select"
                            className="select-form-city"
                            id="selectDistrict"
                            onChange={this.onChangeDistrict.bind(this)}
                          >
                            {districtNames.length !== 0
                              ? districtNames.map((item) => (
                                <option
                                  value={item.districtId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              ))
                              : null}
                          </Form.Control>
                        </div>
                      </Form>

                      <b className="mt-3">
                        <i className="fa fa-fish" />
                        Theo kỹ năng:
                      </b>
                      <Form className="pl-3">
                        <div className="">
                          <Form.Control
                            as="select"
                            className="select-form-city"
                            id="selectSkills"
                            onChange={this.onChangeSkills.bind(this)}
                          >
                            <option value="0" className="black-title" />
                            {listSkills
                              ? listSkills.map((item) => (
                                <option
                                  value={item.skillId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              ))
                              : null}
                          </Form.Control>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="col-md-9 col-sm-9 mt-5 mb-5">
            {listTeachers.length !== 0 ? (
              listTeachers.map((item) => (

                <div className="col-md-4 col-sm-4">
                  <CardTuitor listTeachers={item} />
                </div>

              ))
            ) : (
                <div className="loader" style={{ margin: 'auto' }} />
              )}
          </div>
        </div>
      </Container>
    );
  }
}

export default TeacherList;
