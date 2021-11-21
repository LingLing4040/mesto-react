import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
    const [isBigCardPopupOpen, setIsBigCardPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

    React.useEffect(() => {
        if (
            isProfilePopupOpened ||
            isAddPlacePopupOpen ||
            isEditAvatarPopupOpen ||
            isDeletePopupOpen === true
        ) {
            function handleEsc(event) {
                if (event.key === 'Escape') {
                    closeAllPopups();
                }
            }

            document.addEventListener('keydown', handleEsc);

            return () => {
                document.removeEventListener('keydown', handleEsc);
            };
        }
    }, [
        isProfilePopupOpened,
        isAddPlacePopupOpen,
        isEditAvatarPopupOpen,
        isDeletePopupOpen,
        isBigCardPopupOpen,
    ]);

    function closeAllPopups() {
        setIsProfilePopupOpened(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsDeletePopupOpen(false);
        setIsBigCardPopupOpen(false);
    }

    function handleEditProfileClick() {
        setIsProfilePopupOpened(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleDeleteButtonClick() {
        setIsDeletePopupOpen(true);
    }

    function handleCardClick(name, link) {
        setIsBigCardPopupOpen(true);
        setSelectedCard({ name, link });
    }

    function handlePopupClick(event) {
        if (event.target.classList.contains('popup')) {
            closeAllPopups();
        }
    }

    return (
        <div className='App'>
            <div className='page'>
                <div className='content'>
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onDeleteCard={handleDeleteButtonClick}
                        onCardClick={handleCardClick}
                    />
                    <Footer />
                    <PopupWithForm
                        title='Редактировать профиль'
                        name='profile'
                        onClose={closeAllPopups}
                        isOpened={isProfilePopupOpened}
                        buttonTitle='Сохранить'
                        onPopupClick={handlePopupClick}
                    >
                        <label className='popup__label'>
                            <input
                                id='profile-name-input'
                                name='name'
                                type='text'
                                placeholder='Имя профиля'
                                className='popup__input popup__input_type_name'
                                required
                                minLength='2'
                                maxLength='40'
                            />
                            <span className='popup__error profile-name-input-error'></span>
                        </label>
                        <label className='popup__label'>
                            <input
                                id='profile-occupation-input'
                                name='about'
                                type='text'
                                placeholder='Род деятельности'
                                className='popup__input popup__input_type_occupation'
                                required
                                minLength='2'
                                maxLength='200'
                            />
                            <span className='popup__error profile-occupation-input-error'></span>
                        </label>
                    </PopupWithForm>
                    <PopupWithForm
                        title='Новое место'
                        name='cards'
                        onClose={closeAllPopups}
                        isOpened={isAddPlacePopupOpen}
                        buttonTitle='Создать'
                        onPopupClick={handlePopupClick}
                    >
                        <label className='popup__label'>
                            <input
                                name='name'
                                id='card-name-input'
                                type='text'
                                placeholder='Название'
                                className='popup__input popup__input_type_card-name'
                                minLength='2'
                                maxLength='30'
                                required
                            />
                            <span className='popup__error card-name-input-error'></span>
                        </label>
                        <label className='popup__label'>
                            <input
                                name='link'
                                id='card-link-input'
                                type='url'
                                placeholder='Ссылка на картинку'
                                className='popup__input popup__input_type_card-link'
                                required
                            />
                            <span className='popup__error card-link-input-error'></span>
                        </label>
                    </PopupWithForm>
                    <PopupWithForm
                        title='Обновить аватар'
                        name='avatar'
                        onClose={closeAllPopups}
                        isOpened={isEditAvatarPopupOpen}
                        buttonTitle='Сохранить'
                        onPopupClick={handlePopupClick}
                    >
                        <label className='popup__label'>
                            <input
                                name='avatar'
                                id='avatar-link-input'
                                type='url'
                                placeholder='Ссылка на картинку'
                                className='popup__input popup__input_type_avatar-link'
                                required
                            />
                            <span className='popup__error avatar-link-input-error'></span>
                        </label>
                    </PopupWithForm>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                        isOpened={isBigCardPopupOpen}
                        onPopupClick={handlePopupClick}
                    />
                    <PopupWithForm
                        title='Вы уверены?'
                        name='delete'
                        onClose={closeAllPopups}
                        isOpened={isDeletePopupOpen}
                        buttonTitle='Да'
                        onPopupClick={handlePopupClick}
                    ></PopupWithForm>
                </div>
            </div>
        </div>
    );
}

export default App;
