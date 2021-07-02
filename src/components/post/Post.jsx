import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
//   const [like,setLike] = useState(post.like)
//   const [isLiked,setIsLiked] = useState(false)

//   const likeHandler =()=>{
//     setLike(isLiked ? like-1 : like+1)
//     setIsLiked(!isLiked)
//   }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/nus_1.jpeg"
              alt=""
            />
            <span className="postUsername">
              Nusrat Afrin
            </span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
       <div className="postCenter">
         <span className="postText">This is first post</span>
         <img src="/assets/post/2.jpeg" alt= "" className="postImg"/>
       </div>
       <div className="postBottom">
         <div className="postBottomLeft">
           <img className="likeIcon" src="assets/like.png" alt="" />
           <img className="likeIcon" src="assets/heart.png" alt="" />
           <span className="postLikeCounter">50 people like it</span>
         </div>
         <div className="postBottomRight">
         <span className="postCommentText">22 comments</span>
         </div>
       </div>
      </div>
    </div>
  );
}
