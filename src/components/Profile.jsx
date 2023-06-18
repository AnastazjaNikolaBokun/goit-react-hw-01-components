
import PropTypes from "prop-types";
import css from 'components/Profile.module.css';

const Profile = ({avatar, username, tag, location, stats}) => (
<div class={css.profile}>
  <div class={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      class={css.avatar}
    />
    <p class={css.name}>{username}</p>
    <p class={css.tag}>@{tag}</p>
    <p class={css.location}>{location}</p>
  </div>

  <ul class={css.stats}>
    <li>
      <span class={css.label}>Followers</span>
      <span class={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.number,
}

  export default Profile