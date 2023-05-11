import style from './Fill.module.css';

const Fill = ({ fill }) => {
  return (
    <div className={style.fill}>
      <div className={style.wrap}>
        <h3>Заполните все поля</h3>
        <span onClick={() => fill('off')}>Х</span>
      </div>
    </div>
  );
};

export default Fill;
