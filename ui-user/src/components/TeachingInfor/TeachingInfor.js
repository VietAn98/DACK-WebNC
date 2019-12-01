import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './TeachingInfor.css';

class TeachingInfor extends React.PureComponent {
  onChangeSelection = (e) => {
    const arr = [];
    arr.push(e.target.value);
    console.log(e.target.length);
  };

  render() {
    return (
      <div className="contact-sectn" id="contact">
        <Container>
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '20px',
              paddingBottom: '3rem',
            }}
          >
            <h3 className="w3layouts-heading white-title">
              <span>Đăng Ký Thông Tin Dạy Học</span>
            </h3>
            <div className="w3-agile_mail_grids justify-center">
              <div className="col-md-7 w3-agile_mail_grid_right">
                <Form action="#" method="post">
                  <div className="col-md-12 col-sm-12 contact_left_grid">
                    <input
                      type="text"
                      name="name"
                      placeholder="Họ và tên"
                      required=""
                    />
                  </div>
                  <br />
                  <div className="col-md-12 col-sm-12 pb-4">
                    <h5 className="float-left text-white pt-4">
                      <b>Chuyên ngành của bạn:</b>
                    </h5>
                    <Form.Control
                      as="select"
                      className="select-form"
                      onChange={this.onChangeSelection}
                    >
                      <option className="black-title" value="software">
                        Công nghệ phần mềm
                      </option>
                      <option className="black-title" value="system">
                        Hệ thống thông tin
                      </option>
                      <option className="black-title" value="network">
                        Mạng máy tính
                      </option>
                    </Form.Control>
                    <div className="clearfix" />
                  </div>
                  <div className="col-md-5 col-sm-5 pb-4">
                    <h5 className="float-left text-white pt-4">
                      <b>Hãy chọn các kỹ năng của bạn:</b>
                    </h5>
                    <Form.Control
                      as="select"
                      multiple
                      className="select-form"
                      onChange={this.onChangeSelection}
                    >
                      <option value="software">Công nghệ phần mềm</option>
                      <option value="system">Hệ thống thông tin</option>
                      <option value="network">Mạng máy tính</option>
                    </Form.Control>
                    <div className="clearfix" />
                  </div>
                  <div className="col-md-1 col-sm-1 pt-10 mr-3">
                    <Button className="mb-2">{'>'}</Button>
                    <Button>{'<'}</Button>
                  </div>
                  <div className="col-md-5 col-sm-5 pb-4">
                    <h5 className="float-left text-white pt-4">
                      <b>Kỹ năng được chọn:</b>
                    </h5>
                    <Form.Control
                      as="select"
                      multiple
                      className="select-form"
                      onChange={this.onChangeSelection}
                    >
                      {/* <option className="black-title" value="software">
                        Công nghệ phần mềm
                      </option>
                      <option className="black-title" value="system">
                        Hệ thống thông tin
                      </option>
                      <option className="black-title" value="network">
                        Mạng máy tính
                      </option> */}
                    </Form.Control>
                  </div>
                  <div className="col-md-12 col-sm-12 contact_left_grid">
                    <textarea
                      type="textarea"
                      name="intro"
                      placeholder="Giới thiệu đôi chút về bản thân bạn nào"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Hoàn thành"
                      className="signUpSubmit"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default TeachingInfor;
