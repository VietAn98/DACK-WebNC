/* eslint-disable no-prototype-builtins */
import React from 'react';
import { Table, Spinner, Pagination } from 'react-bootstrap';
import history from '../../history';

class student extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListLimitStudent } = this.props;
    const page = -1;
    getListLimitStudent(page);
  }

  onnclicks = (index) => {
    history.push(`/manage-student-teacher/detail/${index}`);
  };

  changePage = (iPage) => {
    const { getListLimitStudent } = this.props;
    getListLimitStudent(iPage);
  };

  render() {
    const { students } = this.props;
    const {
 numberPages, limitStudent, offset, page
} = students;
    // eslint-disable-next-line radix
    const index = parseInt(page);
    let stt = offset;
    const arrPage = [];
    for (let i = 1; i <= numberPages; i += 1) {
      arrPage.push(i);
    }
    return (
      <div
        style={{ padding: '10px' }}
      //   styles={{transform:`translateY(-50%)` }}
      >
        <h1
          style={{ textAlign: 'center', marginBottom: '20px', padding: '20px' }}
        >
          <b>Danh Sách Học Viên</b>
        </h1>
        {students.hasOwnProperty('limitStudent') ? null : (
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
              <th style={{ textAlign: 'center' }}>Tên tài khoản</th>
              <th style={{ textAlign: 'center' }}>Email</th>
              <th style={{ textAlign: 'center' }}>Giới tính</th>
            </tr>
          </thead>
          <tbody>
            {students.hasOwnProperty('limitStudent')
               // eslint-disable-next-line no-return-assign
              ? limitStudent.map((std) => (
                  <tr
                    style={{ cursor: 'pointer' }}
                    onClick={this.onnclicks.bind(this, std.userId)}
                  >
                    <td style={{ textAlign: 'center' }}>{(stt += 1)}</td>
                    <td>{std.name}</td>
                    <td>{std.gmail}</td>
                    <td>{std.gender}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
        <div style={{ textAlign: 'center' }}>
          <Pagination>
            <Pagination.First onClick={() => this.changePage(index - 1)} />
            {arrPage.map((number) => (
              <Pagination.Item
                active={number === index || false}
                onClick={() => this.changePage(number)}
              >
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Last
              disabled={numberPages === 1 || numberPages === index || false}
              onClick={() => this.changePage(index + 1)}
            />
          </Pagination>
        </div>
      </div>
    );
  }
}
export default student;
