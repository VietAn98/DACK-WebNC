import React from 'react';
import jwtDecode from 'jwt-decode';
import { Form, Button } from 'react-bootstrap';
import './EditProfile.css';

class EditProfile extends React.PureComponent {
    render() {
        const tokenn = localStorage.token;
        const user = JSON.parse(localStorage.getItem('user'));
        let decoded = null;
        if (tokenn) {
            decoded = jwtDecode(tokenn);
        }

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
                    <span>Chỉnh Sửa Thông Tin</span>
                </h3>
                <div className="w3-agile_mail_grids justify-center">
                    <div className="col-md-12 w3-agile_mail_grid_right">
                        <Form action="#" method="post" onSubmit={this.onSubmitInforTeaching} novalidate>
                            <div className="col-md-7 col-sm-7 contact_left_grid mt-4">
                                <h5 className="float-left text-white">
                                    <b>Họ và tên:</b>
                                </h5>
                                <input
                                    type="text"
                                    id="name"
                                    value={decoded.name}
                                />
                            </div>
                            <div className="col-md-5 col-sm-5 contact_left_grid mt-4">
                                {user.avatar === null ? (
                                    <div>
                                        <h5 className="float-left text-white">
                                            <b>Chọn ảnh đại diện:</b>
                                        </h5>
                                        <input className="mt-5" type="file" onChange={this.onChangeAvatar} />
                                    </div>
                                ) : (
                                        <div>
                                            <div className="avatarHolder">
                                                <img
                                                    style={{ width: '30%', height: '30%', padding: '1%' }}
                                                    alt="teacher-avatar"
                                                    src={user.avatar}
                                                />
                                            </div>
                                            <Button style={{ marginLeft: '40%', marginTop: '1%' }}>Thay đổi</Button>
                                        </div>
                                    )}
                                {/* <input type="file" onChange={this.onChangeAvatar} /> */}
                            </div>

                            {/* <div className="col-md-7 col-sm-7 contact_left_grid mt-4 pt-1">
                                <h5 className="float-left text-white">
                                    <b>Địa chỉ:</b>
                                </h5>
                                <input
                                    type="text"
                                    id="address"
                                    value={user.}
                                />
                            </div> */}
                            <div className="col-md-4 col-sm-4 contact_left_grid mt-4">
                                <h5 className="float-left text-white">
                                    <b>Tỉnh/Thành phố:</b>
                                </h5>
                                <Form.Control
                                    as="select"
                                    className="select-form"
                                    id="selectCity"
                                    required
                                >
                                </Form.Control>
                            </div>
                            <div className="col-md-3 col-sm-3 contact_left_grid mt-4">
                                <h5 className="float-left text-white">
                                    <b>Quận:</b>
                                </h5>
                                <Form.Control
                                    as="select"
                                    className="select-form"
                                    id="selectCity"
                                    required
                                >
                                </Form.Control>
                            </div>

                            {decoded.categoryUser === 1 ? (
                                <div>
                                    <div className="col-md-5 col-sm-5 pb-4">
                                        <h5 className="float-left pt-4 text-white">
                                            <b>Hãy chọn các kỹ năng của bạn:</b>
                                        </h5>
                                        <Form.Control
                                            as="select"
                                            multiple
                                            className="select-form"
                                            onChange={this.onChangeSelection}
                                            id="selectTagList"
                                        >
                                            <option value="1">Công nghệ phần mềm</option>
                                            <option value="2">Hệ thống thông tin</option>
                                            <option value="3">Mạng máy tính</option>
                                        </Form.Control>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="col-md-2 col-sm-2 pt-6">
                                        <div className="col-md-1 col-sm-1">
                                            <Button
                                                onClick={this.onChooseTag}
                                                id="btnChoose"
                                            >
                                                {'>'}
                                            </Button>
                                        </div>
                                        <div className="col-md-1 col-sm-1">
                                            <Button
                                                onClick={this.onUnchooseTag}
                                                id="btnUnchoose"
                                            >
                                                {'<'}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-5 pb-4 float-right">
                                        <h5 className="float-left pt-4 text-white">
                                            <b>Kỹ năng được chọn:</b>
                                        </h5>
                                        <Form.Control
                                            as="select"
                                            multiple
                                            className="select-form"
                                            onChange={this.onChangeSelection}
                                            id="selectedTagList"
                                            required
                                        >
                                        </Form.Control>
                                    </div>
                                    <div className="col-md-12 col-sm-12 contact_left_grid">
                                        <h5 className="float-left pt-4 text-white">
                                            <b>Giá tiền thuê/giờ:</b>
                                        </h5>
                                        <input
                                            type="number"
                                            id="price"
                                            placeholder="VND"
                                            required
                                            value={user.price}
                                        />
                                        <div className="invalid-feedback text-white">
                                            Please choose.
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 contact_left_grid">
                                        <h5 className="float-left pt-4 text-white">
                                            <b>Hãy giới thiệu một chút về bạn nhé:</b>
                                        </h5>
                                        <textarea
                                            type="textarea"
                                            id="intro"
                                            placeholder="Viết tại đây"
                                            value={user.introduce}
                                            required
                                        />
                                    </div>
                                </div>
                            ) : null}
                            <div className="col-md-12 col-sm-12 text-center">
                                <input
                                    type="submit"
                                    value="Hoàn thành"
                                    className="mt-5"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;
