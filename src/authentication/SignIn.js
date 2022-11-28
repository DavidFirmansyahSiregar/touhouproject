import { Button, Form, Input } from "antd";
import {  MailOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({ email: "", password: "" });
  
  const onFinish = () => {
    console.log("Received values of form: ", data);
    navigate("/");
  };
  
  return (
    <div className="sign-in-content">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        scrollToFirstError
      >
        <h1>Sign In</h1>
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
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            autoComplete="true"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign in
          </Button>
        </Form.Item>
        Or <a href="signup">SignUp now!</a>
      </Form>
    </div>
  );
};
