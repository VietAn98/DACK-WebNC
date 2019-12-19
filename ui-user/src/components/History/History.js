/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import Swal from 'sweetalert2';
import { Table, Form, Button } from 'react-bootstrap';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import './History.css';
import history from '../../history';

const status = [
    { value: 1, text: 'Đang chờ xác nhận' },
    { value: 2, text: 'Đã xác nhận dạy' },
    { value: 3, text: 'Đã hoàn thành' },
    { value: 4, text: 'Đã từ chối' },
    { value: 5, text: 'Đang khiếu nại' },
];

const tokenn = localStorage.token;
let decoded = null;

const today = new Date();
const Today = moment(today).format('DD-MM-YYYY');

class History extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = async () => {
        if (tokenn) {
            decoded = jwtDecode(tokenn);
        }
        const { getContractByUserId, getContractByTeacherId } = this.props;
        if (decoded.categoryUser === 0) {
            await getContractByUserId(decoded.userId);
        } else {
            await getContractByTeacherId(decoded.userId);
        }

        const { contractByIdUser } = this.props;

        if (contractByIdUser) {
            contractByIdUser.map(async (row) => {
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
    }

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
    }

    onClickRow = (idRow) => {
        history.push(`/contract-${idRow}`);
    }

    render() {
        const { contractByIdUser } = this.props;
        let i = 0;
        // console.log('contractByIdUser', contractByIdUser);
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
                                                <td className="text-center">
                                                    {item.state === 2
                                                        || item.state === 3
                                                        || item.state === 5
                                                        ? `${item.endDay}` : null}
                                                    {/* <span className="sm-tag">End</span> */}
                                                </td>
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
                                                                {/* {item.state === 2
                                                        ? (
                                                            <Button onClick={this.onClickSetStatus} variant="outline-light" className="justify-center">
                                                                <i className="fas fa-check mr-3" title="Đã hoàn thành khóa học" />
                                                            </Button>
                                                        ) : null} */}

                                                                <Button onClick={this.onClickInbox} variant="outline-light">
                                                                    <i className="fas fa-sms mr-3" title="Liên hệ" />
                                                                </Button>
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
                    ) : null}
            </div>
        );
    }
}

export default History;
