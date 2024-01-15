import './FriendList.css'
import { FriendListItem } from "../FriendListItem/FriendListItem.jsx";


export const FriendList = ( { friends } ) => {
    return (
        <ul className="friend-list">
            {
                friends.map(value => {
                return <li key={value.id}>
                    {
                        <FriendListItem
                            name={value.name}
                            avatar={value.avatar}
                            isOnline={value.isOnline} />  }
                </li>
            })
            }
    </ul>
    )
}