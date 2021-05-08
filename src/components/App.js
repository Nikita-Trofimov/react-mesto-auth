import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  // Добавить loggedIn
  
  const [isEditProfilePopupOpen, setEditProfilePopupOpenActive] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpenActive] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpenActive] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
          
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(err => console.log('Ошибка ' + err));
  } 

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    }).catch(err => console.log('Ошибка ' + err));;
  }

  React.useEffect(() => {
    api.getInitialCards()
    .then((cards) => {
      setCards(cards);
    })
    .catch(err => console.log('Ошибка ' + err));
  }, []);

  React.useEffect(() => {
    api.getProfile()
    .then((profile) => {
      setCurrentUser(profile);
    })
    .catch(err => console.log('Ошибка ' + err));
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpenActive(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpenActive(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpenActive(true);
  }
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpenActive(false);
    setAddPlacePopupOpenActive(false);
    setEditProfilePopupOpenActive(false);
    setSelectedCard(null);
  }
  function handleUpdateUser({ name, about }) {
    api.updateProfile(name, about).then((profile) => {
      setCurrentUser(profile);
      closeAllPopups();
    })
    .catch(err => console.log('Ошибка ' + err));
  }

  function handleUpdateAvatar(avatar) {
    api.udpateAvatar(avatar).then((profile) => {
      setCurrentUser(profile);
      closeAllPopups();
    })
    .catch(err => console.log('Ошибка ' + err));
  }

  function handleAddPlaceSubmit({name, link}) {
    api.addCard(name, link).then((card) => {
      setCards([card, ...cards])
      closeAllPopups();
    })
    .catch(err => console.log('Ошибка ' + err));
    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
        <Header />
          <Switch>
            <Route exact path="/">
            <Main onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete} />
            <Footer />
            </Route>
            <Route path="/sign-up">
              <Register />
            </Route>
            <Route path="/sign-in">
              <Login />
            </Route>
          </Switch>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
