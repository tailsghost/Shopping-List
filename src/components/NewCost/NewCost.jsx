import CostForm from './CostForm';
import style from './NewCost.module.css';

const NewCost = (props) => {
  return (
    <div className={style.new_cost}>
      <CostForm {...props} />
    </div>
  );
};

export default NewCost;
