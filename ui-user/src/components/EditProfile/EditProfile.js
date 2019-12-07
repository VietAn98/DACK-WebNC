import React from 'react';
import jwtDecode from 'jwt-decode';
import { Form, Button } from 'react-bootstrap';
import './EditProfile.css';

const user = JSON.parse(localStorage.getItem('user'));

class EditProfile extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = () => {
        const {
            getListDisctrict,
            getListCity,
            getCityByIdDistrict,
            getSkills,
            userLogin
        } = this.props;
        getListDisctrict();
        getListCity();
        getCityByIdDistrict(user.districtId);
        getSkills(user.userId);
        userLogin(user);
    }

    onChangeCity = (e) => {
        const { getDistrictByIdCity } = this.props;
        getDistrictByIdCity(e.target.value);
    }

    onChangeImage = () => {
        const { userLogin, currentUser } = this.props;
        userLogin({
            ...currentUser,
            avatar: ''
        });
    }

    onSubmitInforTeaching = (e) => {
        e.preventDefault();
    }

    render() {
        const {
            listDistrict, listCity, cityName, districtNames, teacherSkills, currentUser
        } = this.props;
        const tokenn = localStorage.token;
        let decoded = null;
        if (tokenn) {
            decoded = jwtDecode(tokenn);
        }
        console.log('currentUser', currentUser);

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
                            <div className="col-md-5 col-sm-5 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Họ và tên:</b>
                                </h5>
                                <input
                                    type="text"
                                    id="name"
                                    value={currentUser.name}
                                    required
                                />
                            </div>
                            <div className="col-md-2 col-sm-2 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Giới tính:</b>
                                </h5>
                                <Form.Control as="select" className="select-form" id="selectGender" required>
                                    <option className="black-title" value="Nam">
                                        Nam
                                    </option>
                                    <option className="black-title" value="Nữ">
                                        Nữ
                                    </option>
                                </Form.Control>
                            </div>
                            <div className="col-md-5 col-sm-5 contact_left_grid mt-4">
                                {currentUser.avatar === null || currentUser.avatar === '' ? (
                                    <div>
                                        <h5 className="float-left text-white">
                                            <b>Chọn ảnh đại diện:</b>
                                        </h5>
                                        <input required className="mt-5" type="file" onChange={this.onGetAvatar} />
                                    </div>
                                ) : (
                                        <div>
                                            <div className="avatarHolder">
                                                <img
                                                    style={{
                                                        width: '33%', height: '33%', padding: '1%'
                                                    }}
                                                    alt="avatar"
                                                    src={currentUser.avatar}
                                                    required
                                                />
                                            </div>
                                            <Button
                                                style={{ marginLeft: '40%', marginTop: '1%' }}
                                                onClick={this.onChangeImage}
                                            >
                                                Thay đổi
                                            </Button>
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
                            <div className="col-md-5 col-sm-5 contact_left_grid mt-4">
                                <h5 className="float-left text-white">
                                    <b>Tỉnh/Thành phố:</b>
                                </h5>
                                <Form.Control
                                    as="select"
                                    className="select-form"
                                    id="selectCity"
                                    onChange={this.onChangeCity}
                                    required
                                >
                                    {listCity ? (
                                        listCity.map((item) => {
                                            if (item.cityId === cityName.cityId) {
                                                return (
                                                    <option selected value={item.cityId} className="black-title">
                                                        {item.name}
                                                    </option>
                                                );
                                            }
                                            return <option value={item.cityId} className="black-title">{item.name}</option>;
                                        })
                                    ) : null}
                                </Form.Control>
                            </div>
                            <div className="col-md-2 col-sm-2 contact_left_grid mt-4">
                                <h5 className="float-left text-white">
                                    <b>Quận:</b>
                                </h5>
                                <Form.Control
                                    as="select"
                                    className="select-form"
                                    id="selectCity"
                                    required
                                >
                                    {districtNames.length !== 0 ? (
                                        districtNames.map((item) => (
                                            <option value={item.districtId} className="black-title">
                                                {item.name}
                                            </option>
                                        ))) : (
                                            listDistrict.map((item) => {
                                                if (item.cityId === cityName.cityId) {
                                                    if (item.districtId === user.districtId) {
                                                        return (
                                                            <option selected value={item.districtId} className="black-title">
                                                                {item.name}
                                                            </option>
                                                        );
                                                    }
                                                    return <option value={item.districtId} className="black-title">{item.name}</option>;
                                                }
                                                return null;
                                            })
                                        )}
                                </Form.Control>
                            </div>

                            {decoded.categoryUser === 1 ? (
                                <div>
                                    {user.avatar === '' || user.avatar === null ? (
                                        <div className="col-md-5 col-sm-5 contact_left_grid">
                                            <h5 className="float-left pt-4 text-white">
                                                <b>Giá tiền thuê/giờ:</b>
                                            </h5>
                                            <input
                                                type="number"
                                                id="price"
                                                placeholder="VND"
                                                required
                                                value={currentUser.price}
                                            />
                                            <div className="invalid-feedback text-white">
                                                Please choose.
                                            </div>
                                        </div>
                                    ) : (
                                            <div className="col-md-7 col-sm-7 contact_left_grid">
                                                <h5 className="float-left pt-4 text-white">
                                                    <b>Giá tiền thuê/giờ:</b>
                                                </h5>
                                                <input
                                                    type="number"
                                                    id="price"
                                                    placeholder="VND"
                                                    required
                                                    value={currentUser.price}
                                                />
                                                <div className="invalid-feedback text-white">
                                                    Please choose.
                                                </div>
                                            </div>
                                        )}

                                    <div className="col-md-12 col-sm-12">
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
                                                required
                                            >
                                                <option value="1">Công nghệ phần mềm</option>
                                                <option value="2">Hệ thống thông tin</option>
                                                <option value="3">Mạng máy tính</option>
                                            </Form.Control>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="col-md-2 col-sm-2 pt-6">
                                            <Button
                                                onClick={this.onChooseTag}
                                                id="btnChoose"
                                            >
                                                {'>'}
                                            </Button>
                                            <Button
                                                onClick={this.onUnchooseTag}
                                                id="btnUnchoose"
                                                className="float-right"
                                            >
                                                {'<'}
                                            </Button>
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
                                                {/* {teacherSkills? (
                                                    teacherSkills.map((item) => {
                                                        return <option value={item.skillId}>Công nghệ phần mềm</option>;
                                                    })
                                                ) : ()} */}
                                            </Form.Control>
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
                                            value={currentUser.introduce}
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
