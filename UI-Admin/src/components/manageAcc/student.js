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

  changePage = iPage => {
    const { getListLimitStudent } = this.props;
    getListLimitStudent(iPage);
  };

  render() {
    const { students } = this.props;
    const { numberPages, limitStudent, offset, page } = students;
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
          <b>Danh sách học viên</b>
        </h1>
        <Table striped bordered hover>
          <thead style={{ background: '#88888A' }}>
            <tr style={{ textAlign: 'center' }}>
              <th style={{ textAlign: 'center', width: '5%' }}>STT</th>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Gmail</th>
              <th style={{ textAlign: 'center' }}>Gender</th>
            </tr>
          </thead>
          <tbody>
          {students.hasOwnProperty("limitStudent")
              ? // eslint-disable-next-line no-return-assign
              limitStudent.map((std) => {
                return (
                  <tr style={{ cursor: 'pointer' }} onClick={this.onnclicks.bind(this, std.userId)}>
                    <td style={{ textAlign: 'center' }}>{(stt += 1)}</td>
                    <td>{std.name}</td>
                    <td>{std.gmail}</td>
                    <td>{std.gender}</td>
                  </tr>
                );
              })
              : null}
          </tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Pagination>
            <Pagination.First onClick={() => this.changePage(index-1)}/>
            {arrPage.map(number => (
              <Pagination.Item active = {number===index || false} onClick={() => this.changePage(number)}>
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Last onClick={() => this.changePage(index+1)} />
          </Pagination>
        </div>
      </div>
    );
  }
}
export default student;
