import Charts from './components/Charts'
import Datalist from './components/Datalist'
import styles from './styles/index.module.css'
import MidBar from './components/MidBar'

const MenuPage1 = () => {
    // const content = {
    //     xData:[ "周日","周一", "周二", "周三", "周四", "周五", "周六"]
    // }
    const content = {
        title: '总量',
        num: '126550',
        b_title: '日总量',
        b_num: '102289',
        down: '12.6',
        up: '1.3%',
    }
    const content1 = {
        title: '访问量',
        num: 55467,
        b_title: '日访问量',
        b_num: 887
    }
    const content2 = {
        title: '新增人数',
        num: 34567,
        b_title: '总量',
        b_num: 23456,
        down: '12.6',
        up: '1.3%',
    }
    const content3 = {
        title: '当日运营进度',
        num: 55467,
        b_title: '总进度',
        down: '12.6',
        up: '1.3%',
    }
    return (
        <div>
            {/* <Charts content={content}></Charts> */}
            <div className={styles.top_div}>
                <Datalist content={content}></Datalist>
                <Datalist content={content1}></Datalist>
                <Datalist content={content2}></Datalist>
                <Datalist content={content3}></Datalist>
            </div>
            <div>
                <MidBar></MidBar>
            </div>
        </div>
    )
}

export default MenuPage1