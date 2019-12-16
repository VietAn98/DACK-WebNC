import React from 'react';
import {
    Tab, Row, Col, ListGroup
} from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import EditProfile from '../containers/EditProfileContainer';
import ChangePassword from '../containers/ChangePasswordContainer';
import History from '../containers/HistoryContainer';
import PageNotFound from './PageNotFound';
import '../public/css/style.css';

class Settings extends React.PureComponent {
    render() {
        const tokenn = localStorage.token;
        let decoded = null;
        if (tokenn) {
            decoded = jwtDecode(tokenn);
        }

        return (
            <div className="list-group-tabs-example">
                <Tab.Container defaultActiveKey="#myinformation">
                    <Row>
                        <Col sm={3}>
                            <ListGroup>
                                <ListGroup.Item action href="#myinformation">
                                    <i className="fas fa-user-edit" />
                                    {' '}
                                    {' '}
                                    Chỉnh sửa thông tin
                                </ListGroup.Item>
                                <ListGroup.Item action href="#changepassword">
                                    <i className="fas fa-key" />
                                    {' '}
                                    {' '}
                                    Đổi mật khẩu
                                </ListGroup.Item>
                                {decoded.categoryUser === 1 ? (
                                    <ListGroup.Item action href="#requesthistory">
                                        <i className="fas fa-history" />
                                        {' '}
                                        {' '}
                                        Lịch sử các yêu cầu dạy học
                                    </ListGroup.Item>
                                ) : (
                                        <ListGroup.Item action href="#contracthistory">
                                            <i className="fas fa-history" />
                                            {' '}
                                            {' '}
                                            Lịch sử hợp đồng học
                                        </ListGroup.Item>
                                    )}
                            </ListGroup>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#myinformation">
                                    <EditProfile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#changepassword">
                                    <ChangePassword />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#requesthistory">
                                    {decoded.categoryUser === 1
                                        ? <History /> : <PageNotFound />}
                                </Tab.Pane>
                                <Tab.Pane eventKey="#contracthistory">
                                    {decoded.categoryUser === 0
                                        ? <History /> : <PageNotFound />}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default Settings;
