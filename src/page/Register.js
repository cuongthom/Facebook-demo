import "../style/Register.css";
import React, { useEffect } from "react";
import {useState} from "react";
import { privateRoutes } from "../routes";
import { useAuthentication } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Button, message, Space } from 'antd';
import 'antd/dist/antd.css';
// import useAuthentication from "../hooks/useAuthentication";
// import { useNavigate } from "react-router-dom";
// import { privateRoutes } from "../routes";


const RegisterPage = () => {
  const { isLoggedIn, registerUser, login } = useAuthentication();
  // console.log(login);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoggedIn) navigate(privateRoutes.home.path);
  }, [isLoggedIn, navigate]);
  
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const registerPromise = new Promise(async (resolve, reject) => {
      try {
        setLoading(true);
        
        const registerData = {
          fullName: `${data.firstname} ${data.lastname}`,
          username: data.email,
          phone: data.phonenumber,
          password: data.password,
        };
        console.log(registerData);
        const newUser = await registerUser(registerData);
        await login(data.email, data.password);
        navigate(privateRoutes.home.path);
        message.success('Sign Up Success');
        resolve(newUser);
      } catch (err) {
        reject(message.error('registration failed'));
      } finally {
        setLoading(false);
      }
    });
    
  };
  // const success = () => {
  //   message.success('This is a success message');
  // };

  return (
    <div className="background">
      <div className="justify-center flex">
        <img
          className="facebook-img"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt=""
        />
      </div>
      <div className="justify-center flex">
        <div className="boder-box justify-center rounded-lg w-96">
          <div className="text-center pt-2">
            <h3 className="text-3xl font-medium">Tạo tài khoản mới</h3>
            <p>Nhanh chóng và dễ dàng.</p>
          </div>
          <hr className="my-3"/>
          <form className="px-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="firstname"
              {...register('firstname')}
              className="rounded w-input h-12 mr-2 px-2 size-input"
              type="text"
              placeholder="Họ"
            />
            <input
              className="rounded w-input h-12 px-2 size-input"
              type="text"
              placeholder="Tên"
              name="lastname"
              {...register('lastname')}
            />

            <input
              name='email'
              type='text'
              {...register('email')}
              className="rounded h-12 w-full my-2 px-2 size-input"
              placeholder="email"
            />
            <input
              name='phonenumber'
              type='number'
              {...register('phonenumber')}
              className="rounded h-12 w-full my-2 px-2 size-input"
              placeholder="Số di động "
            />
            <input
              name='password'
              className="rounded h-12 w-full px-2 size-input"
              type="password"
              placeholder="Mật khẩu mới"
              {...register('password')}
            />

            <div className="py-2">
              <p>Ngày sinh</p>
            </div>
            <div>
              <p>Giới tính</p>
            </div>
            <div>
              <p>
                Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
                của bạn lên Facebook. Tìm hiểu thêm.
              </p>
              <p>
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính
                sách quyền riêng tư và Chính sách cookie của chúng tôi. Bạn có
                thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ
                lúc nào.
              </p>
            </div>
            <div className=" text-center py-5">
              <button className="boder-radius px-2 py-2 font-medium bg-lime-600 text-white w-52" >
                {loading ? "..." : "Đăng ký"}
              </button>
              <div>
                <a
                  href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjYyMzYyNTQzLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
                  Bạn có tài khoản ư?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage
