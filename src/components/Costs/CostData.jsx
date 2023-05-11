import styles from './CostData.module.css';
import { newFormatDate } from './Costs';

const CostData = ({ cost }) => {
  const data = newFormatDate(cost.date);
  const GET__MONTH = data.toLocaleString('ru-RU', { month: 'long' });
  const GET__DAY = data.toLocaleString('ru-RU', { day: '2-digit' });
  const GET__YEAR = data.getFullYear();
  return (
    <div className={styles.cost_data}>
      <div className={styles.cost_date__month}>{GET__MONTH}</div>
      <div className={styles.cost_date__day}>{GET__DAY}</div>
      <div>{GET__YEAR}</div>
    </div>
  );
};

export default CostData;
