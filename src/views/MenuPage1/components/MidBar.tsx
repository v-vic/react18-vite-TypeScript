import { Button, Radio, Tabs } from 'antd';
import React, { createRef, PureComponent, useState } from 'react';
import styles from '../styles/datalist.module.css'
import MidCharts from './MidCharts';
import MidChartsRight from './MidCharts'
import MidRightList from './MidRightList'

const MidBar = () => {
    const radioChange = (e: any) => {
    }

    const operations = <Radio.Group defaultValue="today" style={{ marginTop: 16 }} onChange={radioChange}>
        <Radio.Button value="today">今天</Radio.Button>
        <Radio.Button value="week">本周</Radio.Button>
        <Radio.Button value="month">本月</Radio.Button>
        <Radio.Button value="year">本年</Radio.Button>
    </Radio.Group>

    const ChildRef: any = createRef();
    const ChildRefRight:any = createRef()
    const tabChange = (e: any) => {
        if (e == 'allnum') {
            console.log('allnum')
            setDatalist([220, 182, 191, 234, 290, 330, 310])
            setId('chart1')
            setTitle('总量')
            ChildRef.current.dispose();
        } else {
            console.log('fwnum')
            setDatalist([120, 282, 291, 134, 190, 230, 110])
            setId('chart2')
            setTitle('访问量')
            ChildRefRight.current.dispose();
        }
    }
    const [title, setTitle] = useState('总量')
    const [datalist, setDatalist] = useState([220, 182, 191, 234, 290, 330, 310])
    const [id, setId] = useState('chart1')
    const content = { title: title, datalist: datalist, id: id }

    const tabItems = [
        {
            label: '总量',
            key: 'allnum',
            children:
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <MidCharts onRef={ChildRef} content={content} />
                    <MidRightList />
                </div>,
        },
        {
            label: '访问量',
            key: 'fwnum',
            children:
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <MidChartsRight onRef={ChildRefRight} content={content} />
                    <MidRightList />
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