import "./rightbar.css";

export default function Rightbar() {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Afrin </b> and <b>3 other friend </b> have a birthday today
            </span>
          </div>
          <img className="rightbarAd" src="/assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightBarFriend">
              <div className="">

              </div>

            </li>
          </ul>
        </div>
      </div>
    )
}
