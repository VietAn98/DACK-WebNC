import React from "react";
import {
  Table,
  Spinner,
  Col,
  Form,
  Button,
  Container,
  Row,
  Image
} from "react-bootstrap";
import { getAddressByUser } from "../../actions/manageAccAction";
class detailUser extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getDetailUsers } = this.props;
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];
    Promise.resolve(getDetailUsers(id))
      .then(() => {
        const { detailUser, getAddressByUser, getDistrictByUser } = this.props;
        console.log(detailUser.districtId);
        getAddressByUser(detailUser.districtId);
      })
      .then(() => {
        const { detailUser, getAddressByUser, getDistrictByUser } = this.props;

        getDistrictByUser(detailUser.districtId);
      });
  }

  onhandleClick = e => {
    e.preventDefault();
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];
    const {updateStateAccount} = this.props;    
    updateStateAccount(id,document.getElementById('status').value);
    window.location.reload();
  };

  render() {
    const { detailUser, getAddress, getDistrict } = this.props;
    return (
      <div style={{ padding: "10px" }}>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBs5C5a5e45YfpmPpgQCfmScqN3cqHuFIq7FRAlCWFEGh-mllE&s"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>
        <Form onSubmit={this.onhandleClick}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                readOnly
                type="email"
                placeholder="Enter email"
                value={detailUser.gmail}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Tên </Form.Label>
              <Form.Control
                readOnly
                type="text"
                placeholder="name"
                value={detailUser.name}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Thành Phố/Tỉnh</Form.Label>
              <Form.Control
                readOnly
                type="text"
                placeholder="Chưa cập nhật"
                value={getAddress.name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Quận </Form.Label>
              <Form.Control
                readOnly
                type="text"
                placeholder="Chưa cập nhật"
                value={getDistrict.name}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Giới tính</Form.Label>

            <Form.Control
              readOnly
              placeholder="nam/nữ"
              value={detailUser.gender}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Trạng thái hoạt động</Form.Label>
            {detailUser.adLock ? (
              <Form.Control as="select" id="status">
                <option selected value="1">
                  Đang hoạt động
                </option>
                <option value="0">Đang khóa</option>
              </Form.Control>
            ) : (
              <Form.Control as="select" id="status">
                <option value="1">Đang hoạt động</option>
                <option selected value="0">
                  Đang khóa
                </option>
              </Form.Control>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Lưu lại
          </Button>
        </Form>
      </div>
    );
  }
}
export default detailUser;
