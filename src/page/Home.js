import "../style/Home.css";
import React, {useEffect, useState} from "react";
import { useInfiniteQuery,  } from "react-query";
import { useAuthentication } from "../hooks";
import memeServices from "../services/memeServices";
import ListHistory from "../components/ListHistory"
import InfiniteScroll from 'react-infinite-scroller';
import ListPost from "../components/ListPost";
import PostDetail from "../components/PostDetail"
import Advertisement from "../components/Advertisement"
import Contact from "../components/Contact"
import Menu from "../components/Menu"
import MenuSearch from "../components/MenuSearch"
import Birthday from "../components/Birthday"
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
function Home() {
  // const { id } = useParams();
  const { user, isLoggedIn,navigate } = useAuthentication();
  console.log({isLoggedIn})
  console.log({user},"cuongthom")
  const [dataSearch, setDataSearch] = useState({
    limit: 10,
    page: 1,
    // status:2,
  });
  // console.log(user);
  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    hasNextPage,
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
  console.log(listMemes);
  // const handleLikePost = async () => {
  //   if (!user) {
  //     message.error("Please login to like post");
  //     return;
  //   }
  //   const likePostPromise = new Promise(async (resolve, reject) => {
  //     try {
  //       await memeServices.likeAPost({ postId: id });
  //       resolve();
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // };
  return (
    <div>
      <>
        <MenuSearch listMemes={listMemes} user={user} Link={Link} Row={Row} Col={Col}/>
        <div className="fb-news row">
          <Menu listMemes={listMemes} user={user} Link={Link} Row={Row} Col={Col}/>
          <div className="sidebar2 col-md-4">
            <ListHistory Row={Row}/>
            <PostDetail listMemes={listMemes} user={user} Link={Link} Row={Row} Col={Col}/>
            <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage} Row={Row} Col={Col}>
            {listMemes.map((item) => (
              <ListPost item={item} user={user} Link={Link} Row={Row} Col={Col}/>
            ))}
            </InfiniteScroll>
          </div>
          <div className="sidebar3 col-md-4">
            <Advertisement Row={Row} Col={Col}/>
            <hr />
            <Birthday Row={Row} Col={Col}/>
            <hr />
            <Contact listMemes={listMemes} user={user} Row={Row} Col={Col}/>
            <div></div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
