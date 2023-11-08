import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendsList/FriendsList";
import { Transactions } from "./Transactions/Transactions";



import userData from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

function App() {
 return (
    <div>
     <Profile props={userData} />
     <Statistics title="upload stats" stats={data} />
     <FriendList props={friends} />
     <Transactions items={transactions} />
    </div>)
}

export default App;
