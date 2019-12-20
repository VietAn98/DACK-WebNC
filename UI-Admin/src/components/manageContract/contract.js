/* eslint-disable radix */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-prototype-builtins */
import React from 'react';
import {
  Table, Button, Pagination, Spinner, Form, Col
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import history from '../../history';

class Contract extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListLimitContract, getListContract } = this.props;
    const page = -1;
    getListLimitContract(page);
    getListContract();
  }

  changePage = (iPage) => {
    const a = document.getElementById('idState').value;
    const { getListLimitContract, filterCotractByState } = this.props;
    if (a === '0') {
      getListLimitContract(iPage);
    } else {
      filterCotractByState(a, iPage);
    }
  };

  onChangeContract = (obj) => {
    const id = obj.target.value;
    if (id === '0') {
      const { getListLimitContract } = this.props;
      const page = -1;
      getListLimitContract(page);
    } else {
    }
    const { filterCotractByState } = this.props;
    const page = -1;
    filterCotractByState(id, page);
  };

  contractClick = (id) => {
    history.push(`/manage-detail-contract/${id}`);
  };

  render() {
    const { contracts, statesContract } = this.props;
    const {
      numberPages, limitContract, offset, page
    } = contracts;
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
          <b>Danh Sách Các Hợp Đồng</b>
        </h1>
        <Form.Group className="col-md-12 col-sm-12" controlId="formGridState">
          <div className="col-md-2 col-sm-2 pl-5">
            <Form.Label>Lọc theo trạng thái:</Form.Label>
          </div>
          <div className="col-md-3 col-sm-3">
            <Form.Control
              id="idState"
              as="select"
              onChange={this.onChangeContract.bind(this)}
            >
              <option value="0">Tất cả</option>
              {statesContract
                ? statesContract.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))
                : null}
            </Form.Control>
          </div>
        </Form.Group>
        {contracts.hasOwnProperty('limitContract') ? null : (
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
              <th style={{ textAlign: 'center', width: '25%' }}>Học sinh</th>
              <th style={{ textAlign: 'center', width: '25%' }}>Giáo viên</th>
              <th style={{ textAlign: 'center' }}>Ngày bắt đầu</th>
              <th style={{ textAlign: 'center' }}>Ngày kết thúc</th>
              <th style={{ textAlign: 'center' }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {contracts.hasOwnProperty('limitContract')
               // eslint-disable-next-line no-return-assign
              ? limitContract.map((sk) => (
                <tr onClick={this.contractClick.bind(this, sk.idContract)}>
                  <td style={{ textAlign: 'center' }}>{(stt += 1)}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.StudentName}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.TeacherName}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.startDay}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.endDay}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.Status}</td>
                </tr>
              ))
              : null}
          </tbody>
        </Table>
        <div style={{ textAlign: 'center' }}>
          <Pagination>
            <Pagination.First
              disabled={numberPages === 1 || false}
              onClick={() => this.changePage(index - 1)}
            />
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
export default Contract;
