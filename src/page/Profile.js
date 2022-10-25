import React from "react";
import "../style/Profile.css";
import { useAuthentication } from "../hooks";


function Profile() {
    const { user } = useAuthentication();
    console.log(user);
  return (
    <div className="bg-red-900 ">
      <div className="mx-40">
        <div className="w-full z-10 mx-32">
        <img
          src="../../img/tải xuống.jpg"
          className="h-96"
        />
        </div>
        <div className=" w-36 text-center flex">
          <img
            className="rounded-full mx-32 "
            src="../../img/default-avatar.jpg"
          />
          <p>{user?.fullName}</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
