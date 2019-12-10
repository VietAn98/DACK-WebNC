import React from 'react';
import { Table } from 'react-bootstrap';
import history from '../../history';

class student extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListTeacher } = this.props;
    getListTeacher();
  }

  onnclicks = (index) => {
    history.push(`/manage-student-teacher/detail/${index}`);
  }

  render() {
    const { teachers } = this.props;
    let i = 0;
    // console.log(teachers);
    return (
      <div style={{ padding: '10px' }}>
        <h1
          style={{ textAlign: 'center', marginBottom: '20px', padding: '20px' }}
        >
          <b>Danh sách giáo viên</b>
        </h1>
        <Table striped bordered hover className="ml-1">
          <thead style={{ background: '#88888A' }}>
            <tr style={{ textAlign: 'center' }}>
              <th style={{ textAlign: 'center', width: '5%' }}>STT</th>
              <th style={{ textAlign: 'center' }} placeholder="Chưa cập  nhật">Họ Tên</th>
              <th style={{ textAlign: 'center' }}>Gmail</th>
              <th style={{ textAlign: 'center' }}>Giới tính</th>
              <th style={{ textAlign: 'center' }} placeholder="Chưa cập  nhật">Giá (/h)</th>
            </tr>
          </thead>
          <tbody>
            {teachers
              // eslint-disable-next-line no-return-assign
              ? teachers.map((tch) => (
                    <tr onClick={this.onnclicks.bind(this, tch.userId)}>
                      <td style={{ textAlign: 'center' }}>{i += 1}</td>
                      <td>{tch.name}</td>
                      <td>{tch.gmail}</td>
                      <td>{tch.gender}</td>
                      <td>{tch.price}</td>
                    </tr>
                  ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default student;
