import style from './FilterCosts.module.css';

const FilterCosts = ({ selectData, ChangeData, filterDataBase }) => {
  const baseData = [2023, 2022, 2021, 2020, 2019];

  return (
    <div className={style.costs_filter}>
      <div className={style.costs_filter_control}>
        <label>Фильтр по году</label>
        <select
          value={selectData}
          onChange={(data) => {
            ChangeData(data.target.value);
          }}
        >
          {baseData.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterCosts;
