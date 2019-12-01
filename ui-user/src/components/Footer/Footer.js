import React from 'react';
import { Container } from 'react-bootstrap';

import './Footer.css';
import Jello from 'react-reveal/Jello';
import { FaHeart } from 'react-icons/fa';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <div
          style={{
            backgroundColor: 'rgb(37, 40, 39)',
            color: 'whitesmoke',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            borderTop: '2px solid #ee4540',
          }}
        >
          <Container>
            <div className="d-flex justify-content-between">
              <h2 style={{ marginTop: '0' }}>Liên hệ</h2>
              <div className="d-flex justify-content-between social-group">
                <div>
                  <a href="facebook.com">
                    <i className="fa fa-facebook-square" />
                  </a>
                </div>
                <div>
                  <a href="youtube.com">
                    <i className="fa fa-youtube" />
                  </a>
                </div>
                <div>
                  <a href="linkedin.com">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <p className="d-flex text-light ">
              Gia Sư Online with -
              <Jello forever>
                <FaHeart size={24} style={{ color: '#ed3833' }} />
              </Jello>
              - @ HoChiMinh City, VietNam in
              {' '}
              {new Date().getFullYear()}
            </p>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;
