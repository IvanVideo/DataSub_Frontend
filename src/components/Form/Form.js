import './Form.css';
import React, { useEffect } from 'react';

function Form({ getCardValues }) {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    useEffect(() => {
        getCardValues(values)
    }, [values])

    return (
        <form className='form'>
            <h2 className='form__title'>Заполните форму</h2>
            <div className='form__box'>
                <label className='form__label'>Card Number</label>
                <input
                    name='number'
                    className='form__input'
                    onChange={handleChange} />
            </div>
            <div className='form__box'>
                <label className='form__label'>Expiration Date</label>
                <div className='form__date'>
                    <input
                        name='date'
                        placeholder='MM/YY'
                        className='form__input-medium'
                        onChange={handleChange} />
                </div>
            </div>
            <div className='form__box'>
                <label className='form__label'>CVV</label>
                <input
                    name='CVV'
                    className='form__input-small'
                    onChange={handleChange} />
            </div>
            <div className='form__box'>
                <label className='form__label'>Amount</label>
                <input
                    name='amount'
                    className='form__input-medium'
                    onChange={handleChange} />
            </div>
        </form>
    );
}

export default Form;