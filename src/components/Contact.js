import React from "react";
function Contact({listMemes , user}) {
  return (
    <div className="px-2 py-3">
      <div className="flex justify-between w-40">
        <h3 className="color-text-gray text-lg font-medium">Người liên hệ</h3>
        <div className="flex w-5 h-7">
          <img className="py-1" src="./img/icons8-camera-64.png" alt="camera" />
          <img
            className="py-1 mx-4"
            src="./img/icons8-search-50.png"
            alt="search"
          />
          <img src="./img/icons8-ellipsis-50.png" alt="ellipsis" />
        </div>
      </div>
      <div>
        <div className="flex pt-3">
          <img
            className="w-8 h-8 rounded-full"
            src={listMemes[0]?.creator.avatar || "../../img/default-avatar.jpg"}
            alt="avatar"
          />
          <h3 className=" px-2 py-1" style={{color: "white"}}>{user?.fullName}</h3>
        </div>
      </div>
    </div>
  );
}
export default Contact;
