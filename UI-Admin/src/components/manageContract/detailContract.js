/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-prototype-builtins */
import React from 'react';
import {
  Button,
  Form,
  Spinner,
  Container
} from 'react-bootstrap';
import numeral from 'numeral';
import Swal from 'sweetalert2';
import history from '../../history';
import unpaid from '../../images/unpaid.jpg';
import './style.css';

class detailContract extends React.PureComponent {
  constructor(props) {
    super(props);
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    const { getDetailContract, getListStateContract } = this.props;
    getDetailContract(id);
    getListStateContract();
  }

  payContract = () => {
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    const { updateContract } = this.props;
    updateContract(id, 5);
  };

  seeMessage = (idStudent, idTeacher) => {
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];

    history.push(`/message/${id}/${idStudent}/${idTeacher}`);
  }

  onChangeContract = async (obj) => {
    Swal.fire('Đang cập nhật');
    Swal.showLoading();
    const idState = obj.target.value;
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    const { updateContract } = this.props;
    await updateContract(id, idState);
    window.location.reload();
  };

  render() {
    const { detailContracts, statesContract } = this.props;
    const {
      contract, teacher, student, skills
    } = detailContracts;
    const arrState = [];
    statesContract.forEach((element) => {
      if (element.id === 5 || element.id === 4 || element.id === 3) {
        arrState.push(element);
      }
    });

    return (
      <div style={{ padding: '8em 6em 4em 2em' }}>
        <div style={{ width: '100%' }}>
          <div className="float-left" style={{ width: '20%' }}>
            {detailContracts.hasOwnProperty('student')
              ? (
                <Button
                  style={{ width: '100%' }}
                  type="button"
                  onClick={this.seeMessage.bind(this, student[0].userId, teacher[0].userId)}
                  className="mb-3 float-left"
                  variant="success"
                >
                  <i className="fa fa-comments" />
                  {' '}
                  Quá trình thảo luận
                </Button>
              ) : null}
          </div>
        </div>
        <Container className="div-container">
          {detailContracts.hasOwnProperty('contract') ? (
            <Container className="contract-container">
              {contract[0].state === 2 ? <img src={unpaid} alt="stamp" /> : null}
              <h1 className="text-center mb-2 mt-4">
                <b>HỢP ĐỒNG THUÊ GIÁO VIÊN</b>
              </h1>
              <p className="text-center mb-5">
                <i>
                  {' '}
                  Ngày tạo:
{' '}
                  {detailContracts.hasOwnProperty('contract')
                    ? contract[0].dateCreate
                    : null}
                  {' '}
                </i>
              </p>
              {/* <p className="text-center">
                         <i>(ID: 123)</i>
                       </p> */}
              <div>
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
                              <u>Bên học viên:</u>
                            </b>
                          </h3>
                        </Form.Label>
                        <br />
                      </div>
                      <Form.Group className="col-md-12 col-sm-12">
                        <Form.Label>Tôi tên là:</Form.Label>
                        <Form.Control
                          disabled
                          type="text"
                          value={
                            detailContracts.hasOwnProperty('student')
                              ? student[0].name
                              : null
                          }
                        />
                      </Form.Group>
                      <Form.Group className="col-md-12 col-sm-12">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          disabled
                          type="text"
                          value={
                            detailContracts.hasOwnProperty('student')
                              ? student[0].gmail
                              : null
                          }
                        />
                      </Form.Group>
                      <div className="col-md-12 col-sm-12">
                        <Form.Label>Địa chỉ:</Form.Label>
                      </div>
                      <div className="col-md-12 col-sm-12 mb-3">
                        <Form.Control
                          type="text"
                          value={
                            detailContracts.hasOwnProperty('student')
                              ? student[0].address
                              : null
                          }
                          disabled
                        />
                      </div>
                      <div className="col-md-7 col-sm-7">
                        <Form.Control
                          disabled
                          required
                          value={
                            detailContracts.hasOwnProperty('student')
                              ? student[0].nameCity
                              : null
                          }
                          style={{ height: '100%' }}
                        >
                        </Form.Control>
                      </div>
                      <div className="col-md-5 col-sm-5">
                        <Form.Control
                          disabled
                          value={
                            detailContracts.hasOwnProperty('student')
                              ? student[0].nameDistrict
                              : null
                          }
                          style={{ height: '100%' }}
                        >
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="col-md-12 col-sm-12">
                        <Form.Label>
                          <h3>
                            <b>
                              <u>Bên giáo viên:</u>
                            </b>
                          </h3>
                        </Form.Label>
                        <br />
                      </div>
                      <Form.Group className="col-md-12 col-sm-12">
                        <Form.Label>Tên người dạy:</Form.Label>
                        <Form.Control
                          type="text"
                          value={
                            detailContracts.hasOwnProperty('teacher')
                              ? teacher[0].name
                              : null
                          }
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="col-md-12 col-sm-12">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="text"
                          value={
                            detailContracts.hasOwnProperty('teacher')
                              ? teacher[0].gmail
                              : null
                          }
                          disabled
                        />
                      </Form.Group>
                      <div className="col-md-12 col-sm-12">
                        <Form.Label>Địa chỉ:</Form.Label>
                      </div>
                      <div className="col-md-12 col-sm-12 mb-3">
                        <Form.Control
                          type="text"
                          value={
                            detailContracts.hasOwnProperty('teacher')
                              ? teacher[0].address
                              : null
                          }
                          disabled
                        />
                      </div>
                      <div className="col-md-7 col-sm-7">
                        <Form.Control
                          value={
                            detailContracts.hasOwnProperty('teacher')
                              ? teacher[0].nameCity
                              : null
                          }
                          disabled
                          style={{ height: '100%' }}
                        >
                        </Form.Control>
                      </div>
                      <div className="col-md-5 col-sm-5">
                        <Form.Control
                          value={
                            detailContracts.hasOwnProperty('teacher')
                              ? teacher[0].nameDistrict
                              : null
                          }
                          disabled
                          style={{ height: '100%' }}
                        >
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
                      <p>
                        - Bên A mong muốn được học về kỹ năng:
                        {detailContracts.hasOwnProperty('skills')
                          ? skills.map((item) => (
                            <span className="color-red">
                              {' '}
                              {item.name}
                              ,
                              {' '}
                            </span>
                          ))
                          : null}
                      </p>

                    </div>
                  </div>
                  <div className="pl-5 pr-5">
                    <div className="col-sm-4 col-md-4 mt-5">
                      - Tổng chi phí thanh toán cho bên B:
                    </div>
                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                      <b>Ngày bắt đầu</b>
                    </div>
                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                      <b>Ngày kết thúc</b>
                    </div>
                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                      <b>Giá theo giờ</b>
                    </div>
                    <div className="col-sm-2 col-md- mt-5 text-center">
                      <b>Tổng tiền (VND)</b>
                    </div>
                    <div className="col-sm-4 col-md-4" />
                    <div className="col-sm-2 col-md-2 text-center mt-3">
                      <p className="color-red">
                        {detailContracts.hasOwnProperty('contract')
                          ? contract[0].startDay
                          : null}
                      </p>
                    </div>
                    <div className="col-sm-2 col-md-2 text-center mt-3">
                      <p className="color-red">
                        {detailContracts.hasOwnProperty('contract')
                          ? contract[0].endDay
                          : null}
                      </p>
                    </div>
                    <div className="col-sm-2 col-md-2 text-center mt-3">
                      <p className="color-red">
                        {detailContracts.hasOwnProperty('teacher')
                          ? numeral(`${teacher[0].price}`).format('(0,0)')
                          : null}
                        VND
                      </p>
                    </div>
                    <div className="col-sm-2 col-md-2 text-center">
                      <h2 className="color-red mt-3">
                        <b style={{ color: 'red' }}>
                          {detailContracts.hasOwnProperty('contract')
                            ? numeral(`${contract[0].price}`).format('(0,0)')
                            : null}
                        </b>
                      </h2>
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
                        lên hệ thống để yêu
                                              cầu hoàn tiền.
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

                  {contract[0].state === 2 ? (
                    <div className="col-sm-12 col-md-12 mb-5 text-center">
                      <Button onClick={this.payContract}>Thanh toán</Button>
                    </div>
                  ) : null}
                  {contract[0].state === 5 ? (
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Thay đổi trang thái</Form.Label>
                      <Form.Control
                        style={{ width: '30%' }}
                        as="select"
                        onChange={this.onChangeContract.bind(this)}
                      >
                        {statesContract
                          ? arrState.map((item) => (
                            <option selected={item.id === contract[0].state || false} value={item.id}>{item.name}</option>
                          ))
                          : null}
                      </Form.Control>
                    </Form.Group>
                  ) : null}
                </Form>
              </div>
            </Container>
          ) : (
              <div style={{ textAlign: 'center' }}>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
              </div>
            )}
        </Container>
      </div>
    );
  }
}

export default detailContract;
