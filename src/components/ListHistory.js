import React from "react";
function ListHistory() {
  return (
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
  );
}
export default ListHistory;
