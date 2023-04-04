import React, { PureComponent, useEffect, useImperativeHandle, useRef, useState } from 'react';
import * as echarts from 'echarts'

const MidCharts = (props: any) => {
    console.log('--------',props.content)
    let myChart: any = null

    //将子组件的方法 暴露给父组件
    useImperativeHandle(props.onRef, () => {
        return {
            initCharts: initCharts,
            dispose:dispose,
        };
      });
    const initCharts = () => {
        console.log('init')
        let dom = document.getElementById(props.content.id) as HTMLElement;
        // 初始化echarts
        myChart = echarts.init(dom,null,{
            width:'auto',
            height:'auto'
        });

        const option = {
            title: {
                text: `${props.content.title}趋势`
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    showBackground: true,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ])
                    },
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
                    data: props.content.datalist,
                    barMaxWidth: '50'
                }
            ]
        }
        myChart.setOption(option);
    }
    const dispose = () => {
        if(myChart){
            myChart.dispose();
            myChart = null
        }
    }
    
    useEffect(() => {
        if(myChart){
            const opt = myChart.getOption();
            opt.series[0].data = props.content.datalist
            myChart.setOption(opt);
        }else{
            setTimeout(() => {
                console.log('--')
                initCharts()
            }, 400);
        }
        window.addEventListener("resize", () => { myChart.resize() });
    }, []);

    return (
        // <div>
        <div id={props.content.id} style={{ height: "400px", width: '60%' }}></div>
        // </div>
    )
}
export default MidCharts