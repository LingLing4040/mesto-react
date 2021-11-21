import React from 'react';
import deletePath from '../images/Trash.svg';

function Card(props) {
    function handleClick() {
        props.onClick(props.card.name, props.card.link);
    }
    return (
        <div>
            <article className='card'>
                <img
                    className='card__photo'
                    alt={props.card.name}
                    src={props.card.link}
                    onClick={handleClick}
                />
                <div className='card__footer'>
                    <h2 className='card__title'>{props.card.name}</h2>
                    <div className='card__like-container'>
                        <button type='button' className='card__like'></button>
                        <p className='card__like-counter'>{props.card.likes.length}</p>
                    </div>
                </div>
                <button type='button' className='card__delete-button' onClick={props.onDeleteCard}>
                    <img src={deletePath} alt='Удалить' />
                </button>
            </article>
        </div>
    );
}

export default Card;
