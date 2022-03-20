import './App.css';
import Card from '../Card/Card';
import Form from '../Form/Form';
import React, { useEffect } from 'react';

function App() {
  const [cardValues, setCardValues] = React.useState([]);

  const getCardValues = (data) => {
    setCardValues(data)
  }

  // useEffect(() => {
  //   console.log(cardValues, '000')
  // }, [cardValues])
  return (
    <div className='app'>
      <h1 className='app__title'>Пожертвование в фонд морских черепах</h1>
      <div className='app__container'>
        <Form getCardValues={getCardValues} />
        <Card cardValues={cardValues} />
      </div>
      <button className='app__button'>Отправить</button>
    </div>
  );
}

export default App;
