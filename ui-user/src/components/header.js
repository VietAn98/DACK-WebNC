import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="banner" id="home">
          <div className="w3-agile-dot">
            <div className="header">
              <div className="header-main">
                <div className="container">
                  <nav className="navbar navbar-default">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <h1>
                        <a href="index.html">Stereo</a>
                      </h1>
                    </div>
                    <div
                      className="collapse navbar-collapse cl-effect-13"
                      id="bs-example-navbar-collapse-1"
                    >
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <a href="index.html" className="active scroll">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="scroll">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#services" className="scroll">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#team" className="scroll">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="#gallery" className="scroll">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="#contact" className="scroll">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="w3-agile-sectn_search">
                      <div className="cd-main-header">
                        <ul className="cd-header-buttons">
                          <li>
                            <a className="cd-search-trigger" href="#cd-search">
                              <span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div id="cd-search" className="cd-search">
                        <Form action="#" method="post">
                          <input
                            name="Search"
                            type="search"
                            placeholder="Click enter after typing"
                          />
                        </Form>
                      </div>
                    </div>

                    <div className="clearfix"> </div>
                  </nav>
                </div>
              </div>
              <div className="container">
                <div className="banner-bottom">
                  <section className="slider">
                    <div className="flexslider">
                      <ul className="slides">
                        <li>
                          <div className="banner-bottom-text">
                            <h3>We are the best in this field</h3>
                          </div>
                        </li>
                        <li>
                          <div className="banner-bottom-text">
                            <h3>We can dance forever</h3>
                          </div>
                        </li>
                        <li>
                          <div className="banner-bottom-text">
                            <h3>We know how to have fun</h3>
                          </div>
                        </li>
                        <li>
                          <div className="banner-bottom-text">
                            <h3>Press play and go</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix"> </div>
                  </section>
                  <div className="thim-click-to-bottom">
                    <a href="#about" className="scroll">
                      <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;