import React from 'react';
import { Container } from 'react-bootstrap';
import Jello from 'react-reveal/Jello';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

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
            zIndex: '19999',
          }}
        >
          <Container>
            <div className="d-flex justify-content-between p-3">
              <h2 style={{ marginTop: '0' }}>Liên hệ</h2>
              <div className="d-flex justify-content-between social-group">
                <div className="p-3">
                  <a href="facebook.com">
                    <i className="fab fa-facebook-square" />
                  </a>
                </div>
                <div className="p-3">
                  <a href="youtube.com">
                    <i className="fab fa-youtube-square" />
                  </a>
                </div>
                <div className="p-3">
                  <a href="https://github.com/VietAn98/DACK-WebNC">
                    <i className="fab fa-github-square" />
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
