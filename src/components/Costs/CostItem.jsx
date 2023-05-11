import CostData from './CostData';
import Card from '../UI/Card';
import style from './CostItem.module.css';

const CostItem = ({ cost }) => {
  return (
    <Card className={style.cost_item}>
      <CostData cost={cost} />
      <div className={style.cost_item__description}>
        <h2>{cost.text}</h2>
        <h3 className={style.cost_item__price}>${cost.sum}</h3>
      </div>
    </Card>
  );
};
export default CostItem;
