import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button, Popconfirm } from "antd";
import {
  HomeOutlined,
  PoweroffOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { Loading } from "../animation/loading";
import "./layouting.css";
// import Vague from "./vague.mp3";


export const Layouting = () => {
  // const navigate = useNavigate();

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
    console.log("Clicked cancel button");
    setOpen(false);
  };


  return (
    <div className="layout-container" >
  
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
        <div>
          <Loading />
        </div>
      </div>
      <div className="right-side-container">
        <div className="navbar">
          <NavLink className="navbar-item" to={"/Home"}>
            <h1>
              <HomeOutlined />
            </h1>
          </NavLink>
          <NavLink className="navbar-item" to={"/Games"}>
            <h1>
              <SketchOutlined />
              Games
            </h1>
          </NavLink>
          <NavLink className="navbar-item" to={"/Forum"}>
            <h1>Forum</h1>
          </NavLink>

          <Popconfirm
            title="Are you sure?"
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
          >
            <Button type="primary" onClick={showPopconfirm}>
              {<PoweroffOutlined />}
              LOG OUT
            </Button>
          </Popconfirm>
        </div>
        <div className="bg-text">
          <Outlet />
        </div>
        <div className="content"></div>
        <div className="footer">Copyright</div>
      </div>
    </div>
  );
};
