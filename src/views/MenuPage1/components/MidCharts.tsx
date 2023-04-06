import React, { useState } from 'react';
import { Card, Row, Col, } from 'antd';
import ReactEcharts from 'echarts-for-react';
// import "./index.less";
import MidRightList from './MidRightList';

const MidCharts = (props) => {
    const {title,xData} = props

    const [sales, setSales] = useState([5, 20, 36, 10, 10, 20]);
    const [stores, setStores] = useState([15, 120, 36, 110, 110, 20]);
    // 配置对象
    const getOption = (sal, sto) => {
        return {
            title: {
                text: title,
                textStyle:{
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            tooltip: {},
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: sales,
                barWidth: "40%",
                barCategoryGap: "60%",
            }]
        }
    };

    return (
        <div>
            <Row gutter={24}>
                <Col span={14}>
                    <Card title="" className="shadowBox" >
                        <ReactEcharts option={getOption(sales, stores)} />
                    </Card>
                </Col>
                <Col span={10}>
                    <MidRightList />
                </Col>
            </Row>
        </div>
    )
}
export default MidCharts