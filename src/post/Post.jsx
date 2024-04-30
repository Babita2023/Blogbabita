import "./post.css"

import blog11 from "../Assets/blog11.png";
export default function Post(){
    return (
        <div className="post">
           <img src={blog11} alt="" className="postImg"/>
           <div className="postInfo">
            <div className="postCategory">
            <span className="postCat">Music </span>
            <span className="postCat">life </span>
            </div>
            <span className="postTitle"> Lorem ipsum dolor sit amet
             </span>
<hr />
  <span className="psteDate"> 1 hour ago </span>
  
           </div>

        </div>
    )
}