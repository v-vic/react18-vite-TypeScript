import * as echarts from "echarts"
import { useEffect, useImperativeHandle } from "react"


interface ListFormProps {
    /** 申请完成触发 */
    onRef: any
  }

const LineCharts = (props:any) => {

    useImperativeHandle(props.onRef, () => ({
        // onChild 就是暴露给父组件的方法
        // onChild: () => {
        //   return init()
        // }
        init:init()
      }))


    var option:any = {}
    var myChart:any
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Union Ads', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                smooth:true,
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                smooth:true,
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }

    const init = () => {
        var chartDom = document.getElementById('chartLine') as HTMLElement
        myChart = echarts.init(chartDom)
        myChart.setOption(option)
    }

    useEffect(()=>{
        init()
    },[])

    return (
        <div id="chartLine" style={{height:'320px',width:'calc(100% - 200px)',marginTop:'30px'}}></div>
    )
}

export default LineCharts