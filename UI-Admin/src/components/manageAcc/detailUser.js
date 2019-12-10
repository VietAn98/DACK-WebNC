import React from 'react';
import Swal from 'sweetalert2';
import {
  Table,
  Spinner,
  Col,
  Form,
  Button,
  Container,
  Row,
  Image
} from 'react-bootstrap';
import { getAddressByUser } from '../../actions/manageAccAction';
import './style.css';

class detailsUser extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getDetailUsers } = this.props;
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    Promise.resolve(getDetailUsers(id))
      .then(() => {
        const { detailUser, getAddressByUser, getDistrictByUser } = this.props;
        getAddressByUser(detailUser.districtId);
      })
      .then(() => {
        const { detailUser, getAddressByUser, getDistrictByUser } = this.props;

        getDistrictByUser(detailUser.districtId);
      });
  }

  onhandleClick = (e) => {
    e.preventDefault();
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    const { updateStateAccount } = this.props;
    updateStateAccount(id, document.getElementById('status').value).then((rs) => {
      Swal.fire('Thông báo', 'Thành công', 'Cập  nhật thông tin thành công');
    });
  };

  render() {
    const { detailUser, getAddress, getDistrict } = this.props;
    console.log('000000000000000000000000', detailUser.introduce);
    return (
      <div className="inner-block">
        <Container className="my-container">
          <Row>
            <Col md={12} sm={12} className="justify-center mb-5 mt-2">
              <Image
                className="ml--15"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBs5C5a5e45YfpmPpgQCfmScqN3cqHuFIq7FRAlCWFEGh-mllE&s"
                roundedCircle
              />
            </Col>
          </Row>

          <Form
            action="#"
            method="post"
            onSubmit={this.onhandleClick}
          >
            <Form.Group className="col-md-6 col-sm-6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                readOnly
                type="email"
                placeholder="Enter email"
                value={detailUser.gmail}
              />
            </Form.Group>

            <Form.Group className="col-md-6 col-sm-6">
              <Form.Label>Tên </Form.Label>
              <Form.Control
                readOnly
                type="text"
                placeholder="name"
                value={detailUser.name}
              />
            </Form.Group>

            <Form.Group className="col-md-3 col-sm-3">
              <Form.Label>Thành Phố/Tỉnh</Form.Label>
              <Form.Control
                readOnly
                type="text"
                placeholder="Chưa cập nhật"
                value={getAddress.name}
              />
            </Form.Group>

            <Form.Group className="col-md-3 col-sm-3">
              <Form.Label>Quận </Form.Label>
              <Form.Control
                readOnly
                type="text"
                placeholder="Chưa cập nhật"
                value={getDistrict.name}
              />
            </Form.Group>

            {detailUser.categoryUser ? (
              <div>
                <Form.Group className="col-md-3 col-sm-3">
                  <Form.Label>Giá (/h)</Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    placeholder="Chưa cập nhật"
                    value={detailUser.price}
                  />
                </Form.Group>

                <Form.Group className="col-md-3 col-sm-3">
                  <Form.Label>Tỉ lệ thành công </Form.Label>
                  <Form.Control
                    readOnly
                    type="text"
                    placeholder="Chưa cập nhật"
                    value={detailUser.rateSuccess}
                  />
                </Form.Group>
              </div>
            ) : null}

            <Form.Group className="col-md-3 col-sm-3">
              <Form.Label>Giới tính</Form.Label>

              <Form.Control
                readOnly
                placeholder="nam/nữ"
                value={detailUser.gender}
              />
            </Form.Group>

            {detailUser.categoryUser ? (
              <Form.Group
                className="col-md-6 col-sm-6"
                controlId="formGridAddress2"
                style={{ display: 'grid' }}

              >
                <Form.Label>Giới thiệu bản thân</Form.Label>
                <textarea style={{ height: '200px' }} readOnly value={detailUser.introduce} />
              </Form.Group>
            ) : null}

            <Form.Group className="col-md-3 col-sm-3">
              <Form.Label>Trạng thái tài khoản</Form.Label>
              {detailUser.adLock ? (
                <Form.Control as="select" id="status">
                  <option value="1">
                    Cho phép hoạt động
                  </option>
                  <option value="0">Khóa tài khoản</option>
                </Form.Control>
              ) : (
                  <Form.Control as="select" id="status">
                    <option value="0">
                      Khóa tài khoản
                    </option>
                    <option value="1">Cho phép hoạt động</option>
                  </Form.Control>
                )}
            </Form.Group>

            <div className="col-md-12 col-sm-12 justify-center mt-4">
              <Button className="btn-submit-detailUser" type="submit" >
                Lưu lại
            </Button>
            </div>

          </Form>
        </Container>
      </div>
    );
  }
}
export default detailsUser;
