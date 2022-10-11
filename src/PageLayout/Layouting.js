import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button, Popconfirm, Layout } from "antd"
import { HomeOutlined, PoweroffOutlined, SketchOutlined, UserOutlined } from '@ant-design/icons'

import "./layouting.css";

const { Header, Content, Sider, Footer } = Layout;
export const Layouting = () => {
    const navigate = useNavigate();

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showPopconfirm = () => {
        setOpen(true);
      };

    const handleOk = () => {
        setConfirmLoading(true);
    
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };


    return (
        <div className="layout-container">
            
            <div className="sidebar">
                <NavLink className="sidebar-items" to={"/story"}>
                    Main Story
                </NavLink>
                <NavLink className="sidebar-items" to={"/character"}>
                    Character
                </NavLink>
                <NavLink className="sidebar-items" to={"/perks"}>
                    Characters ability
                </NavLink>
                <NavLink className="sidebar-items" to={"/rules"}>
                    Rules
                </NavLink>
            </div>
            
            
            <div className="right-side-container">
                
                <div className="navbar">
                    <NavLink className="sidebar-items" to={"/Home"}>
                       <h1><HomeOutlined /></h1> 
                    </NavLink>
                    <NavLink className="sidebar-items" to={"/Games"}>
                        <h1><SketchOutlined />Games</h1>
                    </NavLink>
                        
                    <Button
                        type="primary"
                        onClick={handleOk}
                    >
                        {<UserOutlined />}
                        Login
                    </Button>

                    <Popconfirm
                        title="Are you sure?"
                        open={open}
                        onConfirm={handleOk}
                        okButtonProps={{ loading: confirmLoading }}
                        onCancel={handleCancel}
                    >
                        <Button 
                            type="primary" 
                            onClick={showPopconfirm}
                        >
                            {<PoweroffOutlined />}
                            LOG OUT
                        </Button>
                    </Popconfirm>
                    <div className="bg-text"></div>
                </div>
                    <div className="content">
                        <Outlet />
                    </div>
                    <div className="footer">
                        Copyright
                    </div>
                
            </div>
        </div>
       
    );
};
