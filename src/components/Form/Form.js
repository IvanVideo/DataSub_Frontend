import './Form.css';
import React, { useEffect, useCallback } from 'react';

function Form({ getCardValues, createCard }) {
    const [values, setValues] = React.useState({}); // значения инпутов формы
    const [errors, setErrors] = React.useState({}); // значения ошибок инпутов формы
    const [isValid, setIsValid] = React.useState(false); // значение валидации формы

    // сбор значений инпутов формы
    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value.replace(/\D/g, '') });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    // сабмитим форму
    const handleSubmitFrom = (e) => {
        e.preventDefault();
        createCard(values)
    }

    useEffect(() => {
        getCardValues(values)
    }, [values])

    return (
        <form className='form' onSubmit={handleSubmitFrom}>
            <h2 className='form__title'>Заполните форму</h2>
            <div className='form__box'>
                <label className='form__label'>Card Number</label>
                <input
                    name='number'
                    className='form__input form__input-big'
                    minLength={16}
                    maxLength={16}
                    value={values.number}
                    onChange={handleChange}
                    required />
                <span className='form__error'>{errors.number}</span>
            </div>
            <div className='form__box'>
                <label className='form__label'>Expiration Date</label>
                <div className='form__date'>
                    <input
                        name='date'
                        placeholder='MM/YYYY'
                        className='form__input form__input-medium input__date'
                        minLength={7}
                        maxLength={7}
                        value={values.date}
                        onChange={handleChange}
                        required />
                    <span className='form__error'>{errors.date}</span>

                </div>
            </div>
            <div className='form__box'>
                <label className='form__label'>CVV</label>
                <input
                    name='CVV'
                    className='form__input form__input-small'
                    minLength={3}
                    maxLength={3}
                    value={values.CVV}
                    onChange={handleChange}
                    required />
                <span className='form__error'>{errors.CVV}</span>

            </div>
            <div className='form__box'>
                <label className='form__label'>Amount</label>
                <input
                    name='amount'
                    className='form__input form__input-medium'
                    value={values.amount}
                    onChange={handleChange}
                    required />
                <span className='form__error'>{errors.amount}</span>

            </div>
            <button
                disabled={!isValid}
                className={isValid ? 'form__button' : 'form__button_disable'}>
                Отправить
            </button>
        </form>
    );
}

export default Form;