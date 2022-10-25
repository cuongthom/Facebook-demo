import React from "react";

function PostDetail({listMemes, Link,user}) {
  return (
    <div className="story">
      <div className="status-line">
        <img
          className="w-14 h-11 mx-2 rounded-full"
          src={user?.avatar || "../../img/default-avatar.jpg"}
          alt="icon"
        />
        <button className="searcher-1 color-bg-gray focus:outline-none text-start">
          <Link style={{color:"white"}} to="/Post">Bạn đang nghĩ gì?</Link>
        </button>
      </div>
      <hr className="mx-4 my-4" />
      <div className="w-full flex">
        <div className=" flex justify-center w-52">
          <img
            className="w-12 h-8 px-2"
            src="./img/icons8-camera-64.png"
            alt="icon"
          />
          <p className="w-full">Video trực tiếp</p>
        </div>
        <div className="flex justify-center w-52">
          <img
            className="w-12 h-8 px-2"
            src="./img/icons8-image-64.png"
            alt="icon"
          />
          <p className="w-full">Ảnh/Video</p>
        </div>
        <div className="flex justify-center w-52">
          <img
            className="w-12 h-8 px-2"
            src="./img/icons8-emoticon-60.png"
            alt="icon"
          />
          <p className="w-full">Cảm xúc/Hoạt động</p>
        </div>
      </div>
    </div>
  );
}
export default PostDetail;
