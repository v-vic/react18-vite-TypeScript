import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Button, Dropdown, message, Modal } from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HeaderAvatar: React.FC = () => {
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
  const navigateTo = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toUrl,setToUrl] = useState('')

  const handleOk = () => {
    setIsModalOpen(false);
    navigateTo(toUrl)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if(key == '/login'){
      setIsModalOpen(true);
      setToUrl(key)
    }
  };
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
        <span>注  销</span>
      ),
    },
  ];

  return (
    <Space size={16} wrap style={{ position: 'relative' }}>
      <Dropdown menu={{ items, onClick }} placement="bottom" arrow={{ pointAtCenter: true }}>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Avatar src={url} />
          <span style={{ paddingLeft: '20px' }}>名字</span>
        </div>
      </Dropdown>
      <Modal title="友情提示" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  cancelText="取消" okText="确定">
        是否确认退出当前账户
      </Modal>
    </Space>
  )
}
export default HeaderAvatar;