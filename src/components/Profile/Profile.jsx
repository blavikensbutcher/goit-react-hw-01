import './Profile.css'
import { FaRegEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";



export const Profile = ({name, tag, stats: {followers, likes, views}, location, image}) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={image}
                    alt={name}
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>


            <ul className="stats">
                <li>
                    <span className="label">Followers:</span>
                    <span className="value"> <span className="follower-icon"><BsPersonFill /></span> {followers}</span>
                </li>
                <li>
                    <span className="label">Views:</span>
                    <span className="value"> <FaRegEye /> {views}</span>
                </li>
                <li>
                    <span className="label">Likes:</span>
                    <span className="value"> <FcLike />︎ {likes}</span>
                </li>
            </ul>
        </div>
    )
}