import React from 'react';
import Swal from 'sweetalert2';
import { Container, Form, Button } from 'react-bootstrap';
import numeral from 'numeral';
import moment from 'moment';
import PageNotFound from '../../pages/PageNotFound';
import './Contract.css';
// const moment = require('moment');

const today = new Date();
const Today = moment(today).format('DD-MM-YYYY');

class Contract extends React.PureComponent {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = async () => {
    const {
      getListCity,
      getSingleTeacherById,
      getListDisctrict,
      getUserInfor,
      listNameSkill,
      getCityByIdDistrict,
      getCityByIdDistrictForTeacher
    } = this.props;
    const path = window.location.pathname.split('-');
    const id = path[path.length - 1];
    const user = JSON.parse(localStorage.getItem('user'));

    getListCity();
    getSingleTeacherById(id);
    getListDisctrict();
    await getUserInfor(user.userId);
    listNameSkill(id);

    const { userProfiles, detailTeacher } = this.props;
    getCityByIdDistrict(userProfiles.districtId);
    getCityByIdDistrictForTeacher(detailTeacher.districtId);
  };

  onChangeCity1 = (e) => {
    const { getDistrictByIdCity } = this.props;
    getDistrictByIdCity(e.target.value);
  };

  addDays = (dateObj, numDays) => {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  };

  onChangeDateFrom = () => {
    const { detailTeacher, getEndDay, getTotalHour } = this.props;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    const startDay = new Date(document.getElementById('dateFrom').value);

    if (soTuan !== '') {
      const EndDay = this.addDays(startDay, soTuan * 7);
      const totalHour = soNgay * soTuan * soGio;
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
      getTotalHour(totalHour);
    }

    if (soTuan !== '' && soNgay !== '' && soGio !== '') {
      const price = document.getElementById('number').value * soTuan * (detailTeacher.price * soGio);
      document.getElementById('price').innerHTML = numeral(price).format('(0,0)');
    }
  };

  onChangeSoTuan = () => {
    const { detailTeacher, getEndDay, getTotalHour } = this.props;
    const dateFrom = document.getElementById('dateFrom').value;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    const startDay = new Date(document.getElementById('dateFrom').value);
    if (dateFrom !== '') {
      const EndDay = this.addDays(startDay, soTuan * 7);
      const totalHour = soNgay * soTuan * soGio;
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
      getTotalHour(totalHour);
    }

    if (dateFrom !== '' && soNgay !== '' && soGio !== '') {
      const price = soNgay * soTuan * (detailTeacher.price * soGio);
      document.getElementById('price').innerHTML = numeral(price).format('(0,0)');
    }
  };

  onChangeSoNgay = () => {
    const { detailTeacher, getEndDay, getTotalHour } = this.props;
    const dateFrom = document.getElementById('dateFrom').value;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    if (dateFrom !== '' && soTuan !== '' && soGio !== '') {
      const startDay = new Date(document.getElementById('dateFrom').value);
      const EndDay = this.addDays(startDay, soTuan * 7);
      const price = soNgay * soTuan * (detailTeacher.price * soGio);
      const totalHour = soNgay * soTuan * soGio;
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
      getTotalHour(totalHour);
      document.getElementById('price').innerHTML = numeral(price).format('(0,0)');
    }
  };

  onChangeTime = () => {
    const { detailTeacher, getEndDay, getTotalHour } = this.props;
    const dateFrom = document.getElementById('dateFrom').value;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    if (dateFrom !== '' && soTuan !== '' && soNgay !== '') {
      const startDay = new Date(document.getElementById('dateFrom').value);
      const EndDay = this.addDays(startDay, soTuan * 7);
      const price = soNgay * soTuan * (detailTeacher.price * soGio);
      const totalHour = soNgay * soTuan * soGio;
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
      getTotalHour(totalHour);
      document.getElementById('price').innerHTML = numeral(price).format('(0,0)');
    }
  };

  onSubmitCreateContract = (e) => {
    e.preventDefault();
    const checkcheck = document.getElementsByClassName('checkcheck');
    const dateCreate = Today;
    let isValid = false;
    for (let i = 0; i < checkcheck.length; i += 1) {
      if (checkcheck[i].children[0].checked === true) {
        isValid = true;
      }
    }
    if (isValid) {
      const dateFrom = document.getElementById('dateFrom').value;
      const soTuan = document.getElementById('soTuan').value;
      const soNgay = document.getElementById('number').value;
      const soGio = document.getElementById('numberHour').value;
      const price = document.getElementById('price').value;

      if (
        dateFrom === ''
        || soTuan === ''
        || soNgay === ''
        || soGio === ''
        || price === '0'
      ) {
        Swal.fire(
          'Cần nhập đầy đủ thông tin  để xem giá tiền trước khi thánh toán'
        );
      } else {
        Swal.fire('Đang gửi yêu cầu!');
        Swal.showLoading();
        const { createContract, endLearnDay } = this.props;
        const path = window.location.pathname.split('-');
        const idTeacher = path[path.length - 1];
        const user = JSON.parse(localStorage.getItem('user'));
        const startDay = moment(dateFrom).format('DD-MM-YYYY');
        let skills = '';
        for (let i = 0; i < checkcheck.length; i += 1) {
          if (checkcheck[i].children[0].checked === true) {
            skills += `${checkcheck[i].children[0].value},`;
          }
        }
        createContract(
          // eslint-disable-next-line radix
          parseInt(idTeacher),
          user.userId,
          price,
          startDay,
          endLearnDay,
          dateCreate,
          skills,
          soNgay,
          soGio
        );
      }
    } else {
      Swal.fire('Vui lòng chọn kĩ năng muốn học');
    }
  };

  // eslint-disable-next-line consistent-return
  render() {
    const tokenn = localStorage.token;
    const {
      listCity,
      districtNames,
      detailTeacher,
      listDistrict,
      userProfiles,
      endLearnDay,
      listNameOfSkill,
      cityName,
      cityNameForTeacher,
      totalHour
    } = this.props;
    const { skills } = listNameOfSkill;
    // console.log('totalHour', totalHour);
    if (tokenn) {
      return (
        <div className="div-container">
          <Container className="contract-container">
            <h1 className="text-center">
              <b>HỢP ĐỒNG THUÊ GIÁO VIÊN</b>
            </h1>
            <p className="text-center">
              <i>
                Ngày tạo:
                {Today}
              </i>
            </p>
            {/* <p className="text-center">
              <i>(ID: 123)</i>
            </p> */}
            <div className="my-container">
              <Form
                onSubmit={this.onSubmitCreateContract}
                action="#"
                method="post"
              >
                <div className="col-md-12 col-sm-12">
                  <div className="col-md-6 col-sm-6">
                    <div className="col-md-12 col-sm-12">
                      <Form.Label>
                        <h3>
                          <b>
                            <u>Bên A:</u>
                          </b>
                        </h3>
                      </Form.Label>
                      <br />
                    </div>
                    <Form.Group className="col-md-12 col-sm-12">
                      <Form.Label>Tôi tên là:</Form.Label>
                      <Form.Control disabled type="text" value={userProfiles.name} />
                    </Form.Group>
                    <Form.Group className="col-md-12 col-sm-12">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control disabled type="text" value={userProfiles.gmail} />
                    </Form.Group>
                    <div className="col-md-12 col-sm-12">
                      <Form.Label>Địa chỉ:</Form.Label>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-3">
                      <Form.Control
                        type="text"
                        value={userProfiles.address}
                        disabled
                      />
                    </div>
                    <div className="col-md-7 col-sm-7">
                      <Form.Control
                        disabled
                        as="select"
                        id="city1"
                        onChange={this.onChangeCity1}
                        required
                        style={{ height: '100%' }}
                      >
                        {listCity
                          ? listCity.map((item) => {
                            if (item.cityId === cityName.cityId) {
                              return (
                                <option
                                  selected
                                  value={item.cityId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              );
                            }
                            return (
                              <option value={item.cityId} className="black-title">
                                {item.name}
                              </option>
                            );
                          })
                          : null}
                      </Form.Control>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <Form.Control disabled as="select" id="district" style={{ height: '100%' }}>
                        {districtNames.length !== 0
                          ? districtNames.map((item) => (
                            <option value={item.districtId} className="black-title">
                              {item.name}
                            </option>
                          ))
                          : listDistrict.map((item) => {
                            if (item.cityId === cityName.cityId) {
                              if (item.districtId === userProfiles.districtId) {
                                return (
                                  <option
                                    selected
                                    value={item.districtId}
                                    className="black-title"
                                  >
                                    {item.name}
                                  </option>
                                );
                              }
                              return (
                                <option
                                  value={item.districtId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              );
                            }
                            return null;
                          })}
                      </Form.Control>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="col-md-12 col-sm-12">
                      <Form.Label>
                        <h3>
                          <b>
                            <u>Bên B:</u>
                          </b>
                        </h3>
                      </Form.Label>
                      <br />
                    </div>
                    <Form.Group className="col-md-12 col-sm-12">
                      <Form.Label>Tên người dạy:</Form.Label>
                      <Form.Control
                        type="text"
                        value={detailTeacher.name}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="col-md-12 col-sm-12">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="text"
                        value={detailTeacher.gmail}
                        disabled
                      />
                    </Form.Group>
                    <div className="col-md-12 col-sm-12">
                      <Form.Label>Địa chỉ:</Form.Label>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-3">
                      <Form.Control
                        type="text"
                        value={detailTeacher.address}
                        disabled
                      />
                    </div>
                    <div className="col-md-7 col-sm-7">
                      <Form.Control as="select" id="city2" disabled style={{ height: '100%' }}>
                        {listCity
                          ? listCity.map((item) => {
                            if (item.cityId === cityNameForTeacher.cityId) {
                              return (
                                <option
                                  selected
                                  value={item.cityId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              );
                            }
                            return (
                              <option value={item.cityId} className="black-title">
                                {item.name}
                              </option>
                            );
                          })
                          : null}
                      </Form.Control>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <Form.Control as="select" disabled style={{ height: '100%' }}>
                        {listDistrict.map((item) => {
                          if (item.cityId === cityName.cityId) {
                            if (item.districtId === userProfiles.districtId) {
                              return (
                                <option
                                  selected
                                  value={item.districtId}
                                  className="black-title"
                                >
                                  {item.name}
                                </option>
                              );
                            }
                            return (
                              <option
                                value={item.districtId}
                                className="black-title"
                              >
                                {item.name}
                              </option>
                            );
                          }
                          return null;
                        })}
                      </Form.Control>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 pl-5 pr-5">
                  <div className="col-sm-12 col-md-12">
                    <h3>
                      <b>
                        <u>Yêu cầu bên A:</u>
                      </b>
                    </h3>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <p>- Bên A mong muốn được học về kỹ năng:</p>
                    {skills
                      ? skills.map((item) => (
                        <Form.Check
                          className="ml-5 checkcheck"
                          inline
                          type="checkbox"
                          label={item.name}
                          value={item.skillId}
                        />
                      ))
                      : null}
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="col-sm-3 col-md-3 mt-4">
                    <p>- Ngày bắt đầu:</p>
                    <Form.Control
                      className="dateStart"
                      type="date"
                      id="dateFrom"
                      onChange={this.onChangeDateFrom}
                    >
                    </Form.Control>
                  </div>

                  <div className="col-sm-3 col-md-3 mt-4">
                    <p>- Số tuần:</p>
                    <Form.Control
                      type="number"
                      id="soTuan"
                      min="1"
                      onChange={this.onChangeSoTuan}
                    >
                    </Form.Control>
                  </div>

                  <div className="col-md-3 col-sm-3 mt-4">
                    <p>- Số ngày học/tuần:</p>
                    <Form.Control
                      type="number"
                      max="7"
                      min="1"
                      id="number"
                      onChange={this.onChangeSoNgay}
                    >
                    </Form.Control>
                  </div>

                  <div className="col-md-3 col-sm-3 mt-4">
                    <p>- Thời gian học/ngày:</p>
                    <Form.Control
                      type="number"
                      max="24"
                      min="1"
                      id="numberHour"
                      onChange={this.onChangeTime}
                    >
                    </Form.Control>
                  </div>
                </div>

                <div className="pl-5 pr-5">
                  <div className="col-sm-4 col-md-4 mt-5">
                    - Tổng chi phí thanh toán cho bên B:
                  </div>
                  <div className="col-sm-2 col-md-2 mt-5 text-center">
                    <b>Số tiền/giờ (VND)</b>
                  </div>
                  <div className="col-sm-2 col-md-2 mt-5 text-center">
                    <b>Ngày kết thúc</b>
                  </div>
                  <div className="col-sm-2 col-md-2 mt-5 text-center">
                    <b>Tổng giờ học</b>
                  </div>
                  <div className="col-sm-2 col-md- mt-5 text-center">
                    <b>Tổng tiền (VND)</b>
                  </div>
                  <div className="col-sm-4 col-md-4" />
                  <div className="col-sm-2 col-md-2 text-center mt-3">
                    <b className="color-red">
                      {detailTeacher
                        ? `${numeral(`${detailTeacher.price}`).format(
                          '(0,0)'
                        )}`
                        : null}
                    </b>
                  </div>
                  <div className="col-sm-2 col-md-2 text-center mt-3">
                    <b className="color-red">
                      {endLearnDay || null}
                    </b>
                  </div>
                  <div className="col-sm-2 col-md-2 text-center mt-3">
                    <b className="color-red">{totalHour || null}</b>
                  </div>
                  <div className="col-sm-2 col-md-2 text-center">
                    <h3 className="color-red">
                      <b id="price" />
                    </h3>
                    {/* <input
                      readOnly
                      type={{ backgroundColor: 'red' }}
                      id="price"
                      placeholder="Giá sẽ hiện lên khi nhập đầy đủ thông tin"
                    /> */}
                  </div>
                </div>

                <div className="pl-5 pr-5">
                  <div className="col-sm-12 col-md-12 mt-4 mb-5">
                    <p style={{ color: 'red' }}>
                      <i>*Lưu ý:</i>
                    </p>
                    <p>
                      - Bên B sẽ phải có trách nhiệm dạy học đầy đủ và làm đúng
                      theo yêu cầu của 2 bên như đã thỏa thuận.
                    </p>
                    <p>
                      - Trong trường hợp bên B không hoàn thành đúng trách
                      nhiệm, bên A có quyền
{' '}
                      <b>khiếu nại</b>
                      {' '}
                      lên hệ thống để yêu cầu hoàn tiền.
                    </p>
                    <p>
                      - Sau khi kết thúc khóa học, trong thời hạn
{' '}
                      <b>3 ngày</b>
                      ,
                      nếu bên A không xác nhận
{' '}
                      <b>Đã hoàn thành</b>
                      {' '}
                      khóa học (tính từ ngày kết thúc khóa học),
                    thì hệ thống sẽ tự động cập nhật và thanh toán cho bên B.
                    </p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 mt-5 text-center">
                  <Button type="submit">Đồng ý và Thanh toán</Button>
                </div>
              </Form>
            </div>
          </Container>
        </div>
      );
    }
    return <PageNotFound />;
  }
}

export default Contract;
