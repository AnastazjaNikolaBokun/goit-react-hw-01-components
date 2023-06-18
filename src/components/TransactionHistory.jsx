import PropTypes from "prop-types";
import css from 'components/TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table class={css.table}>
        <thead class={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody class={css.tbody}>
  {items.map(item => (
        <tr key={item.id}>
          <th>{item.type}</th>
          <th>{item.amount}</th>
          <th>{item.currency}</th>
        </tr>
      ))}
      </tbody>
      </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };


export default TransactionHistory