/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Swal from 'sweetalert2';
import { Table, Form } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import './History.css';

const status = [
    { value: '1', text: 'Đang chờ' },
    { value: '2', text: 'Đã xác nhận' },
    { value: '3', text: 'Đã hoàn thành' },
    { value: '4', text: 'Đã từ chối' },
    { value: '5', text: 'Chờ thanh toán' },
    { value: '6', text: 'Khiếu nại' },
    { value: '7', text: 'Đã hủy' },
];

const tokenn = localStorage.token;
let decoded = null;
if (tokenn) {
    decoded = jwtDecode(tokenn);
}

class History extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = () => {
        const { getAllContracts } = this.props;
        getAllContracts();
    }

    onClickRefuse = () => {
        Swal.fire({
            title: 'Bạn chắc chắn chứ?',
            text: 'Bạn sẽ không thể chỉnh sửa lại thao tác nếu đã từ chối!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận xóa'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Đã từ chối!',
                    'Yêu cầu của người học đã bị từ chối.',
                    'success'
                );
            }
        });
    }

    onClickAgree = () => {
        Swal.fire({
            title: 'Đồng ý?',
            text: 'Bạn sẽ không thể chỉnh sửa lại thao tác nếu đã đồng ý!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Đã xác nhận!',
                    'Yêu cầu của người học đã được đồng ý.',
                    'success'
                );
            }
        });
    }

    // createTable = (temp) => {
    //     const table = [];

    //     for (let i = 1; i < temp.length + 1; i += 1) {
    //         const children = [];
    //         children.push(<td>{i}</td>);
    //         table.push(<tr>{children}</tr>);
    //     }
    //     return table;
    // }

    render() {
        const { allContracts } = this.props;
        let i = 0;

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
                        <div className="col-md-2 col-sm-2">
                            <p className="text-white float-right">Lọc trạng thái:</p>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <Form.Control
                                as="select"
                                id="status"
                                onChange={this.onChangeStattus}
                                required
                                style={{ height: '100%' }}
                            >
                                <option value="all">
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
                    <Table responsive variant="light" hover className="col-md-12 col-sm-12 text-center">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Người gửi</th>
                                <th className="text-center">Thời gian gửi</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allContracts ? allContracts.map((item) => (
                                <tr className="cursor-pointer">
                                    <td>{i += 1}</td>
                                    <td>
                                        Yêu cầu thứ
{' '}
                                        {i += 1}
                                    </td>
                                    <td>Table cell</td>
                            {/* <td>{item.}</td> */}
                                    <td>Table cell</td>
                                    <td>
                                        {decoded.categoryUser === 1
                                            ? (
                                                <div>
                                                    <i className="fas fa-check mr-3" title="Chấp nhận yêu cầu" />
                                                    <i className="fas fa-sms mr-3" title="Liên hệ" onClick={this.onClickInbox} />
                                                    <i className="fas fa-times" title="Từ chối yêu cầu" onClick={this.onClickRefuse} />
                                                </div>
                                            )
                                            : (
                                                <div>
                                                    <i className="fas fa-check mr-3" title="Đã hoàn thành khóa học" onClick={this.onClickAgree} />
                                                    <i className="fas fa-sms mr-3" title="Liên hệ" onClick={this.onClickInbox} />
                                                    <i className="fas fa-exclamation-circle" title="Khiếu nại" />
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
