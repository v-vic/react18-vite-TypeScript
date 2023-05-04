import React, { useCallback, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Input, RadioChangeEvent, message } from 'antd';
import { Form, Radio, Space, Switch, Table } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { ExpandableConfig, TableRowSelection } from 'antd/es/table/interface';
import _ from 'lodash'
import * as XLSX from "xlsx"

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

const columns: ColumnsType<DataType> = [
  {
    title: '排序',
    dataIndex: 'key'
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '地址',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
  {
    title: '操作',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a style={{ color: 'red' }}>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [];
for (let i = 1; i <= 66; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const defaultExpandable = { expandedRowRender: (record: DataType) => <p>{record.description}</p> };
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';

const Table_t: React.FC = () => {
  const [bordered, setBordered] = useState(true);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>('large');
  const [expandable, setExpandable] = useState<ExpandableConfig<DataType> | undefined>(
    defaultExpandable,
  );
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState<TableRowSelection<DataType> | undefined>({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState<TablePaginationPosition | 'none'>('none');
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string>();

  const [formAge, setFormAge] = useState<string>()
  const [t_data, setT_data] = useState(data)
  const [tableloading, setTableloading] = useState(false)

  const handleBorderChange = (enable: boolean) => {
    setBordered(enable);
  };

  const handleLoadingChange = (enable: boolean) => {
    setLoading(enable);
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const handleTableLayoutChange = (e: RadioChangeEvent) => {
    setTableLayout(e.target.value);
  };

  const handleExpandChange = (enable: boolean) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };

  const handleEllipsisChange = (enable: boolean) => {
    setEllipsis(enable);
  };

  const handleTitleChange = (enable: boolean) => {
    setShowTitle(enable);
  };

  const handleHeaderChange = (enable: boolean) => {
    setShowHeader(enable);
  };

  const handleFooterChange = (enable: boolean) => {
    setShowFooter(enable);
  };

  const handleRowSelectionChange = (enable: boolean) => {
    setRowSelection(enable ? {} : undefined);
  };

  const handleYScrollChange = (enable: boolean) => {
    setYScroll(enable);
  };

  const handleXScrollChange = (e: RadioChangeEvent) => {
    setXScroll(e.target.value);
  };

  const handleDataChange = (newHasData: boolean) => {
    setHasData(newHasData);
  };

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  const tableProps: TableProps<DataType> = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    // footer: showfooter ? defaultFooter : undefined,
    // rowSelection,
    scroll,
    tableLayout,
  };

  const changeinput = useCallback(
    _.debounce((e: any) => {
      setFormAge(e.target.value)
      setTableloading(true)
      if (e.target.value == '') {
        setT_data(data)
      } else {
        search()
      }
      setTimeout(() => {
        setTableloading(false)
      }, 400);
    }, 300),
    [],
  )

  const search = () => {
    if (formAge != '' && formAge != undefined) {
      setTableloading(true)
      const a = data.filter(item => item.age.toString().includes(formAge) || item.age.toString() === formAge)
      setTimeout(() => {
        setT_data(a)
        setTableloading(false)
      }, 400);
    }
    else {
      message.error('暂无搜索条件')
    }
  }


  /**
   *  用XLSX导出 (导出无样式)
   */
  const exportExcel = (id: string, name: string) => {
    if (id != '') {
      const table = document.getElementById(id) as HTMLElement
      const new_sheet = XLSX.utils.json_to_sheet(data)
      // 新建book
      const new_book = XLSX.utils.book_new()
      // 将 sheet 添加到 book 中
      XLSX.utils.book_append_sheet(new_book, new_sheet, name)
      // var exportFileContent = table.cloneNode(true);
      // var wb = XLSX.utils.table_to_book(exportFileContent, { sheet: "sheet1" });
      XLSX.writeFile(new_book, name);
    }
  }

  /**
   *  导出当前页 (导出无样式)
   */
  const exportExcelPage = (id: string, name: string) => {
    if (id != '') {
      const table = document.getElementById(id) as HTMLElement
      var exportFileContent = table.cloneNode(true);
      var wb = XLSX.utils.table_to_book(exportFileContent, { sheet: "sheet1" });
      XLSX.writeFile(wb, name);
    }
  }



  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Form.Item
          label="年龄"
          name="formAge"
        >
          <Input allowClear onChange={changeinput} />
        </Form.Item>
        <Form.Item>
          <Button onClick={search}>查询</Button>
        </Form.Item>
        <Form.Item>
          <Button type='default' onClick={() => exportExcel('table_report', '表格数据.xlsx')}>导出全部</Button>
        </Form.Item>
        <Form.Item>
          <Button type='primary' onClick={() => exportExcelPage('table_report', '当前页表格数据.xlsx')}>导出当前页</Button>
        </Form.Item>
      </Form>
      <Table
        id="table_report"
        bordered
        {...tableProps}
        loading={tableloading}
        // pagination={{ position: [top as TablePaginationPosition, bottom] }}
        columns={tableColumns}
        dataSource={hasData ? t_data : []}
        scroll={scroll}
      />
    </>
  );
};

export default Table_t;