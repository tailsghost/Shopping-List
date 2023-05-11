import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CostItem from './CostItem';
import Card from '../UI/Card';
import CostsDiagram from './CostsDiagram';
import style from './Costs.module.css';
import NewCost from '../NewCost/NewCost';
import FilterCosts from './FilterCosts';

export const newFormatDate = (date) => {
  const dateString = date;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  });
  return new Date(formattedDate);
};

const Costs = () => {
  const local = localStorage.getItem('data');
  const [selectData, setSelectData] = useState('2023');
  const [newCosts, setNewCosts] = useState(false);
  if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify([]));
  }

  const addDataBaseHandler = (text, sum, date) => {
    const oldItems = JSON.parse(localStorage.getItem('data')) || [];
    oldItems.push({
      text,
      sum,
      date,
      id: uuidv4(),
    });
    localStorage.setItem('data', JSON.stringify(oldItems));
  };

  const ChangeDataHandler = (data) => {
    setSelectData(data);
  };

  const filterDataBaseHandler = () => {
    const res = JSON.parse(local).filter((item) => {
      const data = newFormatDate(item.date);
      return data.getFullYear().toString() === selectData;
    });
    return res;
  };

  useEffect(() => {
    filterDataBaseHandler();
  }, [newCosts]);

  return (
    <>
      <NewCost addDataBase={addDataBaseHandler} setNewCosts={setNewCosts} />
      {local.length > 0 && (
        <>
          <Card className={style.costs} data={local}>
            <FilterCosts
              selectData={selectData}
              ChangeData={ChangeDataHandler}
            />
            <CostsDiagram diagramCosts={filterDataBaseHandler()} />
            {filterDataBaseHandler().length === 0 && (
              <div className={style.font}>В этом году нет расходов</div>
            )}
            {filterDataBaseHandler().map((cost, index) => (
              <CostItem cost={cost} key={index} />
            ))}
          </Card>
        </>
      )}
    </>
  );
};

export default Costs;
