import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import styles from '../styles/Home.module.css'

const loginForm: React.FC = () => {
  const onFinish = (values: any) => {
    axios.post('http://localhost:8000/user/login', {
      email: values.email,
      password: values.password
    })
      .then((response: any) => {
        console.log(response.data.message);
      }).catch((error) => {
        console.log(error.response.data.message);
      });
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.form}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
        className={styles.formGroup}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        className={styles.formGroup}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.submitBtn}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default loginForm;