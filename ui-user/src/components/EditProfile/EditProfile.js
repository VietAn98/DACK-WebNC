import React from 'react';
import jwtDecode from 'jwt-decode';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './EditProfile.css';

const user = JSON.parse(localStorage.getItem('user'));
const gender = [
    {
        value: 'Nam', text: 'Nam'
    },
    {
        value: 'Nữ', text: 'Nữ'
    }
];

class EditProfile extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = async () => {
        const {
            getListDisctrict,
            getListCity,
            getCityByIdDistrict,
            getSkills,
            getListSkills,
            getUserInfor,
        } = this.props;
        getListDisctrict();
        getListCity();
        await getUserInfor(user.userId);
        const { userProfiles } = await this.props;
        getCityByIdDistrict(userProfiles.districtId);
        await getSkills(user.userId);
        getListSkills();

        // console.log('user/ProfilesuserProfilesuserProfiles', userProfiles);
    }

    onGetAvatar = (e) => {
        const { avatarName, uploadAvatar } = this.props;
        avatarName(e.target.files[0]);

        const fd = new FormData();
        fd.append('avatar', e.target.files[0], e.target.files[0].name);
        uploadAvatar(fd);
    };


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

    onHandleChange = async (e) => {
        const { userLogin, currentUser } = this.props;

        await userLogin({
            ...currentUser,
            [e.target.id]: e.target.value
        });
        // await checkFieldsValueFormUpdateInfor(
        //     document.getElementById('name').value,
        //     document.getElementById('pAddress').value,
        //     document.getElementById('pPhoneNumber').value
        // );
    };

    onSubmitInforTeaching = async (e) => {
        e.preventDefault();

        const {
            nameAvatar,
            currentUser,
            updateStudentInfor,
            updateTeacherInfor,
            userLogin,
        } = this.props;

        const { gmail } = user;

        let avatar = '';
        if (currentUser.avatar === '' || currentUser.avatar === null) {
            avatar = `http://localhost:3001/images/${nameAvatar.name}`;
        } else {
            avatar = currentUser.avatar;
        }

        const name = document.getElementById('name').value;
        const intro = document.getElementById('introduce').value;
        const price = document.getElementById('price').value;
        const genderSelected = document.getElementById('selectGender').value;
        const idDistrict = document.getElementById('selectDistrict').value;

        const skills = document.getElementsByClassName('checkedbox');
        let stringSkill = '';
        for (let i = 0; i < skills.length; i += 1) {
            if (skills[i].checked === true) {
                // eslint-disable-next-line radix
                const a = `${parseInt(skills[i].id)},`;
                stringSkill += a;
            }
        }

        if (user.categoryUser === 0) {
            Promise.resolve(updateStudentInfor(gmail, name, genderSelected, idDistrict, avatar))
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cập Nhật Thành Công',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.value) {
                            window.location.reload();
                        }
                    });
                });

            // await userLogin({
            //     ...currentUser,
            //     name,
            //     genderSelected,
            //     idDistrict,
            //     avatar
            // });
        }

        if (user.categoryUser === 1) {
            Promise.resolve(updateTeacherInfor(gmail,
                name,
                genderSelected,
                idDistrict,
                intro,
                stringSkill,
                price,
                avatar)).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cập Nhật Thành Công',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.value) {
                            window.location.reload();
                        }
                    });
                });
            await updateTeacherInfor(gmail,
                name,
                genderSelected,
                idDistrict,
                intro,
                stringSkill,
                price,
                avatar);
            // await userLogin({
            //     ...currentUser,
            //     name,
            //     genderSelected,
            //     idDistrict,
            //     intro,
            //     stringSkill,
            //     price,
            //     avatar
            // });
            console.log('currentUser submit', currentUser);
        }
    };

    render() {
        const {
            listDistrict,
            listCity,
            cityName,
            districtNames,
            teacherSkills,
            currentUser,
            listSkills
        } = this.props;
        const tokenn = localStorage.token;
        let decoded = null;
        if (tokenn) {
            decoded = jwtDecode(tokenn);
        }
        const arraty = [];
        listSkills.forEach((item) => {
            let arr = {};
            teacherSkills.forEach((val) => {
                if (item.skillId === val.skillId) {
                    arr = Object.assign(item, { checked: true });
                    arraty.push(arr);
                } else { arraty.push(item); }
            });
        });
        // console.log('arraty', arraty);

        const newArr = [];
        arraty.forEach((element) => {
            if (!newArr.includes(element)) {
                newArr.push(element);
            }
        });
        console.log('cityName: ', cityName);

        // const checkedbox = document.getElementsByClassName('checkedbox');
        // console.log('checkedbox', checkedbox);
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
                                    onChange={this.onHandleChange}
                                />
                            </div>
                            <div className="col-md-2 col-sm-2 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Giới tính:</b>
                                </h5>
                                <Form.Control as="select" className="select-form" id="selectGender" required>
                                    {gender ? (gender.map((item) => {
                                        if (item.value === currentUser.gender) {
                                            return (
                                                <option selected className="black-title" value={item.value}>
                                                    {item.text}
                                                </option>
                                            );
                                        }
                                        return (
                                            <option className="black-title" value={item.value}>
                                                {item.text}
                                            </option>
                                        );
                                    })) : null}
                                </Form.Control>
                            </div>
                            <div className="col-md-5 col-sm-5 mt-4 contact_left_grid">
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
                                                        width: '100%', height: '100%', padding: '1%'
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
                            <div className="col-md-4 col-sm-4 mt-4">
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
                            <div className="col-md-3 col-sm-3 mt-4">
                                <h5 className="float-left text-white">
                                    <b>Quận:</b>
                                </h5>
                                <Form.Control
                                    as="select"
                                    className="select-form"
                                    id="selectDistrict"
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
                                                    if (item.districtId === currentUser.districtId) {
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

                            {user.categoryUser === 1 ? (
                                <div>
                                    {currentUser.avatar === '' || currentUser.avatar === null ? (
                                        <div className="col-md-5 col-sm-5 contact_left_grid">
                                            <h5 className="float-left pt-4 text-white">
                                                <b>Giá tiền thuê/giờ:</b>
                                            </h5>
                                            <input
                                                type="number"
                                                id="price"
                                                placeholder="VND"
                                                required
                                                // eslint-disable-next-line radix
                                                value={parseInt(currentUser.price)}
                                                onChange={this.onHandleChange}
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
                                                    // eslint-disable-next-line radix
                                                    value={parseInt(currentUser.price)}
                                                    onChange={this.onHandleChange}
                                                />
                                                <div className="invalid-feedback text-white">
                                                    Please choose.
                                                </div>
                                            </div>
                                        )}

                                    <div className="col-md-12 col-sm-12">
                                        <h5 className="float-left pt-4 text-white">
                                            <b>Hãy chọn các kỹ năng của bạn:</b>
                                        </h5>
                                        <div className="mt-5 pt-4 font-size-13">
                                            {newArr ? (
                                                newArr.map((item) => {
                                                    return (
                                                        <div className="col-md-2 col-sm-2">
                                                            <input
                                                                className="checkedbox"
                                                                defaultChecked={item.checked ? true : false}
                                                                type="checkbox"
                                                                id={item.skillId}
                                                            />
                                                            <p>
                                                                {' '}
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    );
                                                })
                                            ) : null}
                                        </div>
                                        <div className="clearfix" />
                                    </div>

                                    <div className="col-md-12 col-sm-12 contact_left_grid">
                                        <h5 className="float-left pt-4 text-white">
                                            <b>Hãy giới thiệu một chút về bạn nhé:</b>
                                        </h5>
                                        <textarea
                                            type="textarea"
                                            id="introduce"
                                            placeholder="Viết tại đây"
                                            value={currentUser.introduce}
                                            required
                                            onChange={this.onHandleChange}
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
