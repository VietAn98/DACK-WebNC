import React from "react";
import "./HomePage/HomePage.css";

class SideBarMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="sidebar-menu">
          <div className="menu">
            <ul id="menu">
              <li id="menu-home">
                <a href="/">
                  <i className="fa fa-tachometer"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-cogs"></i>
                  <span>Quản lý Tài khoản</span>
                  <span
                    className="fa fa-angle-right"
                    style={{ float: "right" }}
                  ></span>
                </a>
                <ul>
                  <li>
                    <a href="grids.html" href="/manage-student">Học viên</a>
                  </li>
                  <li>
                    <a href="portlet.html" href="/manage-teacher">Giáo viên</a>
                  </li>
                  <li>
                    <a href="portlet.html" href="/manage-admin" >Quản trị viên</a>
                  </li>
                </ul>
              </li>
              <li id="menu-comunicacao">
                <a href="#">
                  <i className="fa fa-book nav_icon"></i>
                  <span>Quản lý Hợp đồng học</span>
                  <span
                    className="fa fa-angle-right"
                    style={{ float: "right" }}
                  ></span>
                </a>
                <ul id="menu-comunicacao-sub">
                  <li id="menu-mensagens" style={{ width: "120px" }}>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li id="menu-arquivos">
                    <a href="typography.html">Typography</a>
                  </li>
                  <li id="menu-arquivos">
                    <a href="icons.html">Icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/manage-skills">
                <i class="fa fa-tags"></i>
                  <span>Quản lý Tag kĩ năng</span>
                </a>
              </li>
              <li id="menu-academico">
                <a href="#">
                  <i className="fa fa-file-text"></i>
                  <span>Quản lý Kiếu nại</span>
                  <span
                    className="fa fa-angle-right"
                    style={{ float: "right" }}
                  ></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    );
  }
}
export default SideBarMenu;
