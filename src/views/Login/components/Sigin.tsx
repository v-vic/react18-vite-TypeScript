import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import s from "./sigin.module.css"
import { useNavigate } from 'react-router-dom';



const Sigin: React.FC = () => {
    const navigateTo = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        if (values.password == '123123' && values.username == 'admin') {
            navigateTo('/menupage1')
        }else{
            message.error( '请检查用户名和密码');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            layout='vertical'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={s.formbox}
        >
            <Form.Item
                className="item"
                style={{ color: '#fff' }}
                label="用户名"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className="item"
                label="密码"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Sigin;