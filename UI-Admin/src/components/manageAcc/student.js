import React from 'react';
import { Table, Spinner } from 'react-bootstrap';
import history from '../../history';

class student extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getStudents } = this.props;
    getStudents();
  }

  onnclicks = (index) => {
    history.push(`/manage-student-teacher/detail/${index}`);
  };

  render() {
    const { students } = this.props;
    let i = 0;
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
            {students
              ? students.map((std) => {
                // eslint-disable-next-line no-return-assign
                return (
                  <tr style={{ cursor: 'pointer' }} onClick={this.onnclicks.bind(this, std.userId)}>
                    <td style={{ textAlign: 'center' }}>{(i += 1)}</td>
                    <td>{std.name}</td>
                    <td>{std.gmail}</td>
                    <td>{std.gender}</td>
                  </tr>
                );
              })
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default student;
