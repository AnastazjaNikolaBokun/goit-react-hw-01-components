import PropTypes from "prop-types";
import css from 'components/Statistics.module.css';


const Statistics = ({title, stats}) => {
    return (
<section class={css.statistics}>
  <h2 class={css.title}>{title}</h2>

  {stats.map(stat => (
  <ul class={css.statList}>
    <li class={css.item} key={stat.id}>
      <span class={css.label}>{stat.label}</span>
      <span class={css.percentage}>{stat.percentage}%</span>
    </li>
  </ul>
      ))}
</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.string,
}

export default Statistics