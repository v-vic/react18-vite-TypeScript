import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import React, { PureComponent } from 'react';
import { NumericFormat } from 'react-number-format';
import styles from '../styles/datalist.module.css'
import LineBar from './LineBar'
import RightProgress from './RightProgress'
// import NumericFormat  from 'react-number-format';

const Datalist = (props: any) => {
    const isShow = props.content.title == '总量' ? 1 : props.content.title == '访问量' ? 2 : props.content.title == '新增人数' ? 3 : 4

    const content = {
        progress:87.5
    }
    return (
        <div className={styles.title_box}>
            <div className={styles.title_line}>{props.content.title}</div>
            <NumericFormat className={styles.num} value={props.content.num} displayType={'text'} thousandSeparator={true} prefix={'￥'}></NumericFormat >
            {
                isShow == 1 || isShow == 3 ?
                    <div className={styles.num_box}>
                        <span>周同比<CaretDownOutlined style={{ color: '#ff4d4f', marginLeft: '3%' }} />{props.content.down}</span>
                        <span style={{ paddingLeft: '10%' }}>日同比<CaretUpOutlined style={{ color: '#52c41a', marginLeft: '3%' }} />{props.content.up}</span>
                    </div> : isShow == 2 ?
                        <LineBar></LineBar>
                        : isShow == 4 ?
                            <RightProgress content={content}></RightProgress>
                            : ''
            }
            <div className={styles.short_line}></div>
            {
                isShow == 4 ?
                    <div className={styles.num_box}>
                        <span>周同比<CaretDownOutlined style={{ color: '#ff4d4f', marginLeft: '3%' }} />{props.content.down}</span>
                        <span style={{ paddingLeft: '10%' }}>日同比<CaretUpOutlined style={{ color: '#52c41a', marginLeft: '3%' }} />{props.content.up}</span>
                    </div>
                    :
                    <div className={styles.b_box}>
                        {props.content.b_title}
                        <NumericFormat className={styles.b_num} value={props.content.b_num} displayType={'text'} thousandSeparator={true} prefix={'￥'}></NumericFormat >
                    </div>

            }
        </div>
    )
}
export default Datalist