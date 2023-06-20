import PropTypes from "prop-types";
import css from 'components/Friendlist/Friendlist.module.css';

const FriendList = ({friends}) => {
    return (
        <ul class={css.friendList}>
        {friends.map(friend => (
<li class={css.item} key={friend.id}>
  <span 
          className={friend.isOnline ? css.status1 : css.status2}
    >
  <img class={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p class={css.name}>{friend.name}</p>
  </span>
</li>
))}
</ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default FriendList