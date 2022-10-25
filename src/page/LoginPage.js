import React from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
import { useState } from "react";
import { useAuthentication } from "../hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { message, Row, Col } from 'antd';

function LoginPage() {
  const { login, isLoggedIn, navigate } = useAuthentication();
  const [loading, setLoading] = useState(false);
  // console.log(useAuthentication);
  console.log("login");
  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const loginPromise = new Promise(async (resolve, reject) => {
      try {
        console.log("cuong");
        setLoading(true);
        await login(data.email, data.password);
        navigate('/');
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
        <Row className="bg-color row">
          <div className="boder">
            <div  className="flex">
              <Col xl={12} lg={12} md={12} sm={0} xs={0}  className="boder1 col-md-6">
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
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}  className="boder3 col-md-6">
                  <div className="boder-form bg-white text-center">
                    <form gutter={24}
                      className="boder-input"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Col xl={24} className="boder-input1">
                        <input
                          name="email"
                          className="boder-radius input2"
                          type="text"
                          placeholder="Email hoặc số điện thoại"
                          {...register("email")}
                        />
                      </Col>
                      <Col xl={24} className="boder-input1">
                        <input
                          name="password"
                          className="boder-radius input2"
                          type="password"
                          placeholder="Mật khẩu"
                          {...register("password")}
                        />
                      </Col>
                      <Col xl={24} className="boder-btn">
                        <button
                          className="boder-btn1 text-white font-medium boder-radius"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "loading..." : "Đăng nhập"}
                        </button>
                      </Col>
                    </form>
                    <div>
                      <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
                        Quên mật khẩu?
                      </a>
                    </div>
                    <hr />
                    <div className="text-base py-5">
                      <button className="boder-radius boder-btn2 text-white font-medium">
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
              </Col>
            </div>
          </div>
        </Row>
        <footer></footer>
      </>
    );
  }

export default LoginPage;
