import './App.css'
import { Profile } from "./Profile/Profile.jsx";
import userData from '../userData.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { FriendList } from "./FriendsList/FriendList.jsx";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory.jsx";


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
            <TransactionHistory item={transactions} />
        </>
    )
}

export default App
