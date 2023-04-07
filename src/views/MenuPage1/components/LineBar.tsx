import { useEffect } from 'react';
import * as echarts from 'echarts'

const LineBar = () => {
    useEffect(() => {
        const chart =  document.getElementById('chart') as HTMLElement
        let chartInstance = echarts.init(chart);
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
        window.addEventListener('resize',()=>{ chartInstance.resize() })
    }, []);

    return (
        <div style={{paddingBottom: '10px'}}>
            <div id='chart' style={{ height: "40px",position:'relative',right:'8%',width:'100%' }}></div>
        </div>
    )
}
export default LineBar