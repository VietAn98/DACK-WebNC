import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import numeral from 'numeral';
import history from '../history';
import avatar from '../public/images/avatar.jpg';
import CardTuitor from '../components/CardTuitor';

export class TeacherInfoPage extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getInforUserById, listNameSkill, listTeacherTop } = this.props;
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    // getInforUserById(id);
    listNameSkill(id);
    listTeacherTop();
  }

  componentDidMount = () => {
    const { getCityByIdDistrict, getInforUserById } = this.props;
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    Promise.resolve(getInforUserById(id)).then(() => {
      const { detailTeacher, getCityByIdDistrict } = this.props;
      getCityByIdDistrict(detailTeacher.districtId);
    });
  };

  bookTeacher = () => {
    history.push('/signin');
  };

  render() {
    const {
      detailTeacher, nameSkill, listTeachers, cityName
    } = this.props;
    console.log(cityName);
    return (
      <section style={{ marginTop: '8em', marginBottom: '4em' }}>
        {detailTeacher ? (
          <Container className="p-5" style={{ boxShadow: '0px 1px 5px 2px grey' }}>
            <div className="row">
              <div className="col-md-3 col-xl-3 col-lg-3 my-3">
                <img
                  src={detailTeacher.avatar ? detailTeacher.avatar : avatar}
                  alt="avatar"
                  style={{
                    maxWidth: '100%',
                    padding: '5px',
                    border: '1px solid #e4e4e4',
                    borderRadius: '10%'
                  }}
                />
                <h4
                  style={{
                    margin: '0',
                    color: '#ee4540',
                    fontSize: '1.5em',
                    textTransform: 'capitalize',
                    lineHeight: '1.8em',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textAlign: 'center'
                  }}
                >
                  {detailTeacher.name}
                </h4>
                <div>
                  <span
                    style={{
                      fontWeight: 'bolder',
                      fontSize: 'larger',
                      marginRight: '5px'
                    }}
                  >
                    Giới tính:
                  </span>
                  {detailTeacher.gender}
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: 'bolder',
                      fontSize: 'larger',
                      marginRight: '5px'
                    }}
                  >
                    Địa chỉ:
                  </span>
                  Quận Bình Thạnh,
{' '}
                  {cityName ? cityName.name : null}
                </div>
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6">
                <h3 style={{ fontWeight: 'bolder' }} className="mt-4">
                  Kỹ năng
                </h3>
                <div className="listStyle">
                  <ul style={{ listStyle: 'none' }}>
                    {nameSkill
                      ? nameSkill.map((skl) => (
                        <li>
                          <i className="fa fa-caret-right" />
                          {skl.name}
                        </li>
                      ))
                      : null}
                  </ul>
                </div>
                <div className="mt-5">
                  <h3 style={{ fontWeight: 'bolder' }}>Giới thiệu bản thân</h3>
                  <div style={{ wordWrap: 'break-word' }}>
                    {detailTeacher.introduce}
                  </div>
                </div>
                {/* <div className="mt-5">
                  <h3 style={{ fontWeight: "bolder" }}>Đánh giá học viên</h3>
                  <ul className="list-unstyled list-comment mt-4">
                    <li
                      className="media"
                      style={{
                        maxWidth: "100%",
                        padding: "5px",
                        border: "1px solid #e4e4e4",
                        borderRadius: "10px"
                      }}
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          maxWidth: "65px"
                        }}
                        className="mr-3"
                      />
                      <div className="media-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <h5
                            style={{ fontWeight: "bolder" }}
                            className="mb-0 text-danger"
                          >
                            Phan Văn A
                          </h5>
                          <div className="stars">
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                          </div>
                        </div>
                        Thầy này dạy hay lắm.
                      </div>
                    </li>
                    <li
                      className="media my-4"
                      style={{
                        maxWidth: "100%",
                        padding: "5px",
                        border: "1px solid #e4e4e4",
                        borderRadius: "10px"
                      }}
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          maxWidth: "65px"
                        }}
                        className="mr-3"
                      />
                      <div className="media-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <h5
                            style={{ fontWeight: "bolder" }}
                            className="mb-0 text-danger"
                          >
                            Phan Văn C
                          </h5>
                          <div className="stars">
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              />
                            </li>
                          </div>
                        </div>
                        Comment cho có
                      </div>
                    </li>
                    <li
                      className=" media"
                      style={{
                        maxWidth: "100%",
                        padding: "5px",
                        border: "1px solid #e4e4e4",
                        borderRadius: "10px"
                      }}
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          maxWidth: "65px"
                        }}
                        className="mr-3"
                      />
                      <div className="media-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <h5
                            style={{ fontWeight: "bolder" }}
                            className="mb-0 text-danger"
                          >
                            Phan Văn C
                          </h5>
                          <div className="stars">
                            <li>
                              <span className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              />
                            </li>
                          </div>
                        </div>
                        Ông này không ổn.
                      </div>
                    </li>
                  </ul>
                </div>
                */}
                {/* <div className="mt-5">
                  <h3 style={{ fontWeight: "bolder" }}>Nhận xét của bạn:</h3>
                  `(Phần này sẽ xuất hiện sau khi học viên đăng nhập)`
                  <div className="mt-3">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                  </div>
                </div>
               */}
              </div>
              <div className="col-md-3 col-xl-3 col-lg-3 mt-3">
                <div
                  style={{
                    border: '1px solid #e4e4e4',
                    textAlign: 'center',
                    borderRadius: '10px',
                    padding: '1em 0'
                  }}
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: 'larger',
                      marginRight: '5px'
                    }}
                  >
                    Giá:
                  </span>
                  <span className="money">
                    {' '}
                    {numeral(`${detailTeacher.price}`).format('(0,0)')}
                    {' '}
                    VND
                  </span>
                  {detailTeacher.rateSuccess <= 20
                    && detailTeacher.rateSuccess > 0 ? (
                      <div className="stars mt-2">
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <span
                          style={{
                            fontWeight: '200',
                            fontSize: 'small',
                            marginLeft: '5px'
                          }}
                        >
                          3 đánh giá
                        </span>
                      </div>
                    ) : null}
                  {detailTeacher.rateSuccess <= 40
                    && detailTeacher.rateSuccess > 20 ? (
                      <div className="stars mt-2">
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <span
                          style={{
                            fontWeight: '200',
                            fontSize: 'small',
                            marginLeft: '5px'
                          }}
                        >
                          3 đánh giá
                        </span>
                      </div>
                    ) : null}
                  {detailTeacher.rateSuccess <= 60
                    && detailTeacher.rateSuccess > 40 ? (
                      <div className="stars mt-2">
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <span
                          style={{
                            fontWeight: '200',
                            fontSize: 'small',
                            marginLeft: '5px'
                          }}
                        >
                          3 đánh giá
                        </span>
                      </div>
                    ) : null}
                  {detailTeacher.rateSuccess <= 80
                    && detailTeacher.rateSuccess > 60 ? (
                      <div className="stars mt-2">
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <span className="fa fa-star-o" aria-hidden="true" />
                        </li>
                        <span
                          style={{
                            fontWeight: '200',
                            fontSize: 'small',
                            marginLeft: '5px'
                          }}
                        >
                          3 đánh giá
                        </span>
                      </div>
                    ) : null}
                  {detailTeacher.rateSuccess === 100 ? (
                    <div className="stars mt-2">
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <span className="fa fa-star" aria-hidden="true" />
                      </li>
                      <span
                        style={{
                          fontWeight: '200',
                          fontSize: 'small',
                          marginLeft: '5px'
                        }}
                      >
                        3 đánh giá
                      </span>
                    </div>
                  ) : null}

                  <div>
                    <Button
                      variant="danger"
                      size="lg"
                      className="px-5 my-3"
                      onClick={this.bookTeacher}
                    >
                      Thuê Ngay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        ) : null}
        <Container>
          <div className="mt-5">
            <h3 style={{ fontWeight: 'bolder' }}>Gợi ý giáo viên:</h3>
            <div className="mt-3">
              {listTeachers
                ? listTeachers.map((item) => (
                  <div className="col-md-3 col-sm-3">
                    <div className="row">
                      <div>
                        <CardTuitor listTeachers={item} />
                      </div>
                    </div>
                  </div>
                ))
                : null}
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default TeacherInfoPage;
