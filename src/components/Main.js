import React from 'react';
import editPath from '../images/edit-button.svg';
import addPath from '../images/add.svg';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onDeleteCard, onCardClick }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        api.getInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main>
            <section className='profile'>
                <div
                    className='profile__avatar'
                    onClick={onEditAvatar}
                    style={{ backgroundImage: `url(${userAvatar})` }}
                ></div>
                <div className='profile__info'>
                    <h1 className='profile__name'>{userName}</h1>
                    <button
                        type='button'
                        className='profile__button profile__button_type_edit'
                        onClick={onEditProfile}
                    >
                        <img className='profile__edit-icon' src={editPath} alt='Редактировать' />
                    </button>
                    <p className='profile__occupation'>{userDescription}</p>
                </div>
                <button
                    type='button'
                    className='profile__button profile__button_type_add'
                    onClick={onAddPlace}
                >
                    <img className='profile__add-icon' src={addPath} alt='Добавить' />
                </button>
            </section>
            <section className='cards'>
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onDeleteCard={onDeleteCard}
                        onClick={onCardClick}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;
