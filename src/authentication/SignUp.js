import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import "./auth.css";

export const SignUp = () => {
  const navigate = useNavigate();
  // const [navigate, setnavigate] = useState(false);
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const onFinish = () => {console.log(data);
  navigate('/signin');}

  return (
    <div className="sign-up-content">
      <Form className="register-form" onFinish={onFinish} scrollToFirstError>
        <h1>Sign Up</h1>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Name"
            allowClear
            onChange={(e) => setdata({ ...data, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="E-mail"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3,4})[-. )]*(\d{3,4})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
              message: "the input is not valid phone number!",
            },
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined />}
            type="tel"
            placeholder="Phone Number"
            allowClear
            onChange={(e) => setdata({ ...data, phone: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<SafetyOutlined />}
            placeholder="Password"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
            autoComplete="true"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<SafetyCertificateOutlined />}
            placeholder="Confirm Password"
            onChange={(e) => setdata({ ...data, confirm: e.target.value })}
            autoComplete="true"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
