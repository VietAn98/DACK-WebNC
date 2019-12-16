import React from 'react';
import Swal from 'sweetalert2';
import { Container, Form, Button } from 'react-bootstrap';
import numeral from 'numeral';
import moment from 'moment';
import PageNotFound from '../../pages/PageNotFound';
import './Contract.css';
// const moment = require('moment');

class Contract extends React.PureComponent {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = async () => {
    const {
      getListCity,
      getSingleTeacherById,
      getListDisctrict,
      getUserInfor,
      getListSkills,
      listNameSkill
    } = this.props;
    const path = window.location.pathname.split('-');
    const id = path[path.length - 1];
    const user = JSON.parse(localStorage.getItem('user'));

    getListCity();
    getSingleTeacherById(id);
    getListDisctrict();
    await getUserInfor(user.userId);
    getListSkills();
    listNameSkill(id);
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
    const { detailTeacher, getEndDay } = this.props;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    const startDay = new Date(document.getElementById('dateFrom').value);

    if (soTuan !== '') {
      const EndDay = this.addDays(startDay, soTuan * 7);
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
    }

    if (soTuan !== '' && soNgay !== '' && soGio !== '') {
      const price = document.getElementById('number').value * soTuan * (detailTeacher.price * soGio);
      document.getElementById('price').value = price;
    }
  };

  onChangeSoTuan = () => {
    const { detailTeacher, getEndDay } = this.props;
    const dateFrom = document.getElementById('dateFrom').value;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    const startDay = new Date(document.getElementById('dateFrom').value);
    if (dateFrom !== '') {
      const EndDay = this.addDays(startDay, soTuan * 7);
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
    }

    if (dateFrom !== '' && soNgay !== '' && soGio !== '') {
      const price = soNgay * soTuan * (detailTeacher.price * soGio);
      document.getElementById('price').value = price;
    }
  };

  onChangeSoNgay = () => {
    const { detailTeacher, getEndDay } = this.props;
    const dateFrom = document.getElementById('dateFrom').value;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    if (dateFrom !== '' && soTuan !== '' && soGio !== '') {
      const startDay = new Date(document.getElementById('dateFrom').value);
      const EndDay = this.addDays(startDay, soTuan * 7);
      const price = soNgay * soTuan * (detailTeacher.price * soGio);
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
      document.getElementById('price').value = price;
    }
  };

  onChangeTime = () => {
    const { detailTeacher, getEndDay } = this.props;
    const dateFrom = document.getElementById('dateFrom').value;
    const soTuan = document.getElementById('soTuan').value;
    const soNgay = document.getElementById('number').value;
    const soGio = document.getElementById('numberHour').value;
    if (dateFrom !== '' && soTuan !== '' && soNgay !== '') {
      const startDay = new Date(document.getElementById('dateFrom').value);
      const EndDay = this.addDays(startDay, soTuan * 7);
      const price = soNgay * soTuan * (detailTeacher.price * soGio);
      getEndDay(moment(EndDay).format('DD-MM-YYYY'));
      document.getElementById('price').value = price;
    }
  };

  onSubmitCreateContract = (e) => {
    e.preventDefault();
    const checkcheck = document.getElementsByClassName('checkcheck');
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
        const { startDay } = moment(dateFrom).format('DD-MM-YYYY');
        let skills = '';
        for (let i = 0; i < checkcheck.length; i += 1) {
          if (checkcheck[i].children[0].checked === true) {
            skills += `${checkcheck[i].children[0].value},`;
          }
        }
        createContract(
          idTeacher,
          user.userId,
          price,
          dateFrom,
          endLearnDay,
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
      listSkills,
      endLearnDay,
      listNameOfSkill
      // userInfor
    } = this.props;
    const { skills } = listNameOfSkill;
    console.log('listSkills', listNameOfSkill);
    if (tokenn) {
      return (
        <div className="div-container">
          <Container className="contract-container">
            <h1 className="text-center">
              <b>HỢP ĐỒNG THUÊ GIÁO VIÊN</b>
            </h1>
            <p className="text-center">
              <i>(ID: 123)</i>
            </p>
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
                      <Form.Control type="text" value={userProfiles.name} />
                    </Form.Group>
                    <Form.Group className="col-md-12 col-sm-12">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="text" value={userProfiles.gmail} />
                    </Form.Group>
                    <div className="col-md-12 col-sm-12">
                      <Form.Label>Địa chỉ:</Form.Label>
                    </div>
                    <Form.Control type="text" value={userProfiles.gmail} />
                    {/* <div className="col-md-7 col-sm-7">
                      <Form.Control
                        as="select"
                        id="city1"
                        onChange={this.onChangeCity1}
                        required
                      >
                        {listCity
                          ? listCity.map(item => (
                              <option value={item.cityId}>{item.name}</option>
                            ))
                          : null}
                      </Form.Control>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <Form.Control as="select" id="district">
                        {districtNames.length !== 0 ? (
                          districtNames.map(item => (
                            <option
                              value={item.districtId}
                              className="black-title"
                            >
                              {item.name}
                            </option>
                          ))
                        ) : (
                          // eslint-disable-next-line jsx-a11y/control-has-associated-label
                          <option value="0" className="black-title" />
                        )}
                      </Form.Control>
                    </div>
                   */}
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
                    <div className="col-md-7 col-sm-7">
                      <Form.Control as="select" id="city2" disabled>
                        {/* <option value="0">Thành phố</option>
                                                {listCity ? (listCity.map((item) => (
                                                    <option value={item.cityId}>{item.name}</option>
                                                ))) : null} */}
                      </Form.Control>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <Form.Control as="select" disabled>
                        {listDistrict
                          ? listDistrict.map((item) => {
                            if (
                              item.districtId === detailTeacher.districtId
                            ) {
                              return (
                                <option value={item.districtId}>
                                  {item.name}
                                </option>
                              );
                            }
                            return null;
                          })
                          : null}
                        <option>Quận</option>
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
                  <div className="col-sm-12 col-md-12 mt-4">
                    <p>- Ngày học:</p>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="col-md-5 col-sm-5">
                      <Form.Control
                        type="date"
                        id="dateFrom"
                        onChange={this.onChangeDateFrom}
                      >
                      </Form.Control>
                    </div>
                    <span className="col-md-2 col-sm-2 text-center">
                      {' '}
                      Số tuần
{' '}
                    </span>
                    <div className="col-md-5 col-sm-5">
                      <Form.Control
                        type="text"
                        id="soTuan"
                        min="1"
                        onChange={this.onChangeSoTuan}
                      >
                      </Form.Control>
                    </div>
                  </div>
                  <div>
                    <div className="col-md-3 col-sm-3 mt-4">
                      - Số ngày học/tuần:
                    </div>
                    <div className="col-md-2 col-sm-2 mt-4">
                      <Form.Control
                        type="number"
                        max="7"
                        min="1"
                        id="number"
                        onChange={this.onChangeSoNgay}
                      >
                      </Form.Control>
                    </div>
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="col-sm-12 col-md-12 mt-4">
                    <p>
                      - Thời gian học/ngày:
{' '}
                      <b>2 giờ/ngày</b>
                    </p>
                    <Form.Control
                      type="number"
                      max="7"
                      min="1"
                      id="numberHour"
                      onChange={this.onChangeTime}
                    >
                    </Form.Control>
                    {/* <div className="col-md-5 col-sm-5">
                                            <Form.Control type="time"></Form.Control>
                                        </div>
                                        <span className="col-md-2 col-sm-2 text-center"> Đến </span>
                                        <div className="col-md-5 col-sm-5">
                                            <Form.Control type="time"></Form.Control>
                                        </div> */}
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="col-sm-5 col-md-5 mt-3">
                    - Tổng chi phí thanh toán cho bên B:
                  </div>
                  <div className="col-sm-2 col-md-2 mt-3">
                    <b className="float-right">Số tiền/giờ</b>
                  </div>
                  <div className="col-sm-2 col-md-2 mt-3 float-right">
                    <b className="float-right">Ngày kết thúc</b>
                  </div>
                  <div className="col-sm-3 col-md-3 mt-3 float-right">
                    <b className="float-right">Số giờ học/ngày</b>
                  </div>
                  <div className="col-sm-12 col-md-12 mt-4">
                    <div className="col-sm-5 col-md-5" />
                    <div className="col-sm-2 col-md-2">
                      <b className="float-right color-red">
                        {detailTeacher
                          ? `${numeral(`${detailTeacher.price}`).format(
                            '(0,0)'
                          )} VND`
                          : null}
                      </b>
                    </div>
                    <div className="col-sm-2 col-md-2">
                      <b className="float-right color-red">
                        {endLearnDay || null}
                      </b>
                    </div>
                    <div className="col-sm-3 col-md-3">
                      <b className="text-center color-red">2</b>
                    </div>
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="col-sm-12 col-md-12 mt-4 mb-5">
                    <p style={{ color: 'red' }}>
                      <i>*Lưu ý:</i>
                    </p>
                    <p>
                      - Thời gian học tối đa là
{' '}
                      <b>2 tiếng/ngày</b>
                      . Nếu quá
                                            thời gian, bên A sẽ phải có trách nhiệm thanh toán thêm
                                            cho bên B.
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
                      lên hệ thống.
                    </p>
                    <p>
                      - Bên A sẽ không được nhận lại chi phí đã thanh toán cho
                      bên B nếu hủy bỏ hợp đồng.
                    </p>
                    <p>
                      - Bên A sẽ không được nhận lại chi phí đã thanh toán cho
                      bên B nếu hủy bỏ hợp đồng.
                    </p>
                  </div>
                </div>

                <div className="col-sm-5 col-md-5 mt-3 text-center total-price">
                  <h4>Tổng chi phí thanh toán:</h4>
                  <input
                    readOnly
                    type={{ backgroundColor: 'red' }}
                    id="price"
                    placeholder="Giá sẽ hiện lên khi nhập đầy đủ thông tin"
                  />
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
