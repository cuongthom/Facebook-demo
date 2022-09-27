import React,{ useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../hooks";
import memeServices from "../services/memeServices";
import "../style/Home.css";
import { message } from "antd";
import { AiFillLike  } from "react-icons/ai";
import { BsFillChatSquareFill ,} from "react-icons/bs";
import { FiCornerUpRight } from "react-icons/fi";
// import {  Modal } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

function Home() {
  const { id } = useParams();
  const { user, onSetUser, onClearUser } = useAuthentication();
  const [dataSearch, setDataSearch] = useState({
    limit: 10,
    page: 1,
  });
  // console.log(user);
  
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
  } = useInfiniteQuery(
    ["memeServices.searchMemes", dataSearch],
    ({ queryKey, pageParam: page }) =>
      memeServices.searchMemes({ ...queryKey[1], page }),
    {
      getNextPageParam: ({ data: { last, number } }) => {
        if (last === true) return undefined;
        //api page number count from 0
        let pageNumber = number + 1;
        return pageNumber + 1;
      },
      refetchOnWindowFocus: false,
    }
  );
  const listMemes = pages.reduce(
    (previous, current) => previous.concat(current.data.content),
    []
  );
  const handleLikePost = async () => {
    if (!user) {
      message.error("Please login to like post");
      return;
    }
    const likePostPromise = new Promise(async (resolve, reject) => {
      try {
        await memeServices.likeAPost({ postId: id });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };

  // console.log(listMemes);
  return (
    <div>
      <>
        <div className="layout row">
          <div className="sidebar-1 col-4">
            <img
              className="w-14"
              src="./img/icons8-facebook-48.png"
              alt="icon"
            />
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
          <div className="sidebar-2 col-4">
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

          <div className="sidebar-3 col-4">
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
            <div>
              <img className="w-14" src={user.avatar} alt="icon" />
            </div>
          </div>
        </div>

        <div className="fb-news row">
          <div className="sidebar1 w-7 col-md-4">
            <div className="flex">
              <div className="w-10">
                <img
                  className="w-8 py-2"
                  src="https://vcdn1-giaitri.vnecdn.net/2022/07/28/MinionsTheRiseofGuru-165900688-9080-3169-1659006963.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=RNx84AcTg01LPr9Z6_3sKQ"
                  alt="avt"
                />
              </div>
              <p className="py-2">phamkiencuong</p>
            </div>
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
          <div className="sidebar2 col-md-4">
            <div className="story">
              <div className="story-title">
                <div className="title">
                  <p className="color-text-gray">Tin</p>
                </div>
                <hr />
                <div className="title">
                  <p className="color-text-gray">Reels</p>
                </div>
                <hr />
                <div className="title">
                  <p className="color-text-gray">Phòng họp mặt</p>
                </div>
                <hr />
              </div>
              <div className="story-img">
                <div className="story-img-singer">
                  <img
                    src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131853-637908959338891885.jpg"
                    alt="icon"
                  />
                </div>
                <div className="story-img-singer">
                  <img
                    src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131853-637908959338891885.jpg"
                    alt="icon"
                  />
                </div>
                <div className="story-img-singer">
                  <img
                    src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131853-637908959338891885.jpg"
                    alt="icon"
                  />
                </div>
                <div className="story-img-singer">
                  <img
                    src="https://i.ytimg.com/vi/SC7BfxpWieM/maxresdefault.jpg"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="story">
              <div className="status-line">
                <img
                  className="w-14 h-11 pr-2"
                  src="./img/icons8-avatar-67.png"
                  alt="icon"
                />
                <button
                  className="searcher-1 color-bg-gray focus:outline-none text-start"
                >Bạn đang nghĩ gì?</button>
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
            <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
            {listMemes.map((item) => (
              <div key={item.id} className="story">
                <div className="flex">
                  <div>
                    <img
                      className="w-12 rounded-full"
                      src={item.creator.avatar}
                      alt="icon"
                    />
                  </div>
                  <div className="px-2">
                    <h2 style={{ color: "white" }}>{item.creator?.fullName}</h2>
                    <p>{item.creator.createdAt}</p>
                  </div>
                </div>
                <p className="py-2">{item.title}</p>
                <img className="w-full" src={item.image} alt="icon" />
                <div className="m-2.5 flex justify-between text-base">
                  <div>
                    <p>{item.likeCounts} lượt thích</p>
                  </div>
                  <div className="flex mx-1.5">
                    <p className="mx-2">{item.commentCounts} Bình luận</p>
                    <p className="mx-2">{item.shareCounts} lượt chia sẻ</p>
                  </div>
                </div>
                <hr />
                <div className="flex px-2 py-2">
                  <button
                    className="flex w-full justify-center text-base"
                    onClick={handleLikePost}
                  >
                      <AiFillLike className="mx-2 text-2xl" />
                    <p>Like </p>
                  </button>
                  <div className="flex w-full justify-center">
                    <BsFillChatSquareFill className=" mx-2 text-2xl"/>
                    <p>Comment</p>
                  </div>
                  <div className="flex w-full justify-center">
                    <FiCornerUpRight className="mx-2 text-2xl"/>
                    <p>Share</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            </InfiniteScroll>
          </div>
          <div className="sidebar3 col-md-4">
            <h4 className="px-2 color-text-gray text-lg font-medium">
              Được tài trợ
            </h4>
            <div className="py-3 px-2">
              <a
                className="flex"
                href="https://shopee.vn/lg_official_store?utm_source=facebook-ca&utm_medium=seller&utm_campaign=s95303264_SS_VN_FBT2_ALL_cpasbyshopee-25082022_LGElectronics-LGElectronics-MS-3617-TRF-LOCO-CUS-OP4-CPM-SIN-cpascpv&utm_content=MS-3617_ALL-VN-A004-P4-1845-U&fbclid=IwAR1lkF798mVk0xCE_4G_M0Qkk-kvaT0cjMHD1L_hMfX_NYKXSFMBHC0J46M"
              >
                <img
                  className="w-24 rounded-md"
                  src="https://image.winudf.com/v2/image1/Y29tLnNob3BlZS52bl9pY29uXzE2NTU2MTQ1MTZfMDky/icon.png?w=&fakeurl=1"
                  alt="icon"
                />
                <div className="py-2 px-2">
                  <p>Flash Sale giờ vàng | Áp voucher giảm 1.999 Triệu</p>
                  <p className="text-xs color-text-gray">Shoppe.vn</p>
                </div>
              </a>
            </div>
            <div className="py-3 px-2">
              <a
                className="flex"
                href="https://shopee.vn/lg_official_store?utm_source=facebook-ca&utm_medium=seller&utm_campaign=s95303264_SS_VN_FBT2_ALL_cpasbyshopee-25082022_LGElectronics-LGElectronics-MS-3617-TRF-LOCO-CUS-OP4-CPM-SIN-cpascpv&utm_content=MS-3617_ALL-VN-A004-P4-1845-U&fbclid=IwAR1lkF798mVk0xCE_4G_M0Qkk-kvaT0cjMHD1L_hMfX_NYKXSFMBHC0J46M"
              >
                <img
                  className="w-24 rounded-md"
                  src="https://image.winudf.com/v2/image1/Y29tLnNob3BlZS52bl9pY29uXzE2NTU2MTQ1MTZfMDky/icon.png?w=&fakeurl=1"
                  alt="icon"
                />
                <div className="py-2 px-2">
                  <p>Flash Sale giờ vàng | Áp voucher giảm 1.999 Triệu</p>
                  <p className="text-xs color-text-gray">Shoppe.vn</p>
                </div>
              </a>
            </div>
            <hr />
            <div className="px-2 py-3">
              <h3 className="color-text-gray text-lg font-medium">Sinh nhật</h3>
              <div className="flex py-2">
                <img className="" src="./img/icons8-gift-box-64.png" alt="" />
                <p>Hôm nay là sinh nhật của</p>
              </div>
            </div>
            <hr />
            <div className="px-2 py-3">
              <div className="flex justify-between w-40">
                <h3 className="color-text-gray text-lg font-medium">
                  Người liên hệ
                </h3>
                <div className="flex w-5 h-7">
                  <img
                    className="py-1"
                    src="./img/icons8-camera-64.png"
                    alt="camera"
                  />
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
                    className="w-8 h-8"
                    src="./img/icons8-avatar-67.png"
                    alt="avatar"
                  />
                  <h3 className=" px-2 py-1">Phamkiencuong</h3>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
