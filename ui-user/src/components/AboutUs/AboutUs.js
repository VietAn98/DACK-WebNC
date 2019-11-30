import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './AboutUs.css';

export class AboutUs extends Component {
	render() {
		return (
			<section>
				<div style={{ backgroundColor: '#f6f6f6', marginTop: '2rem' }}>
					<Container style={{ textAlign: 'center' }}>
						<h2>
							<div className="title-about">Về Chúng Tôi</div>
						</h2>
						<p style={{ fontSize: '2rem', marginTop: '1rem' }} className="decription">
							<span>Gia Sư Online</span> là cầu nối giữa các <span>Gia Sư</span> có{' '}
							<span style={{ color: '#232c3b' }}>chuyên môn </span> với tất cả <span>Học Viên</span> trên
							toàn quốc. Với trải nghiệm nhanh chóng và tiện lợi nhất.
						</p>
						<div>
							<div className="figure p_home__metrics">
								<div className="p_home__metrics__metric">
									10k <span> - Học viên -</span>
								</div>
								<div className="p_home__metrics__metric">
									5K <span> - Khóa học - </span>
								</div>
								<div className="p_home__metrics__metric">
									1K <span> - Gia Sư - </span>
								</div>

								<div className="p_home__metrics__metric">
									50K <span> - Videos - </span>
								</div>
								<div className="p_home__metrics__metric">
									{'>'}10 <span> - Lĩnh Vực - </span>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</section>
		);
	}
}

export default AboutUs;
