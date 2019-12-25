import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../public/images/banner1.png';
import banner2 from '../../public/images/banner2.png';
import banner3 from '../../public/images/banner3.png';

class Banner extends React.PureComponent {
	render() {
		const { style } = this.props;
		return (
			<section style={style}>
				<Carousel className="banner">
					<Carousel.Item>
						<img className="d-block w-100" src={banner1} alt="First slide" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner2} alt="Second slide" />
						<Carousel.Caption style={{ height: '70%', backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
							<h3>Tham gia ngay để trải nghiệm một môi trường mới dành cho các bạn.</h3>
							<Button variant="warning">Đăng ký ngay!</Button>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner3} alt="Third slide" />
						<Carousel.Caption>
							<h3>WEBSITE DÀNH CHO CÁC BẠN GIA SƯ VÀ NHỮNG BẠN ĐANG TÌM KIỂM GIA SƯ</h3>
							<p>Chúng tôi cam kết mang lại cho bạn những trải nghiệm thú vị nhất.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>
		);
	}
}

export default Banner;
