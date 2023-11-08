import css from './FriendsList.module.css'

export const FriendList = ({ props }) => {
    return (
        <ul className={css.friendsList}>
            {props.map(el => 
                <li key={el.id} className={css.item}>
                    <span className={`${css.status} ${el.isOnline ? css.online : css.offline}`}></span>
                    <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{el.name }</p>
                </li>)}
        </ul>
    )
}