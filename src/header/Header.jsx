import "./header.css";

import background_img from '../Assets/blog11.png';

export default function Header(){
    
    return(
    <div className="header">
    
<div className= "headerTitles">
    
    <span className=" headerTitleSm">Travel and Write</span>
   <span className="headerTitleLg"> Blog</span>

</div>
<img src={background_img} alt="" className="blog_img" />
    </div>
    )
}


