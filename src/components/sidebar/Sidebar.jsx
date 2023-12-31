import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../App";

export default function Sidebar() {

  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () =>{
      try {
        const res = await axios.get(`${URL}categories`)
        setCats(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCats()
  }, [])

  

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) =>{
            return <li className="sidebarListItem">
            <Link className="link" to={`/?cat=${c.name}`}>
              {c.name}
            </Link>
          </li>
          })}
         
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
