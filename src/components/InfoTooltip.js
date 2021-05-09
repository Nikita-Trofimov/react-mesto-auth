import registration_ok from '../images/registration_ok.svg'
import registration_err from '../images/registration_err.svg'
function InfoTooltip({isOpen, onClose, isRegistration}) {
  return (
    <section className={`popup popup-illustration-container ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img className="info-tooltip__img" alt="Ошибка" src={isRegistration ? registration_ok : registration_err}/>
        <p className="info-tooltip__text">{isRegistration ? "Вы успешно зарегистрировались!" : "Что-то пошло не так!Попробуйте ещё раз."}</p>
        <button type="button" className="popup__close-button" onClick={onClose}></button>    
      </div>
    </section>
  )
}

export default InfoTooltip