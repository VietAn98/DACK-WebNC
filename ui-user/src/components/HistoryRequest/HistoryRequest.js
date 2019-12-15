import React from 'react';
import { Table, Form } from 'react-bootstrap';

const status = [
    { value: '0', text: 'Đang chờ' },
    { value: '1', text: 'Đã xác nhận' },
    { value: '2', text: 'Đã từ chối' },
    { value: '3', text: 'Hoàn thành' },
    { value: '4', text: 'Đợi thanh toán' },
    { value: '5', text: 'Bị khiếu nại' }
];

class EditProfile extends React.PureComponent {
    render() {
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
                    <span>Lịch Sử Yêu Cầu</span>
                </h3>
                <div className="w3-agile_mail_grids justify-right mb-3">
                    <p>Lọc theo trạng thái:</p>
                    <div className="col-md-3 col-sm-3">
                        <Form.Control
                            as="select"
                            id="status"
                            onChange={this.onChangeStattus}
                            required
                            style={{ height: '100%' }}
                        >
                            {status.map((item) => (
                                <option value={item.value}>
                                    {' '}
                                    {item.text}
                                </option>
                            ))}
                        </Form.Control>
                    </div>
                </div>
                <div className="w3-agile_mail_grids justify-center pr-2 pl-2">
                    <Table responsive variant="light" hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên yêu cầu</th>
                                <th>Người gửi</th>
                                <th>Thời gian gửi</th>
                                <th>Trạng thái</th>
                                {/* <th>Table heading</th>
                                <th>Table heading</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                {/* <td>Table cell</td>
                                <td>Table cell</td> */}
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                {/* <td>Table cell</td>
                                <td>Table cell</td> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default EditProfile;
