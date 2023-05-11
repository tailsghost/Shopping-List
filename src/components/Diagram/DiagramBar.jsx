import style from './DiagramBar.module.css';

const DiagramBar = ({ value, max_value, label }) => {
  let barFillHeingt = '0%';

  if (max_value > 0) {
    barFillHeingt = Math.round((value / max_value) * 100) + '%';
  }
  return (
    <div className={style.diagram_bar}>
      <div className={style.diagram_bar_inner}>
        <div
          className={style.diagram_bar_fill}
          style={{ height: barFillHeingt }}
        ></div>
      </div>
      <div className={style.diagram_bar_label}>{label}</div>
    </div>
  );
};

export default DiagramBar;
