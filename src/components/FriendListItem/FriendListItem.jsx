import './FriendListItem.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <div className="item">
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
            <p className={isOnline ? "status is-online" : "status is-offline"}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}