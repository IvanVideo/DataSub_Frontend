import './Card.css';
import logo from '../../img/logo.png';
import { useEffect } from 'react';

function Card({ cardValues }) {

    return (
        <section className='card'>
            <img className='card1__logo' src={logo} />
            <div className='card__container first'>
                <label>Expiration Date</label>
                <label placeholder='Card Number' className='card__number'>{cardValues.number ? cardValues.number : '**** **** **** ****'}</label>
            </div>
            <div className='card__container'>
                <label className='card__expiration-date'>Expiration Date</label>
                <div className='card__box'>
                    <label placeholder='MM/YYYY' className='card__date' value={cardValues.date}>{cardValues.date ? cardValues.date : 'MM/YYYY'}</label>
                    <label placeholder='CVC' className='card__cvc' value={cardValues.CVV}>{cardValues.CVV ? cardValues.CVV : 'CVC'}</label>
                </div>
            </div>
        </section>
    );
}

export default Card;