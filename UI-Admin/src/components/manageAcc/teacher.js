/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
/* eslint-disable radix */
import React from 'react';
import {
 Table, Pagination, Button, Spinner
} from 'react-bootstrap';
import history from '../../history';

class student extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListLimitTeacher } = this.props;
    // getListTeacher();
    const page = -1;
    getListLimitTeacher(page);
  }

  onnclicks = (index) => {
    history.push(`/manage-student-teacher/detail/${index}`);
  };

  changePage = (iPage) => {
    const { getListLimitTeacher } = this.props;
    getListLimitTeacher(iPage);
  };

  render() {
    const { teachers } = this.props;
    // console.log('11111111111', teachers);
    const {
 numberPages, limitTeacher, offset, page
} = teachers;
    const index = parseInt(page);
    let stt = offset;
    const arrPage = [];
    for (let i = 1; i <= numberPages; i += 1) {
      arrPage.push(i);
    }
    return (
      <div style={{ padding: '8em 2em 4em 2em' }}>
        <h1
          style={{ textAlign: 'center', marginBottom: '20px', padding: '20px' }}
        >
          <b>Danh Sách Giáo Viên</b>
        </h1>
        {teachers.hasOwnProperty('limitTeacher') ? null : (
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
        <Table striped bordered hover className="ml-2">
          <thead style={{ background: '#FF9C43' }}>
            <tr style={{ textAlign: 'center' }}>
              <th style={{ textAlign: 'center', width: '5%' }}>STT</th>
              <th style={{ textAlign: 'center' }} placeholder="Chưa cập  nhật">
                Họ Tên
              </th>
              <th style={{ textAlign: 'center' }}>Gmail</th>
              <th style={{ textAlign: 'center' }}>Giới tính</th>
              <th style={{ textAlign: 'center' }} placeholder="Chưa cập  nhật">
                Giá (/h)
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.hasOwnProperty('limitTeacher')
               // eslint-disable-next-line no-return-assign
              ? limitTeacher.map((tch) => (
                <tr style={{ cursor: 'pointer' }} onClick={this.onnclicks.bind(this, tch.userId)}>
                  <td style={{ textAlign: 'center' }}>{(stt += 1)}</td>
                  <td>{tch.name}</td>
                  <td>{tch.gmail}</td>
                  <td>{tch.gender}</td>
                  <td>{tch.price}</td>
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
export default student;
