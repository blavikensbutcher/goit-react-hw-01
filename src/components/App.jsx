import './App.css'
import { Profile } from "./Profile/Profile.jsx";
import userData from '../userData.json'
import friends from '../friends.json'
import {FriendList} from "./FriendsList/FriendList.jsx";


function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
        </>
    )
}

export default App
