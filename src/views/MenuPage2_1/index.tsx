import { CascaderProps, DatePicker, DatePickerProps } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const onChange: DatePickerProps['onChange'] = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

const MenuPage2_1: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="all year old">周岁</Option>
        <Option value="nominal age">虚岁</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '邮箱格式不正确!',
          },
          {
            required: true,
            message: '请输入邮箱!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认密码!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码不一致!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="昵称"
        tooltip="希望别人怎么称呼你?"
        rules={[{ required: true, message: '请输入昵称!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="联系方式"
        rules={[{ required: true, message: '请输入联系方式!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="donation"
        label="生日"
        rules={[{ required: true, message: '请选择生日!' }]}
      >
        {/* <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} /> */}
        <DatePicker onChange={onChange} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="intro"
        label="介绍"
        rules={[{ required: true, message: '请介绍自己' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="性别"
        rules={[{ required: true, message: '请选择性别!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="man">男</Option>
          <Option value="woman">女</Option>
          <Option value="other">沃尔玛购物袋</Option>
        </Select>
      </Form.Item>

      <Form.Item label="验证码" extra="非机器人验证">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: '请输入验证码!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('请同意协议')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MenuPage2_1;