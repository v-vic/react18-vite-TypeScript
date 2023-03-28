import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const items: MenuProps['items'] = [
  {
    key: '',
    label: (
      <span>账号设置</span>
    ),
  },
  {
    key: '/login',
    label: (
      <span onClick={function(e: any) {
        console.log(e)
        const nav = useNavigate()
        nav('/login')
      }}>注  销</span>
    ),
  },
];

const HeaderAvatar: React.FC = () => (
  <Space size={16} wrap style={{ position: 'relative' }}>
    <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <Avatar src={url} />
        <span style={{ paddingLeft: '20px' }}>名字</span>
      </div>
    </Dropdown>
  </Space>
);

export default HeaderAvatar;