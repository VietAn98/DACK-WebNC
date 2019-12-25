/* eslint-disable max-len */
import React from 'react';
import {
    Container, Row, Col, Form
} from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import numeral from 'numeral';
import {
    AreaChart, BarChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend
} from 'recharts';
import './Statistic.css';
import PageNotFound from '../../pages/PageNotFound';

const tokenn = localStorage.token;
let decoded = null;
if (tokenn) {
    decoded = jwtDecode(tokenn);
    // console.log('decoded', decoded);
}

class Statistics extends React.PureComponent {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount = async () => {
    }

    OnShowDayWrap = async () => {
        document.getElementById('title').style.display = 'none';
        document.getElementById('YearWrap').style.display = 'none';
        document.getElementById('DayWrap').style.display = 'block';
        document.getElementById('MonthWrap').style.display = 'none';

        const { getMoneyEachDay, getTotalContracts } = this.props;
        await getMoneyEachDay(decoded.userId);
        await getTotalContracts(decoded.userId);
        document.getElementById('div').style.display = 'none';
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div3').style.display = 'none';
        document.getElementById('chart').style.display = 'block';
    }

    OnShowMonthWrap = () => {
        document.getElementById('title').style.display = 'none';
        document.getElementById('DayWrap').style.display = 'none';
        document.getElementById('YearWrap').style.display = 'none';
        document.getElementById('MonthWrap').style.display = 'block';

        const { getSumEachMonth } = this.props;

        Promise.resolve(getSumEachMonth(decoded.userId)).then(async () => {
            const { getTotalPriceAndContract } = this.props;
            await getTotalPriceAndContract(decoded.userId);
            document.getElementById('div4').style.display = 'none';
            document.getElementById('div5').style.display = 'none';
            document.getElementById('div6').style.display = 'none';
            document.getElementById('barMonth').style.display = 'block';
        });
    }

    OnShowYearWrap = () => {
        document.getElementById('title').style.display = 'none';
        document.getElementById('DayWrap').style.display = 'none';
        document.getElementById('YearWrap').style.display = 'block';
        document.getElementById('MonthWrap').style.display = 'none';

        const { getSumEachYear } = this.props;
        Promise.resolve(getSumEachYear(decoded.userId)).then(() => {
            document.getElementById('div7').style.display = 'none';
            document.getElementById('div8').style.display = 'none';
            document.getElementById('div9').style.display = 'none';
            document.getElementById('barYear').style.display = 'block';
        });
    }

    render() {
        const {
            moneyEachDay,
            totalContracts,
            sumEachMonth,
            sumEachYear,
            totalPriceNContract
        } = this.props;
        // console.log('totalPriceNContract', totalPriceNContract);
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
                                                    <div className="pl-5 column-flex mb-3 ">
                                                        <Form>
                                                            <Form.Check
                                                                custom
                                                                label="Theo ngày"
                                                                type="radio"
                                                                id="custom-inline-radio-1"
                                                                name="radSort"
                                                                onClick={this.OnShowDayWrap}
                                                            />
                                                            <Form.Check
                                                                custom
                                                                label="Theo tháng"
                                                                type="radio"
                                                                id="custom-inline-radio-2"
                                                                name="radSort"
                                                                onClick={this.OnShowMonthWrap}
                                                            />
                                                            <Form.Check
                                                                custom
                                                                label="Theo năm"
                                                                type="radio"
                                                                id="custom-inline-radio-3"
                                                                name="radSort"
                                                                onClick={this.OnShowYearWrap}
                                                            />
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div
                                    className="col-md-9 col-sm-9 mt-5 mb-5"
                                    id="title"
                                    style={{ display: 'block' }}
                                >
                                    <h3>Hãy chọn loại thống kê</h3>
                                </div>

                                {/* theo ngày */}
                                <div
                                    className="col-md-9 col-sm-9 mt-5 mb-5 divWrap"
                                    id="DayWrap"
                                    style={{ display: 'none' }}
                                >
                                    <div className="lg-title mb-3">
                                        <p className="text-center "><b>Doanh Thu Theo Ngày</b></p>
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
                                                    height={250}
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
                                                <h4>
                                                    <b>
                                                        {numeral(`${moneyEachDay.maxPrice}`).format('(0,0)')}
                                                        {' '}
                                                        VND
                                                    </b>
                                                </h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Doanh thu thấp nhất:</p>
                                                <h4>
                                                    <b>
                                                        {numeral(`${moneyEachDay.minPrice}`).format('(0,0)')}
                                                        {' '}
                                                        VND
                                                    </b>
                                                </h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Số hợp đồng nhiều nhất:</p>
                                                <h4>
                                                    <b>
                                                        {totalContracts.maxTotal}
                                                        {' '}
                                                    </b>
                                                </h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Số hợp đồng ít nhất:</p>
                                                <h4>
                                                    <b>
                                                        {totalContracts.minTotal}
                                                        {' '}
                                                    </b>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* theo thasng */}
                                <div
                                    className="col-md-9 col-sm-9 mt-5 mb-5 divWrap"
                                    id="MonthWrap"
                                    style={{ display: 'none' }}
                                >
                                    <div className="lg-title mb-3">
                                        <p className="text-center "><b>Doanh Thu Theo Tháng</b></p>
                                    </div>
                                    <div className="d-flex flex-nowrap justify-center mb-5">
                                        <span className="div" id="div4" style={{ display: 'block' }} />
                                        <span className="div2" id="div5" style={{ display: 'block' }} />
                                        <span className="div3" id="div6" style={{ display: 'block' }} />
                                        {/* <div className="div4" style={{ display: 'none' }} />
                                    <div className="div5" style={{ display: 'none' }} /> */}
                                    </div>

                                    <div
                                        id="barMonth"
                                        style={{ display: 'none' }}
                                    >
                                        <div className="d-flex flex-nowrap mb-5">
                                            <div>
                                                <BarChart
                                                    width={800}
                                                    height={250}
                                                    data={sumEachMonth.length !== 0 ? sumEachMonth : null}
                                                    margin={{
                                                        top: 5, right: 30, left: 20, bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="sum" fill="#82ca9d" />
                                                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                                                </BarChart>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 mb-5">
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Số hợp đồng hoàn thành:</p>
                                                <h4>
                                                    <b>
                                                        {totalPriceNContract.length !== 0
                                                            ? totalPriceNContract[0].numberContract
                                                            : null}
                                                        {/* {numeral(`${moneyEachDay.maxPrice}`).format('(0,0)')}
                                                        {' '}
                                                        VND */}
                                                    </b>
                                                </h4>
                                            </div>
                                            <div className="col-md-3 col-sm-3">
                                                <p style={{ fontSize: '13px' }}>Tổng doanh thu:</p>
                                                <h4>
                                                    <b>
                                                        {totalPriceNContract.length !== 0
                                                            ? numeral(`${totalPriceNContract[0].sumPrice}`).format('(0,0)')
                                                            : null}
                                                        {' '}
                                                        VND
                                                    </b>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* theo nam */}
                                <div
                                    className="col-md-9 col-sm-9 mt-5 mb-5 divWrap"
                                    id="YearWrap"
                                    style={{ display: 'none' }}
                                >
                                    <div className="lg-title mb-3">
                                        <p className="text-center "><b>Doanh Thu Theo Năm</b></p>
                                    </div>
                                    <div className="d-flex flex-nowrap justify-center mb-5">
                                        <span className="div" id="div7" style={{ display: 'block' }} />
                                        <span className="div2" id="div8" style={{ display: 'block' }} />
                                        <span className="div3" id="div9" style={{ display: 'block' }} />
                                        {/* <div className="div4" style={{ display: 'none' }} />
                                    <div className="div5" style={{ display: 'none' }} /> */}
                                    </div>

                                    <div
                                        id="barYear"
                                        style={{ display: 'none' }}
                                    >
                                        <div className="d-flex flex-nowrap mb-5">
                                            <div>
                                                <BarChart
                                                    width={800}
                                                    height={250}
                                                    // eslint-disable-next-line no-prototype-builtins
                                                    data={sumEachYear.hasOwnProperty('arrYear') ? sumEachYear.arrYear : null}
                                                    margin={{
                                                        top: 5, right: 30, left: 20, bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="year" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="sumPrice" fill="#82ca9d" />
                                                    <Bar dataKey="numberContract" fill="#8884d8" />
                                                </BarChart>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-md-3 col-sm-3" />
                                <div className="col-md-9 col-sm-9 mb-5 divWrap">
                                    <h2>Tổng Quát</h2>
                                    <div className="col-md-3 col-sm-3 mt-3 mb-5">
                                        <p>Tổng số yêu cầu đã hoàn thành:</p>
                                    </div>
                                </div> */}
                            </div>
                        </Container>
                    )
                    : <PageNotFound />}
            </div>
        );
    }
}

export default Statistics;
