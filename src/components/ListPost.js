import React from "react"
import { AiFillLike  } from "react-icons/ai";
import { BsFillChatSquareFill ,} from "react-icons/bs";
import { FiCornerUpRight } from "react-icons/fi";
function ListPost({item, handleLikePost}) {
    return (
        <div key={item.id} className="story">
                <div className="flex">
                  <div>
                    <img
                      className="w-12 rounded-full"
                      src={item.creator.avatar || '/img/default-avatar.jpg'}
                      alt=""
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
    )
}
export default ListPost