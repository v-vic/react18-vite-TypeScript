import { Divider, Space, Tag } from 'antd';
import React from 'react';
import styles from '../../assets/styles/index.module.scss'

const MenuTags: React.FC = () => (
  <div className={styles.tag}>
    <Space size={[0, 'small']} wrap>
      <Tag color="magenta" closable>
        magenta
      </Tag>
      <Tag color="red">
        red
      </Tag>
      <Tag color="volcano">
        volcano
      </Tag>
      <Tag color="orange">
        orange
      </Tag>
      <Tag color="gold">
        gold
      </Tag>
      <Tag color="lime">
        lime
      </Tag>
      <Tag color="green">
        green
      </Tag>
      <Tag color="cyan">
        cyan
      </Tag>
      <Tag color="blue">
        blue
      </Tag>
      <Tag color="geekblue">
        geekblue
      </Tag>
      <Tag color="purple">
        purple
      </Tag>
    </Space>
  </div>
);

export default MenuTags;