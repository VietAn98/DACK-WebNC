import React from 'react';
import './HomePage.css';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="inner-block">
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
          <div className="col-md-6 chit-chat-layer1-left">
            <div className="work-progres">
              <div className="chit-chat-heading">Recent Followers</div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project</th>
                      <th>Manager</th>

                      <th>Status</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Face book</td>
                      <td>Malorum</td>

                      <td>
                        <span className="label label-danger">in progress</span>
                      </td>
                      <td>
                        <span className="badge badge-info">50%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Twitter</td>
                      <td>Evan</td>

                      <td>
                        <span className="label label-success">completed</span>
                      </td>
                      <td>
                        <span className="badge badge-success">100%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Google</td>
                      <td>John</td>

                      <td>
                        <span className="label label-warning">in progress</span>
                      </td>
                      <td>
                        <span className="badge badge-warning">75%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>LinkedIn</td>
                      <td>Danial</td>

                      <td>
                        <span className="label label-info">in progress</span>
                      </td>
                      <td>
                        <span className="badge badge-info">65%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Tumblr</td>
                      <td>David</td>

                      <td>
                        <span className="label label-warning">in progress</span>
                      </td>
                      <td>
                        <span className="badge badge-danger">95%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Tesla</td>
                      <td>Mickey</td>

                      <td>
                        <span className="label label-info">in progress</span>
                      </td>
                      <td>
                        <span className="badge badge-success">95%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glocy-chart">
              <div className="span-2c">
                <h3 className="tlt">Sales Analytics</h3>
                <canvas
                  id="bar"
                  height="200"
                  width="400"
                  style={{ width: '400px', height: '200px' }}
                />
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
