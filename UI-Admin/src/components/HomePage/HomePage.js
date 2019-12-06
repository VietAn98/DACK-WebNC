import React from 'react';
import './HomePage.css';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div className="page-container">
                <div className="left-content">
                    <div className="mother-grid-inner">
                        <div className="header-main" style={{ position: "absolute" }}>
                            <div className="">
                                <div className="logo-name">
                                    <a href="index.html">
                                        <h1>Gia Sư Online</h1>
                                    </a>
                                    <div className="search-box">
                                        <form>
                                            <input type="text" placeholder="Search..." required="" />
                                            <input type="submit" value="" />
                                        </form>
                                    </div>

                                    <div className="clearfix"> </div>
                                </div>
                                <div className="header-right">
                                    <div className="profile_details_left">

                                        <ul className="nofitications-dropdown">
                                            <li className="dropdown head-dpdn">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                                    className="fa fa-envelope"></i><span className="badge">3</span></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="notification_header">
                                                            <h3>You have 3 new messages</h3>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/p4.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li className="odd"><a href="#">
                                                        <div className="user_img"><img src="images/p2.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor </p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/p3.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li>
                                                        <div className="notification_bottom">
                                                            <a href="#">See all messages</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown head-dpdn">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                                    className="fa fa-bell"></i><span className="badge blue">3</span></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="notification_header">
                                                            <h3>You have 3 new notification</h3>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/p5.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li className="odd"><a href="#">
                                                        <div className="user_img"><img src="images/p6.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/p7.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li>
                                                        <div className="notification_bottom">
                                                            <a href="#">See all notifications</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown head-dpdn">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                                    className="fa fa-tasks"></i><span className="badge blue1">9</span></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="notification_header">
                                                            <h3>You have 8 pending task</h3>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Database update</span><span className="percentage">40%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div className="bar yellow" style={{ width: "40%" }}></div>
                                                        </div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Dashboard done</span><span className="percentage">90%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div className="bar green" style={{ width: "90%" }}></div>
                                                        </div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Mobile App</span><span className="percentage">33%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div className="bar red" style={{ width: "33%" }}></div>
                                                        </div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Issues fixed</span><span className="percentage">80%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div className="bar  blue" style={{ width: "80%" }}></div>
                                                        </div>
                                                    </a></li>
                                                    <li>
                                                        <div className="notification_bottom">
                                                            <a href="#">See all pending tasks</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="clearfix"> </div>
                                    </div>

                                    <div className="profile_details">
                                        <ul>
                                            <li className="dropdown profile_details_drop">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <div className="profile_img">
                                                        <span className="prfil-img"><img src="images/p1.png" alt="" /> </span>
                                                        <div className="user-name">
                                                            <p>Malorum</p>
                                                            <span>Administrator</span>
                                                        </div>
                                                        <i className="fa fa-angle-down lnr"></i>
                                                        <i className="fa fa-angle-up lnr"></i>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </a>
                                                <ul className="dropdown-menu drp-mnu">
                                                    <li> <a href="#"><i className="fa fa-cog"></i> Settings</a> </li>
                                                    <li> <a href="#"><i className="fa fa-user"></i> Profile</a> </li>
                                                    <li> <a href="#"><i className="fa fa-sign-out"></i> Logout</a> </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>

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
                                        <div className="chit-chat-heading">
                                            Recent Followers
                  </div>
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

                                                        <td><span className="label label-danger">in progress</span></td>
                                                        <td><span className="badge badge-info">50%</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Twitter</td>
                                                        <td>Evan</td>

                                                        <td><span className="label label-success">completed</span></td>
                                                        <td><span className="badge badge-success">100%</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Google</td>
                                                        <td>John</td>

                                                        <td><span className="label label-warning">in progress</span></td>
                                                        <td><span className="badge badge-warning">75%</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>LinkedIn</td>
                                                        <td>Danial</td>

                                                        <td><span className="label label-info">in progress</span></td>
                                                        <td><span className="badge badge-info">65%</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Tumblr</td>
                                                        <td>David</td>

                                                        <td><span className="label label-warning">in progress</span></td>
                                                        <td><span className="badge badge-danger">95%</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Tesla</td>
                                                        <td>Mickey</td>

                                                        <td><span className="label label-info">in progress</span></td>
                                                        <td><span className="badge badge-success">95%</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                            <div className="main-page-charts">
                                <div className="main-page-chart-layer1">
                                    <div className="col-md-6 chart-layer1-left">
                                        <div className="glocy-chart">
                                            <div className="span-2c">
                                                <h3 className="tlt">Sales Analytics</h3>
                                                <canvas id="bar" height="300" width="400" style={{ width: "400px", height: "300px" }}></canvas>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix"> </div>
                                </div>
                            </div>

                        </div>

                        <div className="copyrights">
                            <p>© 2016 Shoppy. All Rights Reserved | Design by <a href="http://w3layouts.com/"
                                target="_blank">W3layouts</a>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="sidebar-menu">
                    <div className="logo"> <a href="#" className="sidebar-icon"> <span className="fa fa-bars"></span> </a> <a href="#"> <span
                        id="logo"></span>
                    </a> </div>
                    <div className="menu">
                        <ul id="menu">
                            <li id="menu-home"><a href="index.html"><i className="fa fa-tachometer"></i><span>Dashboard</span></a></li>
                            <li><a href="#"><i className="fa fa-cogs"></i><span>Components</span><span className="fa fa-angle-right"
                                style={{ float: "right" }}></span></a>
                                <ul>
                                    <li><a href="grids.html">Grids</a></li>
                                    <li><a href="portlet.html">Portlets</a></li>
                                </ul>
                            </li>
                            <li id="menu-comunicacao"><a href="#"><i className="fa fa-book nav_icon"></i><span>Element</span><span
                                className="fa fa-angle-right" style={{ float: "right" }}></span></a>
                                <ul id="menu-comunicacao-sub">
                                    <li id="menu-mensagens" style={{ width: "120px" }}><a href="buttons.html">Buttons</a>
                                    </li>
                                    <li id="menu-arquivos"><a href="typography.html">Typography</a></li>
                                    <li id="menu-arquivos"><a href="icons.html">Icons</a></li>
                                </ul>
                            </li>
                            <li><a href="maps.html"><i className="fa fa-map-marker"></i><span>Maps</span></a></li>
                            <li id="menu-academico"><a href="#"><i className="fa fa-file-text"></i><span>Pages</span><span
                                className="fa fa-angle-right" style={{ float: "right" }}></span></a>
                                <ul id="menu-academico-sub">
                                    <li id="menu-academico-boletim"><a href="login.html">Login</a></li>
                                    <li id="menu-academico-avaliacoes"><a href="signup.html">Sign Up</a></li>
                                </ul>
                            </li>

                            <li><a href="charts.html"><i className="fa fa-bar-chart"></i><span>Charts</span></a></li>
                            <li><a href="#"><i className="fa fa-envelope"></i><span>Mailbox</span><span className="fa fa-angle-right"
                                style={{ float: "right" }}></span></a>
                                <ul id="menu-academico-sub">
                                    <li id="menu-academico-avaliacoes"><a href="inbox.html">Inbox</a></li>
                                    <li id="menu-academico-boletim"><a href="inbox-details.html">Compose email</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i className="fa fa-cog"></i><span>System</span><span className="fa fa-angle-right"
                                style={{ float: "right" }}></span></a>
                                <ul id="menu-academico-sub">
                                    <li id="menu-academico-avaliacoes"><a href="404.html">404</a></li>
                                    <li id="menu-academico-boletim"><a href="blank.html">Blank</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i><span>E-Commerce</span><span className="fa fa-angle-right"
                                style={{ float: "right" }}></span></a>
                                <ul id="menu-academico-sub">
                                    <li id="menu-academico-avaliacoes"><a href="product.html">Product</a></li>
                                    <li id="menu-academico-boletim"><a href="price.html">Price</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        );
    }
}

export default HomePage;