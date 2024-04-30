import Pics1 from "../Assets/blog3.jpeg";
import "./sidebar.css"

export default function Sidebar(){
    return (
        <div className="sidebar">

       <div className="sidebarItem">
        <span className="sidebarTitle"> About Me</span>
        <img src={Pics1} alt="" />
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus quisquam voluptate!
     Tempora accusantium harum aliquam.Optio id quisquam praesentium, excepturi natus, placeat
      neque, vel hic deleniti pariatur  dignissimos itaque.
   </p>
       </div>
       <div className="sidebarItem">
        <span className="sidebarTitle">CAYEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life </li>
            <li className="sidebarListItem">Music </li>
            <li className="sidebarListItem">Style </li>
            <li className="sidebarListItem">Sports </li>
            <li className="sidebarListItem">Tech </li>
        </ul>
       </div>
       <div className="sidebarItem">FOLLOW US</div>
       <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-square-facebook"></i>
<i className="sidebarIcon fa-brands fa-square-twitter"></i>
<i className="sidebarIcon fa-brands fa-square-instagram"></i>
<i className="sidebarIcon fa-brands fa-linkedin"></i>

       </div>
        </div>
    )
}