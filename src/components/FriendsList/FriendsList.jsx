import css from './FriendsList.module.css'
import { FriendItem } from './FriendItem/FriendItem'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendsList}>
            {friends.map(({id, name, avatar, isOnline}) => 
                <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />)}
        </ul>
    )
}