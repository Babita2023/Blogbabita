import "./topbar.css"

export default function TopBar(){
    return(
        <div className="top">

<div className="top-left">
    <i className="topIcon fa-brands fa-square-facebook"></i>
<i className="topIcon fa-brands fa-square-twitter"></i>
<i className="topIcon fa-brands fa-square-instagram"></i>
<i className="topIcon fa-brands fa-linkedin"></i>

</div>
<div className="top-center">
    <ul className="topList">
        <li className="topListItem"> Home</li>
        <li className="topListItem"> Write</li>
        <li className="topListItem"> About</li>
        <li className="topListItem"> Contact</li>
        <li className="topListItem"> Logout</li>
    </ul>
</div>
<div className="top-right">
    <img className="topImg" src="https://cdn.pixabay.com/photo/2021/02/25/22/54/woman-6050289_960_720.jpg" alt="" />
    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
</div>

        </div>
    )
}