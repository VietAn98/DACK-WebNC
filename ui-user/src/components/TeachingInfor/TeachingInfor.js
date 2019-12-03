import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import './TeachingInfor.css';

class TeachingInfor extends React.PureComponent {
	onChangeAvatar = (e) => {
		const { avatarName, uploadAvatar } = this.props;
		avatarName(e.target.files[0]);

		const fd = new FormData();
		fd.append('avatar', e.target.files[0], e.target.files[0].name);
		uploadAvatar(fd);
	};

	onChooseTag = () => {
		const { chosenTagList, stringTag } = this.props;
		const choose = document.getElementById('selectTagList');
		const chosen = document.getElementById('selectedTagList');
		const options = choose.children;
		const arr = [];
		for (let i = 0; i < options.length; i += 1) {
			if (options[i].selected) {
				arr.push(options[i]);
			}
		}

		for (let i = 0; i < arr.length; i += 1) {
			chosen.appendChild(arr[i]);
		}

		let strings = '';

		for (let i = 0; i < chosen.length; i += 1) {
			chosen[i].selected = false;
			const a = `${chosen.children[i].value},`;
			strings += a;
		}
		chosenTagList(strings);
		console.log('stringTag', stringTag);
	}

	onUnchooseTag = () => {
		const choose = document.getElementById('selectedTagList');
		const chosen = document.getElementById('selectTagList');
		const options = choose.children;
		const tmp = [];
		const { chosenTagList, stringTag } = this.props;

		for (let i = 0; i < options.length; i += 1) {
			if (options[i].selected) {
				tmp.push(options[i]);
			}
		}

		for (let i = 0; i < tmp.length; i += 1) {
			chosen.appendChild(tmp[i]);
		}

		for (let i = 0; i < chosen.length; i += 1) {
			chosen[i].selected = false;
		}

		let strings = '';

		for (let i = 0; i < choose.length; i += 1) {
			const a = `${choose.children[i].value},`;
			strings += a;
			// console.log('chooose', choose);
		}

		chosenTagList(strings);
		console.log('stringTag', stringTag);
	}

	onSubmitInforTeaching = (e) => {
		e.preventDefault();
		// const { registerTeachingRequest, stringTag, nameAvatar } = this.props;

		// console.log('onSubmitInforTeaching nameAvatar', nameAvatar.name);
		// const tokenn = localStorage.token;
		// let decoded = null;
		// let gmail = '';
		// const avatar = `http://localhost:3001/images/${nameAvatar.name}`;
		// const intro = document.getElementById('intro').value;
		// const price = document.getElementById('price').value;
		// if (tokenn) {
		// 	decoded = jwtDecode(tokenn);
		// 	gmail = decoded.gmail;
		// }

		// registerTeachingRequest(gmail, intro, stringTag, price, avatar);
	}

	render() {
		const tokenn = localStorage.token;
		let decoded = null;
		if (tokenn) {
			decoded = jwtDecode(tokenn);
			// console.log('decoded', decoded);
		}
		return (
			<div className="contact-sectn" id="contact">
				<Container>
					<div
						style={{
							backgroundColor: 'rgba(0,0,0,0.5)',
							borderRadius: '20px',
							paddingBottom: '3rem',
						}}
					>
						<h3 className="w3layouts-heading white-title">
							<span>Đăng Ký Thông Tin Dạy Học</span>
						</h3>
						<div className="w3-agile_mail_grids justify-center">
							<div className="col-md-7 w3-agile_mail_grid_right">
								<Form action="#" method="post" onSubmit={this.onSubmitInforTeaching} novalidate>
									<div className="col-md-6 col-sm-6 contact_left_grid mt-4">
										<h5 className="float-left text-white">
											<b>Họ và tên:</b>
										</h5>
										<input
											type="text"
											id="name"
											value={decoded.name}
											disabled
										/>
									</div>
									<div className="col-md-6 col-sm-6 contact_left_grid mt-4">
										<h5 className="float-left text-white">
											<b>Chọn ảnh đại diện:</b>
										</h5>
										<input type="file" onChange={this.onChangeAvatar} />
									</div>
									<br />
									<div className="col-md-12 col-sm-12 pb-4">
										<h5 className="float-left text-white pt-3">
											<b>Chuyên ngành của bạn:</b>
										</h5>
										<Form.Control
											as="select"
											className="select-form"
											onChange={this.onChangeSelection}
										>
											<option className="black-title" value="software">
												Công nghệ thông tin
											</option>
											{/* <option className="black-title" value="system">
												Hệ thống thông tin
											</option>
											<option className="black-title" value="network">
												Mạng máy tính
											</option> */}
										</Form.Control>
										<div className="clearfix" />
									</div>
									<div className="col-md-5 col-sm-5 pb-4">
										<h5 className="float-left text-white pt-4">
											<b>Hãy chọn các kỹ năng của bạn:</b>
										</h5>
										<Form.Control
											as="select"
											multiple
											className="select-form"
											onChange={this.onChangeSelection}
											id="selectTagList"
										>
											<option value="1">Công nghệ phần mềm</option>
											<option value="2">Hệ thống thông tin</option>
											<option value="3">Mạng máy tính</option>
										</Form.Control>
										<div className="clearfix" />
									</div>
									<div className="col-md-1 col-sm-1 pt-10 mr-3">
										<Button
											className="mb-2"
											onClick={this.onChooseTag}
											id="btnChoose"
										>
											{'>'}
										</Button>
										<Button
											onClick={this.onUnchooseTag}
											id="btnUnchoose"
										>
											{'<'}
										</Button>
									</div>
									<div className="col-md-5 col-sm-5 pb-4">
										<h5 className="float-left text-white pt-4">
											<b>Kỹ năng được chọn:</b>
										</h5>
										<Form.Control
											as="select"
											multiple
											className="select-form"
											onChange={this.onChangeSelection}
											id="selectedTagList"
											required
										>
											{/* <option className="black-title" value="software">
                      Công nghệ phần mềm
                    </option>
                    <option className="black-title" value="system">
                      Hệ thống thông tin
                    </option>
                    <option className="black-title" value="network">
                      Mạng máy tính
                    </option> */}
										</Form.Control>
									</div>
									<div className="col-md-12 col-sm-12 contact_left_grid">
										<h5 className="float-left text-white pt-4">
											<b>Giá tiền thuê/giờ:</b>
										</h5>
										<input
											type="number"
											id="price"
											placeholder="VND"
											required
										/>
										<div className="invalid-feedback">
											Please choose a username.
        								</div>
									</div>
									<div className="col-md-12 col-sm-12 contact_left_grid">
										<h5 className="float-left text-white pt-4">
											<b>Hãy giới thiệu một chút về bạn nhé:</b>
										</h5>
										<textarea
											type="textarea"
											id="intro"
											placeholder="Viết tại đây"
											required
										/>
									</div>
									<div>
										<input
											type="submit"
											value="Hoàn thành"
											className="signUpSubmit"
										/>
									</div>
								</Form>
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default TeachingInfor;
