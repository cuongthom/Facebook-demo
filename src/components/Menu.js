import React, { useState } from "react";


function Menu({listMemes,user,Link}) {
  // const [loading, setLoading] = useState(false)
  return (
    <div className="sidebar1 w-7 col-md-4" key={listMemes?.id}>
      <Link to="/profile">
      <div className="flex">
        <div className="w-10 ">
          <img
            className="w-8 py-2 rounded-full"
            src={user?.avatar || "../../img/default-avatar.jpg"}
            alt=""
          />
        </div>
        <p className="py-2">{user?.fullName}</p>
      </div>
      </Link>
      <div className="flex">
        <div className="w-10">
          <img
            className="w-8 py-2"
            src="./img/icons8-avatar-67.png"
            alt="avt"
          />
        </div>
        <p className="py-2">Bạn Bè</p>
      </div>
      <div className="flex">
        <div className="w-10">
          <img
            className="w-8 py-2"
            src="./img/icons8-avatar-67.png"
            alt="avt"
          />
        </div>
        <p className="py-2">Nhóm</p>
      </div>
      <div className="flex">
        <div className="w-10">
          <img
            className="w-8 py-2"
            src="./img/icons8-avatar-67.png"
            alt="avt"
          />
        </div>
        <p className="py-2">Marketplace</p>
      </div>
      <div className="flex">
        <div className="w-10">
          <img
            className="w-8 py-2"
            src="./img/icons8-avatar-67.png"
            alt="avt"
          />
        </div>
        <p className="py-2">Kỷ niệm</p>
      </div>
      <div className="flex">
        <div className="w-10">
          <img
            className="w-8 py-2"
            src="./img/icons8-avatar-67.png"
            alt="avt"
          />
        </div>
        <p className="py-2">Đã lưu</p>
      </div>
    </div>
  );
}
export default Menu;
