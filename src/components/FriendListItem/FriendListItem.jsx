import './FriendListItem.css'
import clsx from "clsx";




export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <div className="item">
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
            <p className={clsx("status", {
                'is-online': isOnline,
                'is-offline': !isOnline,
            })}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}