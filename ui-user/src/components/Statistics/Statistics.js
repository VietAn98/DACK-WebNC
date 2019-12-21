/* eslint-disable max-len */
import React from 'react';
import {
    Container, Row, Col, Form
} from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
// import numeral from 'numeral';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import './Statistic.css';
import PageNotFound from '../../pages/PageNotFound';

const tokenn = localStorage.token;
let decoded = null;
if (tokenn) {
    decoded = jwtDecode(tokenn);
    // console.log('decoded', decoded);
}

// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];

class Statistics extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = async () => {
        const { getMoneyEachDay } = this.props;
        await getMoneyEachDay(decoded.userId);
        document.getElementById('div').style.display = 'none';
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div3').style.display = 'none';
        document.getElementById('chart').style.display = 'block';
    }

    render() {
        const { moneyEachDay } = this.props;
        // console.log('moneyEachDay', moneyEachDay);
        let arrDate = [];

        // eslint-disable-next-line no-prototype-builtins
        if (moneyEachDay.hasOwnProperty('arrDate')) {
            arrDate = moneyEachDay.arrDate;
        }

        return (
            <div>
                {decoded && decoded.categoryUser === 1
                    ? (
                        <Container className="divcontainer">
                            <div className="flex-nowrap ">
                                <div className="mt-5em">
                                    <div className="title">
                                        <h1>
                                            THỐNG KÊ
{' '}
                                            <span>DOANH THU</span>
                                        </h1>
                                    </div>
                                </div>
                                {/* <div className="loader mt-5" id="loader" style={{ margin: 'auto', display: 'block' }} /> */}
                                <div className="col-md-3 col-sm-3 mt-5 mb-5">
                                    <Row className="mb-5">
                                        <Col sm={12}>
                                            {/* <CardTuitor /> */}
                                            <div className="sidebar">
                                                <div className="inner-sidebar">
                                                    <div className="sm-title mb-4">
                                                        <p className="text-center ">Thống Kê</p>
                                                    </div>
                                                    <div className="pl-4 column-flex mb-3 ">
                                                        <Form>
                                                            <Form.Check
                                                                custom
                                                                inline
                                                                label="Giá tiền/giờ tăng dần"
                                                                type="radio"
                                                                id="custom-inline-radio-1"
                                                                name="radSort"
                                                                onClick={this.sortPriceIncrease}
                                                            />
                                                            <Form.Check
                                                                custom
                                                                inline
                                                                label="Giá tiền/giờ giảm dần"
                                                                type="radio"
                                                                id="custom-inline-radio-2"
                                                                name="radSort"
                                                                onClick={this.sortPriceDecrease}
                                                            />
                                                            <Form.Check
                                                                custom
                                                                inline
                                                                label="Phổ biến nhất"
                                                                type="radio"
                                                                id="custom-inline-radio-3"
                                                                name="radSort"
                                                                onClick={this.sortDecreaseByRateSuccess}
                                                            />
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="col-md-9 col-sm-9 mt-5 mb-5 divWrap">
                                    <div className="sm-title mb-3">
                                        <p className="text-center ">Doanh Thu Theo Ngày</p>
                                    </div>
                                    <div className="d-flex flex-nowrap justify-center mb-5">
                                        <span className="div" id="div" style={{ display: 'block' }} />
                                        <span className="div2" id="div2" style={{ display: 'block' }} />
                                        <span className="div3" id="div3" style={{ display: 'block' }} />
                                        {/* <div className="div4" style={{ display: 'none' }} />
                                    <div className="div5" style={{ display: 'none' }} /> */}
                                    </div>
                                    <div
                                        id="chart"
                                        style={{ display: 'none' }}
                                    >
                                        <div className="d-flex flex-nowrap mb-5">
                                           <div>
                                                <AreaChart

                                                    width={800}
                                                    height={200}
                                                    // eslint-disable-next-line no-prototype-builtins
                                                    data={arrDate || null}
                                                    margin={{
                                                        top: 10, right: 30, left: 0, bottom: 0,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="endDay" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="sumPrice"
                                                        // dataKey={numeral("sumPrice").format('(0,0)')}
                                                        stroke="#8884d8"
                                                        fill="#8884d8"
                                                    />
                                                </AreaChart>
                                           </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 mb-5">
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Doanh thu cao nhất:</p>
                                                <h4><b>0 Đồng</b></h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Doanh thu thấp nhất:</p>
                                                <h4><b>0 Đồng</b></h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Tổng số hợp đồng:</p>
                                                <h4><b>0 Đồng</b></h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Tỉ lệ thành công:</p>
                                                <h4><b>0 Đồng</b></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-3" />
                                <div className="col-md-9 col-sm-9 mb-5 divWrap">
                                    <h2>Tổng Quát</h2>
                                </div>
                            </div>
                        </Container>
                    )
                    : <PageNotFound />}
            </div>
        );
    }
}

export default Statistics;
