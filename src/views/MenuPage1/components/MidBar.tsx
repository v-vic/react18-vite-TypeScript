import { Button, Radio, Tabs } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/datalist.module.css'
import MidCharts from './MidCharts';

const MidBar = () => {
    const radioChange = (e: any) => {
        console.log('e==', e.target.value)
    }

    const operations = <Radio.Group defaultValue="today" style={{ marginTop: 16 }} onChange={radioChange}>
        <Radio.Button value="today">今天</Radio.Button>
        <Radio.Button value="week">本周</Radio.Button>
        <Radio.Button value="month">本月</Radio.Button>
        <Radio.Button value="year">本年</Radio.Button>
    </Radio.Group>

    const [title, setTitle] = useState('总量趋势')
    const [xData, setxData] = useState(['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'])
    const [yData, setyData] = useState([10, 40, 60, 29, 30, 50])

    const tabChange = (e: any) => {
        if (e == 'allnum') {
            console.log('allnum')
            setTitle('总量趋势')
            setxData(['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'])
            setyData()
        } else {
            console.log('fwnum')
            setTitle('访问量趋势')
            setxData(['衬衫1', '羊毛衫1', '雪纺衫1', '裤子1', '高跟鞋1', '袜子1'])
        }
    }

    const tabItems = [
        {
            label: '总量',
            key: 'allnum',
            children:
                <div style={{
                    // display: 'flex',
                    // justifyContent: 'space-between',
                    // alignItems: 'center',
                    // width: '100%'
                }}>
                    <MidCharts
                        notMerge={true}
                        title={title}
                        xData={xData}
                        yData={yData}
                        style={{ width: '100%', height: '100%' }} />
                    {/* <MidRightList /> */}
                </div>,
        },
        {
            label: '访问量',
            key: 'fwnum',
            children:
                <div style={{
                    // display: 'flex',
                    // justifyContent: 'space-between',
                    // alignItems: 'center',
                    // width: '100%'
                }}>
                    <MidCharts
                        notMerge={true}
                        title={title}
                        xData={xData}
                        yData={yData}
                        style={{ width: '100%', height: '100%' }} />
                    {/* <MidRightList /> */}
                </div>,
        }
    ]

    return (
        <div style={{ width: '100%' }}>
            <Tabs className={styles.tab_title} tabBarExtraContent={operations} items={tabItems} onChange={tabChange} />

        </div>
    )
}
export default MidBar