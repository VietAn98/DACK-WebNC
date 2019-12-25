/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import numeral from 'numeral';
import history from '../../history';
import { Spinner, Tabs, Tab } from 'react-bootstrap';
import { avatar } from '../../images/avatar.png';
import './HomePage.css';

class HomePage extends React.PureComponent {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = () => {
    const {
      revenueByDay,
      revenueByMonth,
      revenueByYear,

      skillsInADay,
      skillsIn7Day,
      skillsIn30Day,
      skillsIn90Day,
      skillsInAllDay,

      topTeacherInADay,
      topTeacherIn7Day,
      topTeacherIn30Day,
      topTeacherIn90Day,
      topTeacherAll,
      getListUser,
    } = this.props;
    getListUser();
    revenueByDay();
    revenueByMonth();
    revenueByYear();

    skillsInADay();
    skillsIn7Day();
    skillsIn30Day();
    skillsIn90Day();
    skillsInAllDay();

    topTeacherInADay();
    topTeacherIn7Day();
    topTeacherIn30Day();
    topTeacherIn90Day();
    topTeacherAll();
  }

  OnClickRow = (id) => {
    history.push(`/manage-student-teacher/detail/${id}`);
  }

  render() {
    let i = 0;
    let j = 0;
    let k = 0;
    let z = 0;
    let u = 0;

    const {
      dayRevenue,
      monthRevenue,
      yearRevenue,

      skillsADay,
      skills7Days,
      skills30Days,
      skills90Days,
      skillsAllDays,

      topTeacherADay,
      topTeacher7Days,
      topTeacher30Days,
      topTeacher90Days,
      topTeachersAll,
      sumUser,
    } = this.props;

    console.log('11111111111111111111', sumUser);
    const { admin, teacher, student } = sumUser;

    return (
      <div className="inner-block" style={{ padding: '8em 1em 1em 1em' }}>
        <div className="market-updates">
          <div className="col-md-4 market-update-gd">
            <div className="market-update-block clr-block 1">
              <div className="col-md-8 market-update-left">
                <h4>Tổng số học sinh đã đăng kí</h4>

                {sumUser.hasOwnProperty('student')
                  ? <h3>{student[0].SumHs}</h3> : null}
              </div>
              <div className="col-md-4 market-update-right">
                <i className="fa fa-file-text-o"> </i>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="col-md-4 market-update-gd">
            <div className="market-update-block clr-block-2">
              <div className="col-md-8 market-update-left">
                <h4>Số giáo viên đã đăng kí:</h4>

                {sumUser.hasOwnProperty('teacher')
                  ? <h3>{teacher[0].SumGv}</h3> : null}
              </div>
              <div className="col-md-4 market-update-right">
                <i className="fa fa-eye"> </i>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="col-md-4 market-update-gd">
            <div className="market-update-block clr-block-3">
              <div className="col-md-8 market-update-left">
                <h4>Số admin:</h4>

                {sumUser.hasOwnProperty('admin')
                  ? <h3>{admin[0].SumAd}</h3> : null}
              </div>
              <div className="col-md-4 market-update-right">
                <i className="fa fa-envelope-o"> </i>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>

        <div className="chit-chat-layer1">
          <div className="col-md-6">
            <div className="glocy-chart">
              <div className="span-2c">
                <h3 className="tlt color-orage">
                  TOP 10 Giáo viên
                </h3>
              </div>
              <Tabs defaultActiveKey="day" transition={false} id="noanim-tab-example">
                <Tab eventKey="day" title="Trong Ngày">
                  <div className="table-responsive" style={{ height: 300 }}>
                    {topTeacherADay.length === 0
                      ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      )
                      : (
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th />
                              <th>Tên Giáo Viên</th>
                              <th>Doanh thu</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topTeacherADay.map((item) => (
                              <tr
                                onClick={this.OnClickRow.bind(this, item.teacherId)}
                                style={{ cursor: 'pointer' }}
                              >
                                <td>{i += 1}</td>
                                <td style={{ width: '15%' }}>
                                  <img
                                    src={item.avatar ? `${item.avatar}` : `${avatar}`}
                                    alt="avatar"
                                    style={{ width: '100%' }}
                                  />
                                </td>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                                <td>
                                  <span className="badge badge-info">
                                    {numeral(`${item.price}`).format('(0,0)')}
                                    {' '}
                                    VND
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                  </div>
                </Tab>
                <Tab eventKey="7days" title="7 Ngày">
                  <div className="table-responsive" style={{ height: 300 }}>
                    {topTeacher7Days.length === 0
                      ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      )
                      : (
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th />
                              <th>Tên Giáo Viên</th>
                              <th>Doanh thu</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topTeacher7Days.map((item) => (
                              <tr
                                onClick={this.OnClickRow.bind(this, item.teacherId)}
                                style={{ cursor: 'pointer' }}
                              >
                                <td>{u += 1}</td>
                                <td style={{ width: '15%' }}>
                                  <img
                                    src={item.avatar ? `${item.avatar}` : `${avatar}`}
                                    alt="avatar"
                                    style={{ width: '100%' }}
                                  />
                                </td>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                                <td>
                                  <span className="badge badge-info">
                                    {numeral(`${item.price}`).format('(0,0)')}
                                    {' '}
                                    VND
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                  </div>
                </Tab>
                <Tab eventKey="30days" title="30 Ngày">
                  <div className="table-responsive" style={{ height: 300 }}>
                    {topTeacher30Days.length === 0
                      ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      )
                      : (
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th />
                              <th>Tên Giáo Viên</th>
                              <th>Doanh thu</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topTeacher30Days.map((item) => (
                              <tr
                                onClick={this.OnClickRow.bind(this, item.teacherId)}
                                style={{ cursor: 'pointer' }}
                              >
                                <td>{z += 1}</td>
                                <td style={{ width: '15%' }}>
                                  <img
                                    src={item.avatar ? `${item.avatar}` : `${avatar}`}
                                    alt="avatar"
                                    style={{ width: '100%' }}
                                  />
                                </td>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                                <td>
                                  <span className="badge badge-info">
                                    {numeral(`${item.price}`).format('(0,0)')}
                                    {' '}
                                    VND
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                  </div>
                </Tab>
                <Tab eventKey="90days" title="90 Ngày">
                  <div className="table-responsive" style={{ height: 300 }}>
                    {topTeacher90Days.length === 0
                      ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      )
                      : (
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th />
                              <th>Tên Giáo Viên</th>
                              <th>Doanh thu</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topTeacher90Days.map((item) => (
                              <tr
                                onClick={this.OnClickRow.bind(this, item.teacherId)}
                                style={{ cursor: 'pointer' }}
                              >
                                <td>{k += 1}</td>
                                <td style={{ width: '15%' }}>
                                  <img
                                    src={item.avatar ? `${item.avatar}` : `${avatar}`}
                                    alt="avatar"
                                    style={{ width: '100%' }}
                                  />
                                </td>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                                <td>
                                  <span className="badge badge-info">
                                    {numeral(`${item.price}`).format('(0,0)')}
                                    {' '}
                                    VND
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                  </div>
                </Tab>
                <Tab eventKey="allteacher" title="Tất Cả">
                  <div className="table-responsive" style={{ height: 300 }}>
                    {topTeachersAll.length === 0
                      ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      )
                      : (
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th />
                              <th>Tên Giáo Viên</th>
                              <th>Doanh thu</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topTeachersAll.map((item) => (
                              <tr
                                onClick={this.OnClickRow.bind(this, item.teacherId)}
                                style={{ cursor: 'pointer' }}
                              >
                                <td>{j += 1}</td>
                                <td style={{ width: '15%' }}>
                                  <img
                                    src={item.avatar ? `${item.avatar}` : `${avatar}`}
                                    alt="avatar"
                                    style={{ width: '100%' }}
                                  />
                                </td>
                                <td style={{ fontSize: '18px' }}>{item.name}</td>
                                <td>
                                  <span className="badge badge-info">
                                    {numeral(`${item.price}`).format('(0,0)')}
                                    {' '}
                                    VND
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>


          <div className="col-md-6">
            <div className="glocy-chart">
              <div className="span-2c">
                <h3 className="tlt color-orage">
                  Doanh Thu
                </h3>
              </div>
              <Tabs defaultActiveKey="day" transition={false} id="noanim-tab-example">
                <Tab eventKey="day" title="Theo Ngày">
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      {dayRevenue.length === 0 ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      ) : (
                          <AreaChart
                            cy={300}
                            width={550}
                            height={500}
                            data={dayRevenue.length !== 0 ? dayRevenue : null}
                            margin={{
                              top: 10, right: 30, left: 0, bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="endDay" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="sumPrice" name="Tổng tiền (VND)" stroke="#852529" fill="#852529" />
                          </AreaChart>
                        )}
                    </ResponsiveContainer>
                  </div>

                </Tab>
                <Tab eventKey="month" title="Theo Tháng">
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      {monthRevenue.length === 0 ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      ) : (
                          <AreaChart
                            width={550}
                            height={300}
                            data={monthRevenue.length !== 0 ? monthRevenue : null}
                            margin={{
                              top: 10, right: 30, left: 0, bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="sum" name="Tổng tiền (VND)" stroke="#7DD818" fill="#93FF1C" />
                          </AreaChart>
                        )}
                    </ResponsiveContainer>
                  </div>
                </Tab>
                <Tab eventKey="year" title="Theo Năm">
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      {yearRevenue.length === 0 ? (
                        <div style={{ textAlign: 'center' }}>
                          <Spinner animation="grow" variant="primary" />
                          <Spinner animation="grow" variant="secondary" />
                          <Spinner animation="grow" variant="success" />
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                          <Spinner animation="grow" variant="dark" />
                        </div>
                      ) : (
                          <AreaChart
                            width={550}
                            height={320}
                            data={yearRevenue.length !== 0 ? yearRevenue : null}
                            margin={{
                              top: 10, right: 30, left: 0, bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" name="Năm" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="sumPrice" name="Tổng tiền (VND)" stroke="#08D8C8" fill="#00FEEB" />
                          </AreaChart>
                        )}
                    </ResponsiveContainer>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>


          <div className="col-md-12 mt-5 mb-5 chit-chat-layer1-left">
            <div className="glocy-chart">
              <h3 className="tlt color-orage">kỹ năng</h3>
              <div className="table-responsive">
                <Tabs defaultActiveKey="day" transition={false} id="noanim-tab-examplesss">
                  <Tab eventKey="day" title="Trong Ngày">
                    <div style={{ width: '100%', height: 400 }}>
                      <ResponsiveContainer>
                        {skillsADay.length === 0 ? (
                          <div style={{ textAlign: 'center' }}>
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="dark" />
                          </div>
                        ) : (
                            <RadarChart
                              outerRadius={150}
                              width={1200}
                              height={350}
                              data={skillsADay}
                            >
                              <PolarGrid />
                              <PolarAngleAxis dataKey="name" />
                              <PolarRadiusAxis />
                              <Radar name="Tổng giá" dataKey="price" stroke="#0088FE" fill="#0088FE" fillOpacity={0.6} />
                            </RadarChart>
                          )}
                      </ResponsiveContainer>
                    </div>
                  </Tab>
                  <Tab eventKey="7day" title="7 Ngày">
                    <div style={{ width: '100%', height: 400 }}>
                      <ResponsiveContainer>
                        {skills7Days.length === 0 ? (
                          <div style={{ textAlign: 'center' }}>
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="dark" />
                          </div>
                        ) : (
                            <RadarChart
                              outerRadius={150}
                              width={1200}
                              height={350}
                              data={skills7Days}
                            >
                              <PolarGrid />
                              <PolarAngleAxis dataKey="name" />
                              <PolarRadiusAxis />
                              <Tooltip />
                              <Radar name="Tổng giá" dataKey="price" stroke="#FF871C" fill="#FF8042" fillOpacity={0.6} />
                            </RadarChart>
                          )}
                      </ResponsiveContainer>
                    </div>
                  </Tab>
                  <Tab eventKey="30day" title="30 Ngày">
                    <div style={{ width: '100%', height: 400 }}>
                      <ResponsiveContainer>
                        {skills30Days.length === 0 ? (
                          <div style={{ textAlign: 'center' }}>
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="dark" />
                          </div>
                        ) : (
                            <RadarChart
                              outerRadius={150}
                              width={1200}
                              height={350}
                              data={skills30Days}
                            >
                              <PolarGrid />
                              <PolarAngleAxis dataKey="name" />
                              <PolarRadiusAxis />
                              <Tooltip />
                              <Radar name="Tổng giá" dataKey="price" stroke="#D80072" fill="#FF1C94" fillOpacity={0.6} />
                            </RadarChart>
                          )}
                      </ResponsiveContainer>
                    </div>
                  </Tab>
                  <Tab eventKey="90day" title="90 Ngày">
                    <div style={{ width: '100%', height: 400 }}>
                      <ResponsiveContainer>
                        {skills90Days.length === 0 ? (
                          <div style={{ textAlign: 'center' }}>
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="dark" />
                          </div>
                        ) : (
                            <RadarChart
                              outerRadius={150}
                              width={1200}
                              height={350}
                              data={skills90Days}
                            >
                              <PolarGrid />
                              <PolarAngleAxis dataKey="name" />
                              <PolarRadiusAxis />
                              <Tooltip />
                              <Radar name="Tổng giá" dataKey="price" stroke="#7318D8" fill="#7318D8" fillOpacity={0.6} />
                            </RadarChart>
                          )}
                      </ResponsiveContainer>
                    </div>

                  </Tab>
                  <Tab eventKey="allday" title="Tất Cả">
                    <div style={{ width: '100%', height: 400 }}>
                      <ResponsiveContainer>
                        {skillsAllDays.length === 0 ? (
                          <div style={{ textAlign: 'center' }}>
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="dark" />
                          </div>
                        ) : (
                            <RadarChart
                              outerRadius={150}
                              width={1200}
                              height={350}
                              data={skillsAllDays}
                            >
                              <PolarGrid />
                              <PolarAngleAxis dataKey="name" />
                              <PolarRadiusAxis />
                              <Tooltip />
                              <Radar name="Tổng giá" dataKey="price" stroke="#00D866" fill="#42FF9B" fillOpacity={0.6} />
                            </RadarChart>
                          )}
                      </ResponsiveContainer>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    );
  }
}

export default HomePage;
