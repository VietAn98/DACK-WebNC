import { connect } from 'react-redux';
import manageComplaint from '../components/manageComplaint/manageComplaint';
import {getListLimitComplaint } from '../actions/complaintAction';

const mapStateToProps = (state) => ({
    listComplaint: state.listComplaint
  
});

const mapDispatchToProps = (dispatch) => ({
    getListLimitComplaint: (page) => { dispatch(getListLimitComplaint(page))}
});

export default connect(mapStateToProps, mapDispatchToProps)(manageComplaint);
