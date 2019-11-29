import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <div class="banner" id="home">
          <div class="w3-agile-dot">
            <div class="header">
              <div class="header-main">
                <div class="container">
                  <nav class="navbar navbar-default">
                    <div class="navbar-header">
                      <button
                        type="button"
                        class="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                      >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <h1>
                        <a href="index.html">Stereo</a>
                      </h1>
                    </div>
                    <div
                      class="collapse navbar-collapse cl-effect-13"
                      id="bs-example-navbar-collapse-1"
                    >
                      <ul class="nav navbar-nav navbar-right">
                        <li>
                          <a href="index.html" class="active scroll">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about" class="scroll">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#services" class="scroll">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#team" class="scroll">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="#gallery" class="scroll">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="#contact" class="scroll">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="w3-agile-sectn_search">
                      <div class="cd-main-header">
                        <ul class="cd-header-buttons">
                          <li>
                            <a class="cd-search-trigger" href="#cd-search">
                              <span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div id="cd-search" class="cd-search">
                        <Form action="#" method="post">
                          <input
                            name="Search"
                            type="search"
                            placeholder="Click enter after typing"
                          />
                        </Form>
                      </div>
                    </div>

                    <div class="clearfix"> </div>
                  </nav>
                </div>
              </div>
              <div class="container">
                <div class="banner-bottom">
                  <section class="slider">
                    <div class="flexslider">
                      <ul class="slides">
                        <li>
                          <div class="banner-bottom-text">
                            <h3>We are the best in this field</h3>
                          </div>
                        </li>
                        <li>
                          <div class="banner-bottom-text">
                            <h3>We can dance forever</h3>
                          </div>
                        </li>
                        <li>
                          <div class="banner-bottom-text">
                            <h3>We know how to have fun</h3>
                          </div>
                        </li>
                        <li>
                          <div class="banner-bottom-text">
                            <h3>Press play and go</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="clearfix"> </div>
                  </section>
                  <div class="thim-click-to-bottom">
                    <a href="#about" class="scroll">
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
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