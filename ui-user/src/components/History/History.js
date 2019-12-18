/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Swal from 'sweetalert2';
import { Table, Form } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import './History.css';
import history from '../../history';

const status = [
    { value: 1, text: 'Đang chờ' },
    { value: 2, text: 'Đã xác nhận' },
    { value: 3, text: 'Đã hoàn thành' },
    { value: 4, text: 'Đã từ chối' },
    { value: 5, text: 'Chờ thanh toán' },
    { value: 6, text: 'Khiếu nại' },
    { value: 7, text: 'Đã hủy' },
];

const tokenn = localStorage.token;
let decoded = null;
if (tokenn) {
    decoded = jwtDecode(tokenn);
}

class History extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = () => {
        const { getContractByUserId, getContractByTeacherId } = this.props;
        if (decoded.categoryUser === 0) {
            getContractByUserId(decoded.userId);
        } else {
            getContractByTeacherId(decoded.userId);
        }
    }

    // onClickRefuse = (idContract, state) => {
    //     Swal.fire({
    //         title: 'Bạn chắc chắn chứ?',
    //         text: 'Bạn sẽ không thể chỉnh sửa lại thao tác nếu đã từ chối!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Xác nhận xóa'
    //     }).then((result) => {
    //         if (result.value) {
    //             Swal.fire(
    //                 'Đã từ chối!',
    //                 'Yêu cầu của người học đã bị từ chối.',
    //                 'success'
    //             );
    //         }
    //     });
    // }

    // onClickAgree = (idContract, state) => {
    //     Swal.fire({
    //         title: 'Đồng ý?',
    //         text: 'Bạn sẽ không thể chỉnh sửa lại thao tác nếu đã đồng ý!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Xác nhận!'
    //     }).then((result) => {
    //         if (result.value) {
    //             Swal.fire(
    //                 'Đã xác nhận!',
    //                 'Yêu cầu của người học đã được đồng ý.',
    //                 'success'
    //             );
    //         }
    //     });
    // }

    // onClickAccept = (idContract, state) => {

    // }

    onChangeStatus = async (obj) => {
        const {
            getContractByUserId,
            getContractByTeacherId,
            filterContractsOfTeacher,
            filterContractsOfStudent
        } = this.props;

        // eslint-disable-next-line radix
        if (parseInt(obj.target.value) === 0) {
            if (decoded.categoryUser === 0) {
                await getContractByUserId(decoded.userId);
            } else {
                await getContractByTeacherId(decoded.userId);
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (decoded.categoryUser === 1) {
                await filterContractsOfTeacher(decoded.userId, obj.target.value);
            } else {
                await filterContractsOfStudent(decoded.userId, obj.target.value);
            }
        }

        // if (obj.target.value === 1) {
        //     if (decoded.categoryUser === 0) {
        //         getContractsAwait(decoded.userId);
        //     } else {
        //         getContractsAwait(decoded.userId);
        //     }
        // }
    }

    onClickRow = (idRow) => {
        history.push(`/contract-${idRow}`);
    }

    render() {
        const { contractByIdUser } = this.props;
        let i = 0;
        console.log('contractByIdUser', contractByIdUser);
        return (
            <div
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '20px',
                    marginRight: '3rem',
                    paddingBottom: '3rem'
                }}
            >
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
                                <th className="text-center">Thời gian gửi</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contractByIdUser.length !== 0 ? contractByIdUser.map((item) => (
                                <tr className="cursor-pointer" onClick={this.onClickRow.bind(this, item.idContract)}>
                                    <td className="text-center">{i += 1}</td>
                                    <td className="pl-5">
                                        {decoded.categoryUser === 1 ? `Yêu cầu thứ ${i}` : `Hợp đồng thứ ${i}`}
                                    </td>
                                    <td className="pl-5">
                                        {decoded.categoryUser === 1 ? `${item.StudentName}` : `${item.TeacherName}`}
                                    </td>
                                    <td className="text-center">{item.dateCreate}</td>
                                    <td className="text-center">{item.Status}</td>
                                    <td className="text-center">
                                        {decoded.categoryUser === 1
                                            ? (
                                                <div>
                                                    {/* <i className="fas fa-check mr-3" title="Chấp nhận yêu cầu" onClick={this.onClickAccept.bind(this, item.idContract, item.state)} /> */}
                                                    <i className="fas fa-sms mr-3" title="Liên hệ" onClick={this.onClickInbox} />
                                                    {/* <i className="fas fa-times" title="Từ chối yêu cầu" onClick={this.onClickRefuse.bind(this, item.idContract, item.state)} /> */}
                                                </div>
                                            )
                                            : (
                                                <div>
                                                    {/* <i className="fas fa-check mr-3" title="Đã hoàn thành khóa học" onClick={this.onClickCompete.bind(this, item.idContract, item.state)} /> */}
                                                    <i className="fas fa-sms mr-3" title="Liên hệ" onClick={this.onClickInbox} />
                                                    {/* <i className="fas fa-exclamation-circle" title="Khiếu nại" /> */}
                                                </div>
                                            )}
                                    </td>
                                </tr>
                            )) : null}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default History;
