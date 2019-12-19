/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-prototype-builtins */
import React from 'react';
import Swal from 'sweetalert2';
import { Container, Form, Button } from 'react-bootstrap';
import numeral from 'numeral';
import moment from 'moment';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import PageNotFound from '../../pages/PageNotFound';
import './Contract.css';
import history from '../../history';

import stampWaiting from '../../public/images/waiting-stamp.jpg';
import stampConfirm from '../../public/images/confirmed-stamp.jpg';
import stampComplete from '../../public/images/complete-stamp.png';
import stampDenied from '../../public/images/denied-stamp.jpg';
// import stampPaid from '../../public/images/paid-stamp.png';
import stampComplaint from '../../public/images/complaint-stamp.jpg';
// import stampCanceled from '../../public/images/cancelled-stamp.jpg';

// const today = new Date();
// const Today = moment(today).format('DD-MM-YYYY');
const user = JSON.parse(localStorage.getItem('user'));
let isShow = false;
const today = new Date();
const Today = moment(today).format('DD-MM-YYYY');
// let isDisable = false;

class ReadOnlyContract extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = async () => {
        const {
            getListCity,
            getListDisctrict,
            getUserInfor,
            // listNameSkill,
            getCityByIdDistrict,
            getCityByIdDistrictForTeacher,
            getDetailContractByIdContract,
            getInforUserById
        } = this.props;
        const path = window.location.pathname.split('-');
        const id = path[path.length - 1];
        // const user = JSON.parse(localStorage.getItem('user'));

        getListCity();
        await getDetailContractByIdContract(id);
        getListDisctrict();
        await getUserInfor(user.userId);
        // listNameSkill(id);

        const { contractByIdContract } = this.props;
        // eslint-disable-next-line no-prototype-builtins
        if (contractByIdContract.hasOwnProperty('detailContract')) {
            if (user.categoryUser === 0) {
                await getInforUserById(contractByIdContract.detailContract[0].teacherId);
                if (contractByIdContract.detailContract[0].state === 2) {
                    let parts = contractByIdContract.detailContract[0].endDay.split('-');
                    const dateend = Number(parts[2] + parts[1] + parts[0]);
                    parts = Today.split('-');
                    const datenow = Number(parts[2] + parts[1] + parts[0]);
                    if (datenow - dateend <= 3) {
                        isShow = true;
                    }
                }
            } else {
                await getInforUserById(contractByIdContract.detailContract[0].studentId);
            }

            if (contractByIdContract.detailContract[0].state === 5) {
                const { getComplaintByIdContract } = this.props;
                await getComplaintByIdContract(contractByIdContract.detailContract[0].idContract);
            }
        }

        const { userProfiles, userInfor } = this.props;
        getCityByIdDistrict(userProfiles.districtId);
        getCityByIdDistrictForTeacher(userInfor.districtId);
    };

    onClickAccept = (idContract, state) => {
        const { updateStateContract } = this.props;
        updateStateContract(idContract, state);
    }

    onClickDeny = (idContract, state) => {
        const { updateStateContract } = this.props;
        updateStateContract(idContract, state);
    }

    onClickBack = () => {
        history.push('/Settings');
    }

    onClickComplain = async () => {
        const { value: text } = await Swal.fire({
            title: 'Lý do khiếu nại',
            input: 'textarea',
            inputPlaceholder: 'Nhập khiếu nại của bạn ở đây...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Bạn hãy viết gì đó vào đây!';
                }
            },
            showCancelButton: true
        });

        if (text) {
            const { contractByIdContract } = this.props;
            if (contractByIdContract.hasOwnProperty('detailContract')) {
                const { sendComplaint } = this.props;
                sendComplaint(contractByIdContract.detailContract[0].idContract, text);
            }
        }
    }

    onClickComment = () => {
        document.getElementById('form-comment').style.display = 'block';
    }

    onClickComplete = () => {
        const { contractByIdContract } = this.props;
        if (contractByIdContract.hasOwnProperty('detailContract')) {
            const { updateStateContract } = this.props;
            Promise.resolve(updateStateContract(contractByIdContract.detailContract[0].idContract, 3))
                .then(async () => {
                    await Swal.fire({
                        icon: 'success',
                        title: 'Thành Công',
                    });
                    window.location.reload();
                });
        }
    }

    OnRateStar = (e) => {
        const { rateStar } = this.props;
        rateStar(e.rating);
        // console.log(e.rating);
    }

    onSubmitCommentForm = (e) => {
        e.preventDefault();
        const { contractByIdContract } = this.props;
        if (contractByIdContract.hasOwnProperty('detailContract')) {
            const { sendComment, starNumber } = this.props;
            const { studentId } = contractByIdContract.detailContract[0];
            const { teacherId } = contractByIdContract.detailContract[0];
            const { idContract } = contractByIdContract.detailContract[0];
            const starsNumber = starNumber;
            const content = document.getElementById('textarea-comment').value;
            if (starsNumber === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Xin hãy thực hiện phần Đánh giá',
                });
            } else {
                sendComment(studentId, content, starsNumber, teacherId, idContract);
            }
        }
    }

    // eslint-disable-next-line consistent-return
    render() {
        const tokenn = localStorage.token;
        const {
            listCity,
            districtNames,
            userInfor,
            listDistrict,
            userProfiles,
            // endLearnDay,
            // listNameOfSkill,
            cityName,
            cityNameForTeacher,
            // totalHour,
            contractByIdContract,
            complaintByIdContract
        } = this.props;
        // const { skills } = listNameOfSkill;
        console.log('complaintByIdContract', complaintByIdContract);
        if (tokenn) {
            return (
                <div className="div-container">
                    <Container className="contract-container">
                        {contractByIdContract.hasOwnProperty('detailContract')
                            && contractByIdContract.detailContract[0].state === 1
                            ? (<img src={stampWaiting} alt="stamp" className="mystamp float-right" />)
                            : null}
                        {contractByIdContract.hasOwnProperty('detailContract')
                            && contractByIdContract.detailContract[0].state === 2
                            ? (<img src={stampConfirm} alt="stamp" className="mystamp float-right" />)
                            : null}
                        {contractByIdContract.hasOwnProperty('detailContract')
                            && contractByIdContract.detailContract[0].state === 3
                            ? (<img src={stampComplete} alt="stamp" className="mystamp float-right" />)
                            : null}
                        {contractByIdContract.hasOwnProperty('detailContract')
                            && contractByIdContract.detailContract[0].state === 4
                            ? (<img src={stampDenied} alt="stamp" className="mystamp float-right" />)
                            : null}
                        {contractByIdContract.hasOwnProperty('detailContract')
                            && contractByIdContract.detailContract[0].state === 5
                            ? (<img src={stampComplaint} alt="stamp" className="mystamp float-right" />)
                            : null}
                        <h1 className="text-center">
                            <b style={{ paddingLeft: '20%' }}>BẢNG HỢP ĐỒNG</b>
                        </h1>
                        <p className="text-center">
                            <i style={{ paddingLeft: '18%' }}>
                                Ngày tạo:
                                {' '}
                                {contractByIdContract.hasOwnProperty('detailContract')
                                    ? `${contractByIdContract.detailContract[0].dateCreate}` : null}
                            </i>
                        </p>
                        {/* <p className="text-center">
              <i>(ID: 123)</i>
            </p> */}
                        <div className="my-container">
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
                                                        {user.categoryUser === 0
                                                            ? (<u>Học viên:</u>)
                                                            : (<u>Giáo viên:</u>)}
                                                    </b>
                                                </h3>
                                            </Form.Label>
                                            <br />
                                        </div>
                                        <Form.Group className="col-md-12 col-sm-12">
                                            <Form.Label>Họ tên:</Form.Label>
                                            <Form.Control id="formcontract" disabled type="text" value={userProfiles.name} />
                                        </Form.Group>
                                        <Form.Group className="col-md-12 col-sm-12">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control id="formcontract" disabled type="text" value={userProfiles.gmail} />
                                        </Form.Group>
                                        <div className="col-md-12 col-sm-12">
                                            <Form.Label>Địa chỉ:</Form.Label>
                                        </div>
                                        <div className="col-md-12 col-sm-12 mb-3">
                                            <Form.Control
                                                id="formcontract"
                                                type="text"
                                                value={userInfor.address}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <Form.Control
                                                id="formcontract"
                                                disabled
                                                as="select"
                                                onChange={this.onChangeCity1}
                                                required
                                                style={{ height: '100%' }}
                                            >
                                                {listCity
                                                    ? listCity.map((item) => {
                                                        if (item.cityId === cityName.cityId) {
                                                            return (
                                                                <option
                                                                    selected
                                                                    value={item.cityId}
                                                                    className="black-title"
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        }
                                                        return (
                                                            <option value={item.cityId} className="black-title">
                                                                {item.name}
                                                            </option>
                                                        );
                                                    })
                                                    : null}
                                            </Form.Control>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <Form.Control id="formcontract" disabled as="select" style={{ height: '100%' }}>
                                                {districtNames.length !== 0
                                                    ? districtNames.map((item) => (
                                                        <option value={item.districtId} className="black-title">
                                                            {item.name}
                                                        </option>
                                                    ))
                                                    : listDistrict.map((item) => {
                                                        if (item.cityId === cityName.cityId) {
                                                            if (item.districtId
                                                                === userProfiles.districtId) {
                                                                return (
                                                                    <option
                                                                        selected
                                                                        value={item.districtId}
                                                                        className="black-title"
                                                                    >
                                                                        {item.name}
                                                                    </option>
                                                                );
                                                            }
                                                            return (
                                                                <option
                                                                    value={item.districtId}
                                                                    className="black-title"
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="col-md-12 col-sm-12">
                                            <Form.Label>
                                                <h3>
                                                    <b>
                                                        {user.categoryUser === 0
                                                            ? (<u>Giáo viên:</u>)
                                                            : (<u>Học viên:</u>)}
                                                    </b>
                                                </h3>
                                            </Form.Label>
                                            <br />
                                        </div>
                                        <Form.Group className="col-md-12 col-sm-12">
                                            <Form.Label>Họ tên:</Form.Label>
                                            <Form.Control
                                                id="formcontract"
                                                type="text"
                                                value={userInfor.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-12 col-sm-12">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control
                                                id="formcontract"
                                                type="text"
                                                value={userInfor.gmail}
                                                disabled
                                            />
                                        </Form.Group>
                                        <div className="col-md-12 col-sm-12">
                                            <Form.Label>Địa chỉ:</Form.Label>
                                        </div>
                                        <div className="col-md-12 col-sm-12 mb-3">
                                            <Form.Control
                                                id="formcontract"
                                                type="text"
                                                value={userInfor.address}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <Form.Control id="formcontract" as="select" disabled style={{ height: '100%' }}>
                                                {listCity
                                                    ? listCity.map((item) => {
                                                        if (item.cityId
                                                            === cityNameForTeacher.cityId) {
                                                            return (
                                                                <option
                                                                    selected
                                                                    value={item.cityId}
                                                                    className="black-title"
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        }
                                                        return (
                                                            <option value={item.cityId} className="black-title">
                                                                {item.name}
                                                            </option>
                                                        );
                                                    })
                                                    : null}
                                            </Form.Control>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <Form.Control id="formcontract" as="select" disabled style={{ height: '100%' }}>
                                                {listDistrict.map((item) => {
                                                    if (item.cityId
                                                        === cityName.cityId) {
                                                        if (item.districtId
                                                            === userProfiles.districtId) {
                                                            return (
                                                                <option
                                                                    selected
                                                                    value={item.districtId}
                                                                    className="black-title"
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        }
                                                        return (
                                                            <option
                                                                value={item.districtId}
                                                                className="black-title"
                                                            >
                                                                {item.name}
                                                            </option>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </Form.Control>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 pl-5 pr-5">
                                    <div className="col-sm-12 col-md-12 pt-4">
                                        <h3>
                                            <b>
                                                <u>Thông tin và Chi phí:</u>
                                            </b>
                                        </h3>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <p>- Kỹ năng yêu cầu dạy:</p>
                                        {contractByIdContract.hasOwnProperty('detailContract')
                                            ? contractByIdContract.skills.map((item) => (
                                                <Form.Check
                                                    className="ml-5 checkcheck"
                                                    inline
                                                    checked
                                                    disabled
                                                    type="checkbox"
                                                    label={item.name}
                                                    value={item.idSkill}
                                                />
                                            ))
                                            : null}
                                    </div>
                                </div>

                                <div className="pl-5 pr-5">
                                    <div className="col-sm-2 col-md-2 mt-5">
                                        - Chi phí:
                                    </div>
                                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                                        <b>Ngày bắt đầu</b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                                        <b>Ngày kết thúc</b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                                        <b>Số giờ/ngày</b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 mt-5 text-center">
                                        <b>Số ngày/tuần</b>
                                    </div>
                                    <div className="col-sm-2 col-md- mt-5 text-center">
                                        <b>Tổng tiền (VND)</b>
                                    </div>
                                    <div className="col-sm-2 col-md-2" />
                                    <div className="col-sm-2 col-md-2 text-center mt-3">
                                        <b className="color-red">
                                            {contractByIdContract.hasOwnProperty('detailContract')
                                                ? `${contractByIdContract.detailContract[0].startDay}` : null}
                                        </b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 text-center mt-3">
                                        <b className="color-red">
                                            {contractByIdContract.hasOwnProperty('detailContract')
                                                ? `${contractByIdContract.detailContract[0].endDay}` : null}
                                        </b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 text-center mt-3">
                                        <b className="color-red">
                                            {contractByIdContract.hasOwnProperty('detailContract')
                                                ? `${contractByIdContract.detailContract[0].numberHour}` : null}
                                        </b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 text-center mt-3">
                                        <b className="color-red">
                                            {contractByIdContract.hasOwnProperty('detailContract')
                                                ? `${contractByIdContract.detailContract[0].numberDay}` : null}
                                        </b>
                                    </div>
                                    <div className="col-sm-2 col-md-2 text-center mt-3">
                                        <h3>
                                            <b className="color-red">
                                                {contractByIdContract.hasOwnProperty('detailContract')
                                                    ? `${numeral(`${contractByIdContract.detailContract[0].price}`).format(
                                                        '(0,0)'
                                                    )}` : null}
                                            </b>
                                        </h3>
                                    </div>
                                </div>

                                <div className="pl-5 pr-5">
                                    <div className="col-sm-12 col-md-12 mt-4 mb-5">
                                        <p style={{ color: 'red' }}>
                                            <i>*Lưu ý:</i>
                                        </p>
                                        <p>
                                            - Bên B sẽ phải có trách nhiệm dạy
                                            {' '}
                                            học đầy đủ và làm đúng
                                            theo yêu cầu của 2 bên như đã thỏa thuận.
                                        </p>
                                        <p>
                                            - Trong trường hợp bên B không hoàn thành đúng trách
                                            nhiệm, bên A có quyền
{' '}
                                            <b>khiếu nại</b>
                                            {' '}
                                            lên hệ thống để yêu cầu hoàn tiền.
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

                                <div className="col-sm-12 col-md-12 mt-5 text-center">
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 1
                                        && user.categoryUser === 1
                                        ? (
                                            <div style={{
                                                display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%'
                                            }}
                                            >
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                                <Button
                                                    variant="success"
                                                    onClick={
                                                        this.onClickAccept.bind(
                                                            this,
                                                            contractByIdContract
                                                                .detailContract[0].idContract, 2
                                                        )
                                                    }
                                                >
                                                    Đồng Ý
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={
                                                        this.onClickDeny.bind(this,
                                                            contractByIdContract
                                                                .detailContract[0].idContract, 4)
                                                    }
                                                >
                                                    Từ Chối
                                                </Button>
                                            </div>
                                        ) : null}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 1
                                        && user.categoryUser === 0
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}

                                    {/* Đã xác nhận dạy */}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 2
                                        && user.categoryUser === 1
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 2
                                        && user.categoryUser === 0
                                        ? (
                                            <div style={{
                                                display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%'
                                            }}
                                            >
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                                {isShow ? (
                                                    <Button variant="success" onClick={this.onClickComplete}>Hoàn thành khóa học</Button>
                                                ) : null}
                                                {isShow ? (
                                                    <Button variant="warning" onClick={this.onClickComplain}>Khiếu nại</Button>
                                                ) : null}
                                            </div>
                                        ) : null}

                                    {/* Đã hoàn thành */}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 3
                                        && user.categoryUser === 1
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 3
                                        && user.categoryUser === 0
                                        ? (
                                            <div style={{
                                                display: 'flex', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%'
                                            }}
                                            >
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                                {contractByIdContract.detailContract[0].isDanhGia === 0
                                                    ? (
                                                        <Button variant="danger" onClick={this.onClickComment}>Đánh giá Khóa học & Giáo viên</Button>
                                                    ) : (<Button variant="danger" disabled>Bạn đã đánh giá khóa học này rồi</Button>)}
                                            </div>
                                        ) : null}

                                    {/* Đã từ chối dạy */}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 4
                                        && user.categoryUser === 1
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 4
                                        && user.categoryUser === 0
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}

                                    {/* Đang khiếu nại */}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 5
                                        && user.categoryUser === 1
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}
                                    {contractByIdContract.hasOwnProperty('detailContract')
                                        && contractByIdContract.detailContract[0].state === 5
                                        && user.categoryUser === 0
                                        ? (
                                            <div>
                                                <Button variant="dark" onClick={this.onClickBack}>Quay về</Button>
                                            </div>
                                        ) : null}
                                </div>
                            </Form>
                        </div>
                    </Container>

                    <div className="contract-container container" id="form-comment" style={{ marginTop: '1em', display: 'none' }}>
                        <Form action="#" method="post" onSubmit={this.onSubmitCommentForm}>
                            <div className="my-container">
                                <h1 className="text-center mb-4">
                                    <b>
                                        Đánh Giá & Nhận Xét
                                    </b>
                                </h1>

                                <div className="col-md-3 col-sm-3">
                                    <img src={user.avatar} alt="avatar" style={{ width: '100%' }} />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="col-md-12 col-sm-12">
                                        <h4><b>Nhận xét:</b></h4>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="(Không bắt buộc)"
                                            style={{ height: '93px' }}
                                            id="formcontract"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <h4><b>Đánh giá:</b></h4>
                                    <div className="starsar mt-2">
                                        <Rater total={5} rating={0} onRate={this.OnRateStar} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 justify-center mt-5">
                                <Button
                                    size="lg"
                                    type="submit"
                                    variant="dark"
                                >
                                    Gửi
                                </Button>
                            </div>
                        </Form>
                    </div>

                    {complaintByIdContract.length !== 0
                        ? (
                            <div className="contract-container container" id="form-comment" style={{ marginTop: '1em', paddingBottom: '1em' }}>
                                <p>
                                    <b className="color-red">Lý do khiếu nại: </b>
                                    {complaintByIdContract[0].reason}
                                </p>
                            </div>
                        ) : null}
                </div>
            );
        }
        return <PageNotFound />;
    }
}

export default ReadOnlyContract;
