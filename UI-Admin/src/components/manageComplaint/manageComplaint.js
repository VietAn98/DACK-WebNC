/* eslint-disable radix */
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

class Complaint extends React.PureComponent {
  constructor(props) {
    super(props);
    const { getListLimitComplaint } = this.props;
    const page = -1;
    getListLimitComplaint(page);
    // getListContract();
  }

  changePage = (iPage) => {
    // const a = document.getElementById("idState").value;
    // const { getListLimitContract, filterCotractByState } = this.props;
    // if (a === "0") {
    //   getListLimitContract(iPage);
    // } else {
    //   filterCotractByState(a, iPage);
    // }
  };


  contractClick = (id) => {
    history.push(`/manage-detail-contract/${id}`);
  };

  render() {
    const { listComplaint } = this.props;
    const {
      numberPages, limitComplaint, offset, page
    } = listComplaint;
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
          <b>Danh Sách Các Khiếu Nại</b>
        </h1>
        {listComplaint.hasOwnProperty('limitComplaint') ? null : (
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
              <th style={{ textAlign: 'center' }}>Lí do</th>
              <th style={{ textAlign: 'center' }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {listComplaint.hasOwnProperty('limitComplaint')
              // eslint-disable-next-line no-return-assign
              ? limitComplaint.map((sk) => (
                <tr onClick={this.contractClick.bind(this, sk.contractId)}>
                  <td style={{ textAlign: 'center' }}>{(stt += 1)}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.nameStudent}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.nameTeacher}</td>
                  <td style={{ cursor: 'pointer' }}>{sk.reason}</td>
                  <td style={{ textAlign: 'center', color: 'red' }}>{sk.isDone ? <i className="fa fa-check" /> : <i className="fa fa-times-circle" />}</td>
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
export default Complaint;
