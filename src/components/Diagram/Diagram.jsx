import DiagramBar from './DiagramBar';
import style from './Diagram.module.css';

const Diagram = ({ dataSets }) => {
  const dataSetsValue = dataSets.map((data) => data.value);
  const maxMonthCosts = Math.max(...dataSetsValue);

  return (
    <div className={style.diagram}>
      {dataSets.map((dataSet, index) => (
        <DiagramBar
          value={dataSet.value}
          max_value={maxMonthCosts}
          label={dataSet.label}
          key={index}
        />
      ))}
    </div>
  );
};

export default Diagram;
