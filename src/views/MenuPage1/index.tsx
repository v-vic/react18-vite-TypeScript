import { Component, ReactNode, useRef } from 'react'
import Datalist from './components/Datalist'
import LineCharts from './components/LineCharts'
import styles from './styles/index.module.css'

// const MenuPage1 = () => {
//     const content = {
//         title: '总量',
//         num: '126550',
//         b_title: '日总量',
//         b_num: '102289',
//         down: '12.6',
//         up: '1.3%',
//     }
//     const content1 = {
//         title: '访问量',
//         num: 55467,
//         b_title: '日访问量',
//         b_num: 887
//     }
//     const content2 = {
//         title: '新增人数',
//         num: 34567,
//         b_title: '总量',
//         b_num: 23456,
//         down: '12.6',
//         up: '1.3%',
//     }
//     const content3 = {
//         title: '当日运营进度',
//         num: 55467,
//         b_title: '总进度',
//         down: '12.6',
//         up: '1.3%',
//     }
//     return (
//         <div>
//             {/* <Charts content={content}></Charts> */}
//             <div className={styles.top_div}>
//                 <Datalist content={content}></Datalist>
//                 <Datalist content={content1}></Datalist>
//                 <Datalist content={content2}></Datalist>
//                 <Datalist content={content3}></Datalist>
//             </div>
//             <div>
//                 <LineCharts></LineCharts>
//             </div>
//         </div>
//     )
// }

export class MenuPage1 extends Component {
    state = {
        content: {
            title: '总量',
            num: '126550',
            b_title: '日总量',
            b_num: '102289',
            down: '12.6',
            up: '1.3%',
        },
        content1: {
            title: '访问量',
            num: 55467,
            b_title: '日访问量',
            b_num: 887
        },
        content2: {
            title: '新增人数',
            num: 34567,
            b_title: '总量',
            b_num: 23456,
            down: '12.6',
            up: '1.3%',
        },
        content3: {
            title: '当日运营进度',
            num: 55467,
            b_title: '总进度',
            down: '12.6',
            up: '1.3%',
        }
    }
    componentWillMount() {
        // this.child.onChild()
        console.log('componentWillMount --------- 组件挂载之前', this.child)
        setTimeout(() => {
            // window.location.reload()  
        }, 500);
    }
    // 组件挂载之后
    componentDidMount() {
        console.log('componentDidMount --------- 组件挂载之后', this.child)
    }
    // 页面卸载时执行
    componentWillUnmount() {
        console.log('componentWillUnmount ----------- child')
    }

    child: any = {}
    onRef = (ref: any) => {
        this.child = ref
    }

    render() {
        return (
            <div>
                {/* <Charts content={content}></Charts> */}
                <div className={styles.top_div}>
                    <Datalist content={this.state.content}></Datalist>
                    <Datalist content={this.state.content1}></Datalist>
                    <Datalist content={this.state.content2}></Datalist>
                    <Datalist content={this.state.content3}></Datalist>
                </div>
                <div>
                    <LineCharts onRef={this.onRef}></LineCharts>
                </div>
            </div>
        )
    }
}

export default MenuPage1