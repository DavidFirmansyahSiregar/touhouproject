import React from "react";
import { Button, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import "./auth.css"

const { Header, Content, Footer } = Layout;

export const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <Header>
          <div className="auth-btn">
            <Button onClick={() => navigate("signin")}>Sign In</Button>| 
            <Button onClick={() => navigate("signup")}>Sign Up</Button>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer id="auth-footer" ></Footer>
      </Layout>
    </div>
  );
};
