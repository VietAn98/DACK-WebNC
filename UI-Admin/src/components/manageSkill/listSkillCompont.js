/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-prototype-builtins */
import React from 'react';
import {
  Table, Button, Pagination, Spinner
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import history from '../../history';

class ListSkill extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getLimitSkills } = this.props;
    const page = -1;
    getLimitSkills(page);
  }

  onnclicks = async (name, skillId) => {
    const { updateSkill } = this.props;
    const { value: ipAddress } = await Swal.fire({
      title: 'Nhập kỹ năng:',
      input: 'text',
      inputValue: name,
      showCancelButton: true,
      // eslint-disable-next-line consistent-return
      inputValidator: (value) => {
        if (!value) {
          return 'Vui lòng nhập vào kĩ năng!';
        }
      }
    });

    if (ipAddress) {
      updateSkill(skillId, ipAddress);
      Swal.fire('Đang cập nhật');
      Swal.showLoading();
      setTimeout(() => {
        Swal.fire('Cập nhật thành công', 'Kĩ năng đã được cập nhật', 'success');
      }, 3000);
    }
  };

  deleteSkill = (index) => {
    const { deleteSingleSkill } = this.props;
    Swal.fire({
      title: 'Bạn chắc chắn muốn xóa  không?',
      text: 'Kĩ năng các giáo viên cũng sẽ bị xóa!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng Ý'
    }).then((result) => {
      if (result.value) {
        deleteSingleSkill(index);
        Swal.fire('Đang xóa');
        Swal.showLoading();
        setTimeout(() => {
          Swal.fire('Xóa thành công', 'Kĩ năng đã bị xóa', 'success');
        }, 3000);
      }
    });
  };

  AddSkill = async () => {
    const { addSkill } = this.props;
    const { value: ipAddress } = await Swal.fire({
      title: 'Nhập kỹ năng:',
      input: 'text',
      inputValue: '',
      showCancelButton: true,
      // eslint-disable-next-line consistent-return
      inputValidator: (value) => {
        if (!value) {
          return 'Vui lòng nhập vào kĩ năng!';
        }
      }
    });

    if (ipAddress) {
      addSkill(ipAddress);
      Swal.fire(`Đang thêm kĩ năng : ${ipAddress}`);
      Swal.showLoading();
      setTimeout(() => {
        Swal.fire('Thêm thành công', 'Kĩ năng đã được thêm', 'success');
      }, 2500);
    }
  };

  changePage = (iPage) => {
    const { getLimitSkills } = this.props;
    getLimitSkills(iPage);
  };

  render() {
    const { listSkill } = this.props;
    const {
      numberPages, limitSkill, offset, page
    } = listSkill;
    // eslint-disable-next-line radix
    const index = parseInt(page);
    let stt = offset;
    const arrPage = [];
    for (let i = 1; i <= numberPages; i += 1) {
      arrPage.push(i);
    }
    return (
      <div style={{ padding: '10px' }}>
        <h1
          style={{ textAlign: 'center', marginBottom: '20px', padding: '20px' }}
        >
          <b>Danh Sách Các Kỹ Năng</b>
        </h1>
        {listSkill.hasOwnProperty('limitSkill') ? null : (
          <div style={{ textAlign: 'center' }}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
          </div>
        )}
        <div className="col-md-12 col-sm-12 float-right">
          <Button
            type="button"
            onClick={this.AddSkill}
            className="mb-3 float-right"
            variant="success"
          >
            <i className="fa fa-plus-square" />
            {' '}
            Thêm kỹ năng
          </Button>
        </div>
        <Table striped bordered hover className="ml-2">
          <thead style={{ background: '#FF9C43' }}>
            <tr style={{ textAlign: 'center' }}>
              <th style={{ textAlign: 'center', width: '10%' }}>STT</th>
              <th style={{ textAlign: 'center' }}>Tên</th>
              <th style={{ textAlign: 'center', width: '10%' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listSkill.hasOwnProperty('limitSkill')
              // eslint-disable-next-line no-return-assign
              ? limitSkill.map((sk) => (
                <tr>
                  <td style={{ textAlign: 'center' }}>{(stt += 1)}</td>
                  <td
                    style={{ cursor: 'pointer' }}
                    onClick={this.onnclicks.bind(this, sk.name, sk.skillId)}
                  >
                    {sk.name}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <i
                      onClick={this.deleteSkill.bind(this, sk.skillId)}
                      style={{ cursor: 'pointer' }}
                      className="fa fa-trash"
                    />
                  </td>
                </tr>
              ))
              : null}
          </tbody>
        </Table>
        <div style={{ textAlign: 'center' }}>
          <Pagination>
            <Pagination.First onClick={() => this.changePage(index - 1)} />
            {arrPage.map((number) => (
              <Pagination.Item active={number === index || false} onClick={() => this.changePage(number)}>
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Last disabled={numberPages === 1 || numberPages === index || false} onClick={() => this.changePage(index + 1)} />
          </Pagination>
        </div>

      </div>
    );
  }
}
export default ListSkill;
