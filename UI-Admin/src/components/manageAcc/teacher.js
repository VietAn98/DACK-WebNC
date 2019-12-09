import React from "react";
import { Table } from "react-bootstrap";
class student extends React.PureComponent {
  render() {
    return (
      <div
        style={{ padding: "10px" }}
        //   styles={{transform:`translateY(-50%)` }}
      >
         <h1
          style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}
        >
          <b>Danh sách giáo viên</b>
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "center", width: "5%" }}>STT</th>
              <th style={{ textAlign: "center" }}>Họ Tên</th>
              <th style={{ textAlign: "center" }}>Gmail</th>
              <th style={{ textAlign: "center" }}>Giới tính</th>
              <th style={{ textAlign: "center" }}>Giá (/h)</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={this.onnclicks}>
              <td style={{ textAlign: "center" }}>1</td>
              <td>việt An</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>10000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default student;
