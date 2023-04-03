import React, { PureComponent, useEffect, useRef } from 'react';
import * as echarts from 'echarts'

const LineBar = () => {

    const chartRef = useRef();
    useEffect(() => {
        let chartInstance = echarts.init(chartRef.current);
        const option = {
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    show:false
                }
            ],
            tooltip: {
              trigger: 'axis',
            },
            yAxis: [
                {
                    type: 'value',
                    show:false
                }
            ],
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [80, 132, 101, 134, 90, 230, 170]
                },
            ]
        }
        chartInstance.setOption(option);
    }, []);

    return (
        <div style={{paddingBottom: '10px'}}>
            <div ref={chartRef} style={{ height: "40px",position:'relative',right:'8%' }}></div>
        </div>
    )
}
export default LineBar