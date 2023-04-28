import React from 'react';
import { Button, Result, Image } from 'antd';
import styles from './warn.module.scss'
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// const imgurl = require('../../assets/403.jpeg')

const Warn: React.FC = () => {
    const params = useParams();
    console.log('params', params);

    // useSearchParams //获取url传参
    const [search, setSearch] = useSearchParams();
    console.log('search', search.get('code'));

    // useLocation  //获取state传参
    // const { state: { id } } = useLocation();
    // console.log('id=', id)
    return (
        <div className={styles.box}>
            <div>
                <Image
                    width={240}
                    src={`/src/assets/${search.get('code')}.jpeg`}
                    preview={false}
                />
            </div>
            <div className={styles.titleBox}>
                <div className={styles.title}>{search.get('code')}</div>
                <div className={styles.introduce}>
                    {
                        search.get('code') == '403' ? '抱歉, 你无权访问该页面' : 
                        search.get('code') == '404' ? '抱歉, 未找到该页面' : 
                        search.get('code') == '500' ? '抱歉，服务器出错啦' : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Warn;