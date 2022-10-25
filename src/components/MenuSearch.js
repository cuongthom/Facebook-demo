import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useAuthentication } from '../hooks';
import { Link } from "react-router-dom";

function MenuSearch({listMemes,user,Row,Col}) {
  const { logout } = useAuthentication();
const menu = (
  <Menu
    items={[
      {
        label: <p onClick={() => logout()}> Đăng xuất </p>
      },
      {
        label: <Link to="/profile"><p> Profile </p></Link>
      },
    ]}
  />
);
  return (
    <div className="layout row" >
      <div xl={8} lg={8} md={8} sm={12} xs={12} className="sidebar-1 col-4">
        <img className="w-14" src="./img/icons8-facebook-48.png" alt="icon" />
        <div className="flex searcher color-bg-gray">
          <img
            className="h-10 w-5 flex py-2 mx-2"
            src="./img/icons8-search-50.png"
            alt="search"
          />
          <input
            className="color-bg-gray text-white rounded-3xl focus:outline-none"
            type="text"
            placeholder="Tìm kiếm trên Facebook"
          />
        </div>
      </div>
      <div xl={8} lg={8} md={8} sm={0} xs={0} className="sidebar-2 col-4">
        <div className="icon-center">
          <img
            className="w-6 text-center"
            src="../img/icons8-home-50.png"
            alt="icon"
          />
        </div>
        <div className="icon-center">
          <img
            className="w-6 text-center"
            src="../img/icons8-people-50.png"
            alt="icon"
          />
        </div>
        <div className="icon-center">
          <img
            className="w-6 text-center"
            src="./img/icons8-game-controller-50.png"
            alt="icon"
          />
        </div>
      </div>

      <div xl={8} lg={8} md={8} sm={12} xs={12} className="sidebar-3 col-4">
        <div className="boder-icon-end color-bg-gray">
          <img
            className="w-5"
            src="../img/icons8-circled-menu-50.png"
            alt="icon"
          />
        </div>
        <div className="boder-icon-end color-bg-gray">
          <img
            className="w-5"
            src="./img/icons8-facebook-messenger-50.png"
            alt="icon"
          />
        </div>
        <div className="boder-icon-end color-bg-gray">
          <img
            className="w-5"
            src="./img/icons8-notification-50.png"
            alt="icon"
          />
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
        <div  onClick={(e) => e.preventDefault()}>
          <Space>
          <img
            className="py-2 px-2 w-14 rounded-full"
            src= {user?.avatar || "../../img/default-avatar.jpg"}
            alt="icon"
          />
          
          </Space>
          <DownOutlined />
        </div>
        </Dropdown>
      </div>
    </div>
  );
}
export default MenuSearch;
