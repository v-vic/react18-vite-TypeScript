import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, DatePicker, Descriptions, Form, Input, message, Result, Steps, theme } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Store } from 'antd/es/form/interface';

const steps = [
    {
        title: '个人信息',
        content: 'First-content',
        code:'1'
    },
    {
        title: '确认信息',
        content: 'Second-content',
        code:'2'
    },
    {
        title: '完成',
        content: 'Last-content',
        code:'3'
    },
];

const MenuPage2_2 = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const [form] = Form.useForm();
    let initValues: Object
    const [formVal, setFormVal] = useState({
        username: '',
        password: '',
        tel: '',
        date: ''
    })

    const onFinish = (values: any) => {
        values = {
            ...values,
            'date': values?.date?.format('YYYY-MM-DD'),
        };
        console.log('success', values)
        setFormVal(values)
        next()
    };
    const onFinishFailed = (errvalues: any) => {
        console.log('file error', errvalues)
    };
    const cRef: any = useRef(null)

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item, index) => ({ key: index, title: item.title }));

    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        width: '90%',
        // height: '280px',
        maxHeight: '500px',
        padding: '20px',
        marginLeft: '5%'
    };

    const goon = () => {
        console.log('current', current)
        if (current == 0) {
            form.submit()
        }
        if (current == 1) {
            message.success('提交成功')
            next()
        }
    }

    const clear = () => {
        setCurrent(0)
        form.resetFields();
    }

    return (
        <div>
            <Steps style={{ padding: '20px 40px' }} current={current} items={items} />
            {steps[current].code == '2' && (
                <Alert
                    style={{ width: '90%', margin: '16px 5%' }}
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
            )}
            <div style={contentStyle}>
                {/* {steps[current].title == 'First' ? <Form1 ref={cRef} /> : steps[current].title == 'Second' ? <Form2 /> : <Form3 />
                } */}
                {steps[current].code == '1' ?
                    <div style={{ marginLeft: 'calc(50% - 400px)' }}>
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600, paddingTop: '20px' }}
                            // initialValues={formVal}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: '用户名必填!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="电话"
                                name="tel"
                                rules={[{ required: true, message: '电话必填!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="date"
                                label="生日"
                                rules={[{ required: true, message: '请选择生日!' }]}
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Form>
                    </div>
                    : steps[current].code == '2' ?
                        <div style={{ textAlign: 'left', padding: '10px 20px' }}>
                            <Descriptions title="    预 览" layout="vertical" bordered>
                                <Descriptions.Item label="用户名">{formVal.username}</Descriptions.Item>
                                <Descriptions.Item label="密码">{formVal.password}</Descriptions.Item>
                                <Descriptions.Item label="电话">{formVal.tel}</Descriptions.Item>
                                <Descriptions.Item label="生日">{formVal.date}</Descriptions.Item>
                            </Descriptions>
                        </div>
                        : <Result
                            style={{ maxHeight: '500px' }}
                            icon={<SmileOutlined />}
                            title="Great, we have done all the operations!"
                        // extra={<Button type="primary">Next</Button>}
                        />
                }
            </div>
            <div style={{ marginTop: 24, marginLeft: 40 }}>
                {current < steps.length - 2 && (
                    <Button type="primary" onClick={goon}>
                        下一步
                    </Button>
                )}
                {current === steps.length - 2 && (
                    <Button type="primary" onClick={goon}>
                        提交
                    </Button>
                )}
                {current > 0 && (
                    <>
                        {current != steps.length - 1 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                上一步
                            </Button>
                        )}
                        {current == steps.length - 1 && (
                            <Button onClick={clear}>
                                再来一遍
                            </Button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
export default MenuPage2_2