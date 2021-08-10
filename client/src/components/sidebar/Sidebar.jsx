import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    const { user } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src={
                        user?.profilePic
                            ? PF + user.profilePic
                            : PF + "noAvatar.png"
                    }
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, omnis. Animi veritatis quos deleniti.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
            </div>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
    );
}
