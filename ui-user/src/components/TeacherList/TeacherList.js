import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CardTuitor from '../CardTuitor';
import './TeacherList.css';
import star from '../../public/images/star.png';

class TeacherList extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = () => {
        const { getListTeacher, getListCity } = this.props;
        getListTeacher();
        getListCity();
    }

    onChangeCity = (e) => {
        const { getDistrictByIdCity } = this.props;
        getDistrictByIdCity(e.target.value);
    }

    render() {
        const { listTeachers, listCity, districtNames } = this.props;
        // console.log('cityListcityListcityList', cityList);
        return (
            <Container>
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
                                                    label="Giá tiền/giờ cao nhất"
                                                    type="radio"
                                                    id="custom-inline-radio-1"
                                                    name="radSort"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    label="Giá tiền/giờ thấp nhất"
                                                    type="radio"
                                                    id="custom-inline-radio-2"
                                                    name="radSort"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    label="Phổ biến nhất"
                                                    type="radio"
                                                    id="custom-inline-radio-3"
                                                    name="radSort"
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
                                                        id="custom-inline-radio-1"
                                                        name="radSort"
                                                    />
                                                    <label>
                                                        Dưới
                                                        <b> 100 000đ</b>
                                                    </label>
                                                </div>

                                                <Form.Check
                                                    custom
                                                    inline
                                                    label=""
                                                    type="radio"
                                                    id="custom-inline-radio-2"
                                                    name="radSort"
                                                />
                                                <label>
                                                    Từ
                                                    {' '}
                                                    <b>100 000đ</b>
                                                    {' '}
                                                    <i className="fas fa-arrow-right" />
                                                    {' '}
                                                    <b>500 000đ</b>
                                                </label>

                                                <Form.Check
                                                    custom
                                                    inline
                                                    label=""
                                                    type="radio"
                                                    id="custom-inline-radio-3"
                                                    name="radSort"
                                                />
                                                <label>
                                                    Trên
                                                    {' '}
                                                    <b>500 000đ </b>
                                                </label>
                                            </Form>

                                            <b className="">
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
                                                    />
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
                                                    />
                                                    <img className="img-star" alt="star" src={star} />
                                                    <img className="img-star" alt="star" src={star} />
                                                    <img className="img-star" alt="star" src={star} />
                                                    <img className="img-star" alt="star" src={star} />
                                                    <img className="img-star" alt="star" src={star} />
                                                </div>
                                            </Form>

                                            <b className="">
                                                <i className="fa fa-fish" />
                                                Theo địa điểm:
                                            </b>
                                            <Form className="pl-3">
                                                <div className="pt-3">
                                                    Tỉnh:
                                                    <Form.Control
                                                        as="select"
                                                        className="select-form-city"
                                                        id="selectCity"
                                                        required
                                                        onChange={this.onChangeCity}
                                                    >
                                                        <option value="0" className="black-title" />
                                                        {listCity ? (
                                                            listCity.map((item) => {
                                                                return (
                                                                    <option value={item.cityId} className="black-title">
                                                                        {item.name}
                                                                    </option>
                                                                );
                                                            })
                                                        ) : null}

                                                    </Form.Control>
                                                </div>
                                                <div className="pt-3">
                                                    Quận/Thành phố:
                                                    <Form.Control
                                                        as="select"
                                                        className="select-form-city"
                                                        id="selectDistrict"
                                                        required
                                                    >
                                                        {districtNames.length !== 0 ? (districtNames.map((item) => {
                                                            return (
                                                                <option value={item.districtId} className="black-title">
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        })) : null}
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
                        {listTeachers.map((item) => {
                            return (
                                <div className="col-md-4 col-sm-4">
                                    <CardTuitor listTeachers={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>

        );
    }
}

export default TeacherList;
