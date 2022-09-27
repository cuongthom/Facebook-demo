import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import { useState } from "react";
import { useAuthentication } from "../hooks";
import { privateRoutes } from "../routes";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { message } from 'antd';

function LoginPage() {
  const { login, isLoggedIn } = useAuthentication();
  const [loading, setLoading] = useState(false);
  // console.log(useAuthentication);
  console.log("login");
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate(privateRoutes.home.path);
  }, [isLoggedIn, navigate]);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const loginPromise = new Promise(async (resolve, reject) => {
      try {
        
        setLoading(true);
        await login(data.email, data.password);
        navigate(privateRoutes.home.path);
        message.success('Logged in successfully');
        resolve();
      } catch (err) {
        const msg = message.error('Login failed') || "wrong username or password";
        reject(msg);
      } finally {
        setLoading(false);
      }
    });
  }
    return (
      <>
        <section className="bg-color row">
          <div className="boder">
            <div className="bd-1 ">
              <div className="boder1 col-md-6">
                <div className="col-md-12">
                  <div className="font-img ">
                    <img
                      className="fb_logo _8ilh img"
                      src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                      alt="Facebook"
                    />
                  </div>
                  <div className="font-text text-2xl">
                    <h2>
                      Facebook giúp bạn kết nối và chia sẻ với mọi người trong
                      cuộc sống của bạn.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="boder3 col-md-6">
                <div className="">
                  <div className="boder-form">
                    <form
                      className="boder-input"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="boder-input1">
                        <input
                          name="email"
                          className="boder-radius input2"
                          type="text"
                          placeholder="Email hoặc số điện thoại"
                          {...register("email")}
                        />
                      </div>
                      <div className="boder-input1">
                        <input
                          name="password"
                          className="boder-radius input2"
                          type="password"
                          placeholder="Mật khẩu"
                          {...register("password")}
                        />
                      </div>
                      <div className="boder-btn">
                        <button
                          className="boder-btn1 boder-radius"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "loading..." : "Đăng nhập"}
                        </button>
                      </div>
                    </form>
                    <div>
                      <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
                        Quên mật khẩu?
                      </a>
                    </div>
                    <hr />
                    <div className="text-base py-5">
                      <button className="boder-radius boder-btn2">
                        <Link style={{color: "white"}} to="/register">Tạo tài khoản mới</Link>
                      </button>
                    </div>
                  </div>
                  <div>
                    <a href="/pages/create/?ref_type=registration_form">
                      <b>Tạo Trang</b>
                    </a>
                    &nbsp;dành cho người nổi tiếng, thương hiệu hoặc doanh
                    nghiệp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer></footer>
      </>
    );
  };

export default LoginPage;
