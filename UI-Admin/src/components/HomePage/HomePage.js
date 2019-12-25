import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Spinner, Tabs, Tab } from 'react-bootstrap';
import './HomePage.css';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
    } = this.props;

    revenueByDay();
    revenueByMonth();
    revenueByYear();
    skillsInADay();
    skillsIn7Day();
    skillsIn30Day();
    skillsIn90Day();
    skillsInAllDay();
  }

  render() {
    const {
      dayRevenue,
      monthRevenue,
      yearRevenue,
      skillsADay,
      skills7Days,
      skills30Days,
      skills90Days,
      skillsAllDays
    } = this.props;

    return (
      <div className="inner-block" style={{ padding: '8em 1em 1em 1em' }}>
        <div className="market-updates">
          <div className="col-md-4 market-update-gd">
            <div className="market-update-block clr-block-1">
              <div className="col-md-8 market-update-left">
                <h3>83</h3>
                <h4>Registered User</h4>
                <p>Other hand, we denounce</p>
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
                <h3>135</h3>
                <h4>Daily Visitors</h4>
                <p>Other hand, we denounce</p>
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
                <h3>23</h3>
                <h4>New Messages</h4>
                <p>Other hand, we denounce</p>
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
                <h3 className="tlt">
                  Thống Kê Doanh Thu
                </h3>
              </div>
              <Tabs defaultActiveKey="day" transition={false} id="noanim-tab-example">
                <Tab eventKey="day" title="Theo Ngày">
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
                        width={550}
                        height={300}
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
                </Tab>
                <Tab eventKey="month" title="Theo Tháng">
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
                </Tab>
                <Tab eventKey="year" title="Theo Năm">
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
                        height={300}
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
                </Tab>
              </Tabs>
            </div>
          </div>


          <div className="col-md-12 mt-5 mb-5 chit-chat-layer1-left">
            <div className="work-progres">
              <h3 className="tlt">Thống kê kỹ năng</h3>
              <div className="table-responsive">
                <Tabs defaultActiveKey="day" transition={false} id="noanim-tab-examplesss">
                  <Tab eventKey="day" title="Trong Ngày">
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
                  </Tab>
                  <Tab eventKey="7day" title="7 Ngày">
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
                  </Tab>
                  <Tab eventKey="30day" title="30 Ngày">
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
                  </Tab>
                  <Tab eventKey="90day" title="90 Ngày">
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
                  </Tab>
                  <Tab eventKey="allday" title="Tất Cả">
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
