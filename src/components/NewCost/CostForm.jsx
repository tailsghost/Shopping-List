import { useState } from 'react';
import style from './CostForm.module.css';

const CostForm = ({ addDataBase, setNewCosts }) => {
  const [text, setText] = useState('');
  const [sum, setSum] = useState('');
  const [date, setDate] = useState('');
  const [dataLocal, setDataLocal] = useState(date);
  const [textDirty, setTextDirty] = useState(false);
  const [sumDirty, setSumDirty] = useState(false);
  const [dataDirty, setDataDirty] = useState(false);
  const [textError, setTextError] = useState('');
  const [sumError, setSumError] = useState('');
  const [dataError, setDataError] = useState('');
  const [submitForm, setSubmitForm] = useState(false);

  const textValid = /^[А-Яа-яЁёs\s]+$/iu;
  const dataValid = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

  const funTextHandler = (text) => {
    setText(text);
  };

  const funSumHandler = (sum) => {
    setSum(sum);
  };

  const funDateHandler = (date) => {
    setDate(date);
    setDataLocal(
      date.getFullYear() +
        '-' +
        date.toLocaleString('ru-RU', { month: '2-digit' }) +
        '-' +
        date.toLocaleString('ru-RU', { day: '2-digit' })
    );
  };

  const CancellHandler = (e) => {
    e.preventDefault();

    setText('');
    setSum('');
    setDate('');
    setDataLocal('');
    setSubmitForm(false);
    setSumDirty(false);
    setDataDirty(false);
    setTextError('');
    setSumError('');
    setDataError('');
    setSubmitForm(false);
  };

  const pushForm = () => {
    addDataBase(text, sum, date);
    setText('');
    setSum('');
    setDate('');
    setDataLocal('');
  };

  const sumbmitformValid = (e) => {
    e.preventDefault();
    if (
      textValid.test(String(text).toLowerCase()) &&
      dataValid.test(String(dataLocal).toLowerCase()) &&
      sum &&
      !textDirty &&
      !sumDirty &&
      !dataDirty
    ) {
      setSubmitForm(true);
      pushForm();
      setNewCosts(true);
    } else {
      setSubmitForm(false);
      blurHandler(e.target[0]);
      blurHandler(e.target[1]);
      blurHandler(e.target[2]);
    }
  };

  const textErrorHandler = (type, text) => {
    if (!type) {
      setTextDirty(type);
      setTextError(text);
    } else {
      setTextDirty(type);
      setTextError(text);
    }
  };

  const sumErrorHandler = (type, text) => {
    if (!type) {
      setSumDirty(type);
      setSumError(text);
    } else {
      setSumDirty(type);
      setSumError(text);
    }
  };

  const dataErrorHandler = (type, text) => {
    if (!type) {
      setDataDirty(type);
      setDataError(text);
    } else {
      setDataDirty(type);
      setDataError(text);
    }
  };

  const blurHandler = (e) => {
    switch (e.type) {
      case 'text':
        if (text === '') {
          textErrorHandler(true, 'Поле не может быть пустым');
        } else if (text.length < 4) {
          textErrorHandler(true, 'Больше 4 символов');
        } else if (!textValid.test(String(text).toLowerCase())) {
          textErrorHandler(true, 'Только русские буквы');
        } else if (text.length > 15) {
          textErrorHandler(true, 'Не больше 15 символов');
        } else {
          textErrorHandler(false, '');
        }
        break;
      case 'number':
        if (sum === '') {
          sumErrorHandler(true, 'Поле не может быть пустым');
        } else if (sum > 1000000) {
          sumErrorHandler(true, 'Не больше $1000000');
        } else {
          sumErrorHandler(false, '');
        }
        break;
      case 'date':
        if (dataLocal === '') {
          dataErrorHandler(true, 'Дата не может быть пустой');
        } else if (!dataValid.test(String(dataLocal).toLowerCase())) {
          dataErrorHandler(true, 'Заполните дату правильно');
        } else {
          dataErrorHandler(false, '');
        }
        break;
    }
  };
  return (
    <form className={style.form} onSubmit={(e) => sumbmitformValid(e)}>
      <div className={style.new_cost_controls}>
        <div className={style.new_cost_control}>
          {textDirty && textError ? (
            <label style={{ color: 'red' }}>{textError}</label>
          ) : (
            <label>Название</label>
          )}
          <input
            type="text"
            value={text}
            onChange={(text) => funTextHandler(text.target.value)}
            onBlur={(e) => blurHandler(e.target)}
          />
        </div>
        <div className={style.new_cost_control}>
          {sumDirty && sumError ? (
            <label style={{ color: 'red' }}>{sumError}</label>
          ) : (
            <label>Сумма</label>
          )}

          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(sum) => funSumHandler(sum.target.value)}
            value={sum}
            onBlur={(e) => blurHandler(e.target)}
          />
        </div>
        <div className={style.new_cost_control}>
          {dataDirty && dataError ? (
            <label style={{ color: 'red' }}>{dataError}</label>
          ) : (
            <label>Дата</label>
          )}
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={(e) => funDateHandler(new Date(e.target.value))}
            value={dataLocal}
            onBlur={(e) => blurHandler(e.target)}
          />
        </div>
        <div className={style.new_cost_actions}>
          <button type="submit">Добавить расход</button>
          {text || sum || date ? (
            <button onClick={(e) => CancellHandler(e)}>Отмена</button>
          ) : (
            ''
          )}
        </div>
      </div>
    </form>
  );
};

export default CostForm;
