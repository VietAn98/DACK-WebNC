import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contract.css';

class Contract extends React.PureComponent {
    render() {
        return (
            <div className="div-container">
                <Container className="contract-container">
                    <h1 className="text-center"><b>HỢP ĐỒNG THUÊ GIÁO VIÊN</b></h1>
                    <p className="text-center"><i>(ID: 123)</i></p>
                    <div className="my-container">
                        <Form>
                            <div className="col-md-12 col-sm-12">
                                <div className="col-md-6 col-sm-6">
                                    <div className="col-md-12 col-sm-12">
                                        <Form.Label>
                                            <h3><b><u>Bên A:</u></b></h3>
                                        </Form.Label>
                                        <br />
                                    </div>
                                    <Form.Group className="col-md-12 col-sm-12">
                                        <Form.Label>Tôi tên là:</Form.Label>
                                        <Form.Control type="text" placeholder="Họ và tên" />
                                    </Form.Group>
                                    <Form.Group className="col-md-12 col-sm-12">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="text" placeholder="Họ và tên" />
                                    </Form.Group>
                                    <div className="col-md-12 col-sm-12">
                                        <Form.Label>Địa chỉ:</Form.Label>
                                    </div>
                                    <div className="col-md-7 col-sm-7">
                                        <Form.Control as="select">
                                            <option>Thành phố</option>
                                        </Form.Control>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                        <Form.Control as="select">
                                            <option>Quận</option>
                                        </Form.Control>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="col-md-12 col-sm-12">
                                        <Form.Label>
                                            <h3><b><u>Bên B:</u></b></h3>
                                        </Form.Label>
                                        <br />
                                    </div>
                                    <Form.Group className="col-md-12 col-sm-12">
                                        <Form.Label>Tên người dạy:</Form.Label>
                                        <Form.Control type="text" placeholder="Họ và tên" />
                                    </Form.Group>
                                    <Form.Group className="col-md-12 col-sm-12">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="text" placeholder="Họ và tên" />
                                    </Form.Group>
                                    <div className="col-md-12 col-sm-12">
                                        <Form.Label>Địa chỉ:</Form.Label>
                                    </div>
                                    <div className="col-md-7 col-sm-7">
                                        <Form.Control as="select">
                                            <option>Thành phố</option>
                                        </Form.Control>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                        <Form.Control as="select">
                                            <option>Quận</option>
                                        </Form.Control>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 pl-5 pr-5">
                                <div className="col-sm-12 col-md-12">
                                    <h3><b><u>Yêu cầu bên A:</u></b></h3>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <p>- Bên A mong muốn được học về kỹ năng:</p>
                                    <Form.Check inline type="checkbox" label="Check me out" />
                                    <Form.Check inline type="checkbox" label="Check me out" />
                                    <Form.Check inline type="checkbox" label="Check me out" />
                                    <Form.Check inline type="checkbox" label="Check me out" />
                                    <Form.Check inline type="checkbox" label="Check me out" />
                                </div>
                            </div>
                            <div className="pl-5 pr-5">
                                <div className="col-sm-12 col-md-12 mt-4">
                                    <p>- Ngày học:</p>
                                    <Form.Check inline type="checkbox" label="Thương lượng với bên B" />
                                    <Form.Check className="ml-5" inline type="checkbox" label="Chọn thời gian học" />
                                </div>

                                <div className="col-md-5 col-sm-5 mt-4">
                                    <Form.Control type="date"></Form.Control>
                                </div>
                                <span className="col-md-2 col-sm-2 text-center mt-4"> Đến </span>
                                <div className="col-md-5 col-sm-5 mt-4">
                                    <Form.Control type="date"></Form.Control>
                                </div>
                                <div className="col-sm-12 col-md-12 mt-4">
                                    <p>- Các ngày:</p>
                                    <Form.Check inline type="checkbox" label="Thứ 2" />
                                    <Form.Check inline type="checkbox" label="Thứ 3" />
                                    <Form.Check inline type="checkbox" label="Thứ 4" />
                                    <Form.Check inline type="checkbox" label="Thứ 5" />
                                    <Form.Check inline type="checkbox" label="Thứ 6" />
                                    <Form.Check inline type="checkbox" label="Thứ 7" />
                                    <Form.Check inline type="checkbox" label="Chủ nhật" />
                                </div>
                            </div>
                            <div className="pl-5 pr-5">
                                <div className="col-sm-12 col-md-12 mt-4">
                                    <p>- Thời gian học:</p>
                                    <Form.Check inline type="checkbox" label="Thương lượng với bên B" />
                                    {/* <Form.Check className="ml-5" inline type="checkbox" label="Chọn thời gian học" /> */}
                                </div>
                            </div>
                            <div className="pl-5 pr-5">
                                <div className="col-sm-12 col-md-12 mt-4">
                                    <p>- Tổng chi phí thanh toán cho bên B:</p>
                                    <h3>1,000,000 VND</h3>
                                </div>
                            </div>
                            <div className="pl-5 pr-5">
                                <div className="col-sm-12 col-md-12 mt-4">
                                    <p style={{color: 'red'}}><i>*Lưu ý:</i></p>
                                    <p>- Bên B phải có trách nhiệm dạy học đầy đủ và đúng theo yêu cầu của 2 bên như đã thỏa thuận.</p>
                                    <p>- Trong trường hợp bên B không hoàn thành đúng trách nhiệm, bên A có quyền khiếu nại lên hệ thống.</p>
                                    <p>- Bên A sẽ không được nhận lại chi phí đã thanh toán cho bên B nếu hủy bỏ hợp đồng.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 mt-5 text-center">
                                <Button className>Đồng ý và Thanh toán</Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contract;
