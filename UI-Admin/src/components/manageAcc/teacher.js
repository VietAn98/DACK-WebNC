import React from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import history from "../../history";

class student extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListLimitTeacher } = this.props;
    // getListTeacher();
    const page = -1;
    getListLimitTeacher(page);
  }

  onnclicks = index => {
    history.push(`/manage-student-teacher/detail/${index}`);
  };

  changePage = iPage => {
    const { getListLimitTeacher } = this.props;
    getListLimitTeacher(iPage);
  };

  render() {
    const { teachers } = this.props;
    // console.log('11111111111', teachers);
    const { numberPages, limitTeacher, offset, page } = teachers;
    const index = parseInt(page);
    let stt = offset;
    const arrPage = [];
    for (let i = 1; i <= numberPages; i += 1) {
      arrPage.push(i);
    }
    return (
      <div style={{ padding: "10px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}
        >
          <b>Danh sách giáo viên</b>
        </h1>
        <Table striped bordered hover className="ml-1">
          <thead style={{ background: "#88888A" }}>
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "center", width: "5%" }}>STT</th>
              <th style={{ textAlign: "center" }} placeholder="Chưa cập  nhật">
                Họ Tên
              </th>
              <th style={{ textAlign: "center" }}>Gmail</th>
              <th style={{ textAlign: "center" }}>Giới tính</th>
              <th style={{ textAlign: "center" }} placeholder="Chưa cập  nhật">
                Giá (/h)
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.hasOwnProperty("limitTeacher")
              ? // eslint-disable-next-line no-return-assign
                limitTeacher.map(tch => (
                  <tr onClick={this.onnclicks.bind(this, tch.userId)}>
                    <td style={{ textAlign: "center" }}>{(stt += 1)}</td>
                    <td>{tch.name}</td>
                    <td>{tch.gmail}</td>
                    <td>{tch.gender}</td>
                    <td>{tch.price}</td>
                  </tr>
                ))
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
            <Pagination.Last disabled={numberPages === 1 || numberPages === index || false} onClick={() => this.changePage(index+1)} />
          </Pagination>
        </div>
      </div>
    );
  }
}
export default student;
