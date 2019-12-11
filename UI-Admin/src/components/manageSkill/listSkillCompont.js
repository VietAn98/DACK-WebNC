import React from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import history from "../../history";

class ListSkill extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListSkill } = this.props;
    getListSkill();
  }

  onnclicks = async (name, skillId) => {
    const { updateSkill } = this.props;
    const { value: ipAddress } = await Swal.fire({
      title: "Enter your IP address",
      input: "text",
      inputValue: name,
      showCancelButton: true,
      // eslint-disable-next-line consistent-return
      inputValidator: value => {
        if (!value) {
          return "Vui lòng nhập vào kĩ năng!";
        }
      }
    });

    if (ipAddress) {
      updateSkill(skillId, ipAddress);
      Swal.fire("Đang cập nhật");
      Swal.showLoading();
      setTimeout(() => {
        Swal.fire("Cập nhật thành công", "Kĩ năng đã được cập nhật", "success");
      }, 3000);
    }
  };

  deleteSkill = index => {
    const { deleteSingleSkill } = this.props;
    Swal.fire({
      title: "Bạn chắc chắn muốn xóa  không?",
      text: "Kĩ năng các giáo viên cũng sẽ bị xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng Ý"
    }).then(result => {
      if (result.value) {
        deleteSingleSkill(index);
        Swal.fire("Đang xóa");
        Swal.showLoading();
        setTimeout(() => {
          Swal.fire("Xóa thành công", "Kĩ năng đã bị xóa", "success");
        }, 3000);
      }
    });
  };

  AddSkill = async () => {
    const { addSkill } = this.props;
    const { value: ipAddress } = await Swal.fire({
      title: "Enter your IP address",
      input: "text",
      inputValue: "",
      showCancelButton: true,
      // eslint-disable-next-line consistent-return
      inputValidator: value => {
        if (!value) {
          return "Vui lòng nhập vào kĩ năng!";
        }
      }
    });

    if (ipAddress) {
      addSkill(ipAddress);
      Swal.fire(`Đang thêm kĩ năng : ${ipAddress}`);
      Swal.showLoading();
      setTimeout(() => {
        Swal.fire("Thêm thành công", "Kĩ năng đã được thêm", "success");
      }, 2500);
    }
  };

  render() {
    const { listSkill } = this.props;
    let i = 0;
    return (
      <div style={{ padding: "10px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "20px", padding: "20px" }}
        >
          <b>Danh sách các kỹ năng</b>
        </h1>
        <Button type="button" onClick={this.AddSkill}>Thêm kỹ năng</Button>
        <Table striped bordered hover>
          <thead style={{ background: "#88888A" }}>
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "center", width: "10%" }}>STT</th>
              <th style={{ textAlign: "center" }}>Họ Tên</th>
              <th style={{ textAlign: "center", width: "10%" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listSkill
              ? // eslint-disable-next-line no-return-assign
                listSkill.map(sk => (
                  <tr>
                    <td style={{ textAlign: "center" }}>{(i += 1)}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={this.onnclicks.bind(this, sk.name, sk.skillId)}
                    >
                      {sk.name}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <i
                        onClick={this.deleteSkill.bind(this, sk.skillId)}
                        style={{ cursor: "pointer" }}
                        className="fa fa-trash"
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ListSkill;
