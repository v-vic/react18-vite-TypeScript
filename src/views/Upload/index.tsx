import React, { Component } from 'react'
import { Table, Button, Card, Upload, message, Modal } from 'antd'
import * as XLSX from 'xlsx';
import modal from 'antd/es/modal';
const { Dragger } = Upload;
export class Upload_t extends Component {
   constructor() {
      super();
      this.state = {
         tableData: [], // table的数据
         tableHeader: [], // table的表头
         currentRowData: {},
         department: '',
         isModalOpen: false
      }
   }

   //初始化
   componentWillMount() {
   }
   uploadFilesChange(file: Blob) {
      // 通过FileReader对象读取文件
      const fileReader = new FileReader();
      fileReader.onload = event => {
         try {
            const { result } = event.target;
            // 以二进制流方式读取得到整份excel表格对象
            const workbook = XLSX.read(result, { type: 'binary' });
            // 存储获取到的数据
            let data = {};
            // 遍历每张工作表进行读取（这里默认只读取第一张表）
            for (const sheet in workbook.Sheets) {
               let tempData: any[] = [];
               // esline-disable-next-line
               if (workbook.Sheets.hasOwnProperty(sheet)) {
                  // 利用 sheet_to_json 方法将 excel 转成 json 数据
                  console.log(sheet);
                  data[sheet] = tempData.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
               }
            }
            const excelData = data.Sheet0;
            const excelHeader = [];
            // 获取表头
            for (const headerAttr in excelData[0]) {
               const header = {
                  title: headerAttr,
                  dataIndex: headerAttr,
                  key: headerAttr
               };
               excelHeader.push(header);
            }
            // 解析后的变量赋值给state，重新渲染table页面
            // message.success('上传成功！')
            this.setState({
               tableData: excelData,
               tableHeader: excelHeader,
            });
            console.log(this.state)
         } catch (e) {
            // 这里可以抛出文件类型错误不正确的相关提示
            console.log(e);
            // message.error('文件类型不正确！');
         }
      };
      // 以二进制方式打开文件
      fileReader.readAsArrayBuffer(file.file);
   }

   toReturn = () => {
      if(this.state.tableData.length == 0) {
         message.error("暂无数据");
         return
      }
      this.setState({
         isModalOpen: true
      })
      message.success("已清空");
   };
   toSubmit = () => {
      if (this.state.tableData.length > 0) {
         message.success("上传成功");
      } else {
         message.error("请先上传文件");
      }
   };

   handleOk = () => {
      this.setState({
         tableData: [],
         tableHeader: [], // table的表头
      });
   }


   render() {
      return (
         <div>
            <Card style={{ height: '680px', textAlign: 'left' }}>
               <Dragger name="file"
                  // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  accept=".xls,.xlsx" maxCount={1}
                  beforeUpload={function () {
                     return false;
                  }}
                  onChange={this.uploadFilesChange.bind(this)}
                  showUploadList={false}
               >
                  <p className="ant-upload-text" style={{ padding: '20px' }}>
                     <span>点击上传文件</span>
                     或者拖拽上传
                  </p>
               </Dragger>
               <Table
                  bordered
                  columns={this.state.tableHeader}
                  dataSource={this.state.tableData}
                  style={{ marginTop: '20px' }}
                  pagination={{ pageSize: '5' }}
               />
               <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Modal title="提 示" open={this.state.isModalOpen} onOk={this.handleOk} onCancel={() => { this.setState({ isModalOpen: false }) }} cancelText="取消" okText="确认">
                     <p>是否确认清空上传列表</p>
                  </Modal>

                  <Button onClick={this.toReturn}>清空</Button>
                  <Button style={{ marginLeft: '25px' }} onClick={this.toSubmit}
                     className='addbutton' type='primary' >确认</Button>
               </div>
            </Card>
         </div>
      )
   }
}

export default Upload_t