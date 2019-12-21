/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import Swal from 'sweetalert2';
import {
  Table, Form, Button, Pagination
} from 'react-bootstrap';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import './History.css';
import history from '../../history';
import avatar1 from '../../public/images/avatar.jpg';

const status = [
  { value: 1, text: 'Đang chờ xác nhận' },
  { value: 2, text: 'Đã xác nhận dạy' },
  { value: 3, text: 'Đã hoàn thành' },
  { value: 4, text: 'Đã từ chối' },
  { value: 5, text: 'Đang khiếu nại' }
];

const tokenn = localStorage.token;
let decoded = null;

const today = new Date();
const Today = moment(today).format('DD-MM-YYYY');
// let isShow = false;

class History extends React.PureComponent {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = async () => {
    if (tokenn) {
      decoded = jwtDecode(tokenn);
    }
    const { getContractByUserId, getContractByTeacherId } = this.props;
    const page = -1;
    if (decoded.categoryUser === 0) {
      await getContractByUserId(decoded.userId, page);
    } else {
      await getContractByTeacherId(decoded.userId, page);
    }

    const { contractByIdUser } = this.props;
    const { limitHistory } = contractByIdUser;
    if (limitHistory) {
      limitHistory.map(async (row) => {
        // console.log('dateend, datenow', dateend, datenow);
        if (row.state === 2) {
          let parts = row.endDay.split('-');
          const dateend = Number(parts[2] + parts[1] + parts[0]);
          parts = Today.split('-');
          const datenow = Number(parts[2] + parts[1] + parts[0]);
          if (datenow - dateend > 3) {
            const { updateStateContract } = this.props;
            await updateStateContract(row.idContract, 3);
            console.log('dateend - datenow', dateend - datenow);
          }
        }
      });
      // console.log('contractByIdUsercontractByIdUser', dateend - datenow);
    }
  };

  onClickInbox = (obj) => {
    // alert(obj);
    history.push(`/chat/${obj}`);
  }

  onChangeStatus = async (obj) => {
    const {
      getContractByUserId,
      getContractByTeacherId,
      filterContractsOfTeacher,
      filterContractsOfStudent
    } = this.props;
    // console.log('obnj',obj);
    const page = -1
    // eslint-disable-next-line radix
    if (parseInt(obj.target.value) === 0) {
      if (decoded.categoryUser === 0) {
        await getContractByUserId(decoded.userId, page);
      } else {
        await getContractByTeacherId(decoded.userId, page);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (decoded.categoryUser === 1) {
        await filterContractsOfTeacher(decoded.userId, obj.target.value, page);
      } else {
        await filterContractsOfStudent(decoded.userId, obj.target.value, page);
      }
    }
  }

  changePage = (iPage) => {
    const { getContractByUserId, getContractByTeacherId } = this.props;
    if (decoded.categoryUser === 0) {
      getContractByUserId(decoded.userId, iPage);
    } else {
      getContractByTeacherId(decoded.userId, iPage);
    }
  };

  onClickRow = (idRow) => {
    history.push(`/contract-${idRow}`);
  };

  render() {
    const { contractByIdUser } = this.props;
    let i = 0;

    const {
      numberPages,
      limitHistory,
      offset, page
    } = contractByIdUser;
    // eslint-disable-next-line radix
    const index = parseInt(page);
    let stt = offset;
    // console.log('numberPages', numberPages)
    const arrPage = [];
    for (let j = 1; j <= numberPages; j += 1) {
      arrPage.push(j);
    }
    console.log('contractByIdUser', limitHistory);
    return (
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '20px',
          marginRight: '3rem',
          paddingBottom: '3rem'
        }}
      >
        {decoded
          ? (
            <div>
              <h3 className="w3layouts-heading text-white">
                <span>{decoded.categoryUser === 1 ? 'Lịch Sử Yêu Cầu' : 'Lịch Sử Hợp Đồng'}</span>
              </h3>
              <div className="w3-agile_mail_grids justify-right mb-3">
                <div className="col-md-12 col-sm-12 mb-4">
                  <div className="col-md-7 col-sm-7" />
                  <div className="col-md-2 col-sm-2">
                    <p className="text-white float-right">Lọc trạng thái:</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <Form.Control
                      as="select"
                      id="status"
                      // eslint-disable-next-line react/jsx-no-bind
                      onChange={this.onChangeStatus.bind(this)}
                      required
                      style={{ height: '100%' }}
                    >
                      <option value="0">
                        Tất cả
                      </option>
                      {status.map((item) => (
                        <option value={item.value}>
                          {' '}
                          {item.text}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                </div>
              </div>
              <div className="w3-agile_mail_grids justify-center pr-2 pl-2">
                <Table responsive variant="light" hover className="col-md-12 col-sm-12">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">{decoded.categoryUser === 1 ? 'Người gửi' : 'Người nhận'}</th>
                      <th className="text-center">Ngày gửi</th>
                      <th className="text-center">Ngày kết thúc</th>
                      <th className="text-center">Trạng thái</th>
                      <th className="text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contractByIdUser.hasOwnProperty('limitHistory')
                      ? limitHistory.map((item) => (
                        <tr className="cursor-pointer">
                          <td className="text-center" onClick={this.onClickRow.bind(this, item.idContract)}>{stt += 1}</td>
                          {/* <td className="pl-5">
                            {decoded.categoryUser === 1 ? `Yêu cầu thứ ${i}` : `Hợp đồng thứ ${i}`}
                          </td> */}
                          <td style={{ width: '5%' }} onClick={this.onClickRow.bind(this, item.idContract)}>
                            {decoded.categoryUser === 1
                              ? (
                                <img
                                  src={item.studentAvatar ? `${item.studentAvatar}` : `${avatar1}`}
                                  alt="avatar"
                                  style={{ width: '200%' }}
                                />
                              ) : (
                                <img
                                  src={item.teacherAvatar ? `${item.teacherAvatar}` : `${avatar1}`}
                                  alt="avatar"
                                  style={{ width: '200%' }}
                                />
                              )}
                          </td>
                          <td className="text-center" onClick={this.onClickRow.bind(this, item.idContract)} >{decoded.categoryUser === 1 ? `${item.StudentName}` : `${item.TeacherName}`}</td>
                          <td className="text-center" onClick={this.onClickRow.bind(this, item.idContract)}>{item.dateCreate}</td>
                          <td className="text-center" onClick={this.onClickRow.bind(this, item.idContract)}>
                            {item.state === 2
                              || item.state === 3
                              || item.state === 5
                              ? `${item.endDay}` : null}
                            {/* <span className="sm-tag">End</span> */}
                          </td>
                          <td className="text-center" onClick={this.onClickRow.bind(this, item.idContract)}>{item.Status}</td>
                          <td className="text-center">
                            {decoded.categoryUser === 1
                              ? (
                                <div>
                                  {/* <i className="fas fa-check mr-3" title="Chấp nhận yêu cầu" onClick={this.onClickAccept.bind(this, item.idContract, item.state)} /> */}
                                  <Button
                                    onClick={this.onClickInbox.bind(this, item.studentId)}
                                    variant="outline-light"
                                  >
                                    <i className="fas fa-sms mr-3" title="Liên hệ" />
                                  </Button>
                                  {/* <i className="fas fa-sms mr-3" title="Liên hệ" onClick={this.onClickInbox} /> */}
                                  {/* <i className="fas fa-times" title="Từ chối yêu cầu" onClick={this.onClickRefuse.bind(this, item.idContract, item.state)} /> */}
                                </div>
                              )
                              : (
                                <div>
                                  <Button
                                    onClick={this.onClickInbox.bind(this, item.teacherId)}
                                    variant="outline-light"
                                  >
                                    <i className="fas fa-sms mr-3" title="Liên hệ" />
                                  </Button>
                                  {/* <i className="fas fa-exclamation-circle" title="Khiếu nại" /> */}
                                </div>
                              )}
                          </td>
                        </tr>
                      ))
                      : null}
                  </tbody>
                </Table>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Pagination>
                  <Pagination.First onClick={() => this.changePage(index - 1)} />
                  {arrPage.map((number) => (
                    <Pagination.Item
                      active={number === index || false}
                      onClick={() => this.changePage(number)}
                    >
                      {number}
                    </Pagination.Item>
                  ))}
                  <Pagination.Last
                    disabled={numberPages === 1 || numberPages === index || false}
                    onClick={() => this.changePage(index + 1)}
                  />
                </Pagination>
              </div>
            </div>
          ) : null}
      </div>
    );
  }
}

export default History;
