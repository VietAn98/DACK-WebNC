import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import numeral from 'numeral';
import Swal from 'sweetalert2';
import history from '../history';
import avatar from '../public/images/avatar.jpg';
import CardTuitor from '../components/CardTuitor';

export class TeacherInfoPage extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      listNameSkill,
      listTeacherTop,
      getListDisctrict,
      getUserComment
    } = this.props;
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    // getInforUserById(id);
    getUserComment(id);
    listTeacherTop();
    getListDisctrict();
    listNameSkill(id);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount = () => {
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];
    const { getSingleTeacherById } = this.props;
    Promise.resolve(getSingleTeacherById(id)).then(async () => {
      const { detailTeacher, getCityByIdDistrict, listNameSkill } = this.props;
      getCityByIdDistrict(detailTeacher.districtId);
      await listNameSkill(id);
    });
  };

  onClickHire = async (id) => {
    const tokenn = localStorage.token;
    // console.log('tokennn', tokenn);
    if (tokenn) {
      history.push(`/contract/teacher-${id}`);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bạn chưa đăng nhập!',
        footer: '<a href>Tiến hành Đăng nhập</a>'
      });
    }
  };

  render() {
    const {
      detailTeacher, listNameOfSkill, listTeachers, cityName, listDistrict, userComment
    } = this.props;
    const { skills } = listNameOfSkill;
    // console.log('listNameOfSkilllistNameOfSkill', listNameOfSkill);
    return (
      <section style={{ marginTop: '6em', marginBottom: '4em' }}>
        {detailTeacher ? (
          <Container className="p-5" style={{ boxShadow: '0px 1px 5px 0.7px grey', borderRadius: '10px' }}>
            <div className="row">
              <div className="col-md-3 col-xl-3 col-lg-3 my-3">
                <img
                  src={detailTeacher.avatar ? detailTeacher.avatar : avatar}
                  alt="avatar"
                  style={{
                    maxWidth: '100%',
                    padding: '5px',
                    border: '1px solid #e4e4e4',
                    borderRadius: '10%',
                    margin: 'auto'
                  }}
                />
                <h4
                  style={{
                    color: '#ee4540',
                    fontSize: '1.6em',
                    textTransform: 'capitalize',
                    lineHeight: '2em',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}
                >
                  {detailTeacher.name}
                </h4>
                <div>
                  <span
                    style={{
                      fontWeight: 'bolder',
                      fontSize: 'medium',
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
                      fontSize: 'medium',
                      marginRight: '5px'
                    }}
                  >
                    Địa chỉ:
                  </span>
                  {detailTeacher.address}
                  {listDistrict
                    ? listDistrict.map((item) => {
                      if (item.districtId === detailTeacher.districtId) {
                        return (
                          `, ${item.name},`
                        );
                      }
                    })
                    : null}
                  {' '}
                  {cityName ? cityName.name : null}
                </div>
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6">
                <h3 style={{ fontWeight: 'bolder' }}>Giới thiệu bản thân</h3>
                <div style={{ wordWrap: 'break-word' }}>
                  {detailTeacher.introduce}
                </div>

                <div className="mt-5">
                  <h3 style={{ fontWeight: 'bolder' }} className="mt-4">
                    Kỹ năng
                  </h3>
                  <div className="listStyle">
                    <ul style={{ listStyle: 'none' }}>
                      {skills
                        ? skills.map((skl) => (
                          <li>
                            <i className="fa fa-caret-right" />
                            {skl.name}
                          </li>
                        ))
                        : null}
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 style={{ fontWeight: 'bolder' }}>Đánh giá học viên</h3>
                  <ul className="list-unstyled list-comment mt-4">
                    {userComment ? userComment.map((item) => (
                      <li
                        className="media"
                        style={{
                          maxWidth: '100%',
                          padding: '5px',
                          border: '1px solid #e4e4e4',
                          borderRadius: '10px'
                        }}
                      >
                        <img
                          src={item.avatar ? item.avatar : avatar}
                          alt="avatar"
                          style={{
                            maxWidth: '65px'
                          }}
                          className="mr-3 mt-2"
                        />
                        <div className="media-body">
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                            }}
                          >
                            <h5
                              style={{ fontWeight: 'bolder' }}
                              className="mb-0 text-danger"
                            >
                              {item.name}
                            </h5>
                            {item.starNumber === 5 ? (
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
                            ) : null}
                            {item.starNumber === 4 ? (
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
                                  <span className="fa fa-star-o" aria-hidden="true" />
                                </li>
                              </div>
                            ) : null}
                            {item.starNumber === 3 ? (
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
                                  <span className="fa fa-star-o" aria-hidden="true" />
                                </li>
                                <li>
                                  <span className="fa fa-star-o" aria-hidden="true" />
                                </li>
                              </div>
                            ) : null}
                            {item.starNumber === 2 ? (
                              <div className="stars">
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
                              </div>
                            ) : null}
                            {item.starNumber === 1 ? (
                              <div className="stars">
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
                              </div>
                            ) : null}
                          </div>
                          {item.content}
                        </div>
                      </li>
                    )) : null}
                  </ul>
                </div>
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
                  {detailTeacher.rateSuccess > 80 ? (
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
                      // eslint-disable-next-line react/jsx-no-bind
                      onClick={this.onClickHire.bind(this, detailTeacher.userId)}
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
