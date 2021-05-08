import React from 'react';
import { Link } from 'react-router-dom';

function Register () {
  return (
    <section className="authentication">
      <form className="authentication__form">
        <h2 className="authentication__title">Регистрация</h2>
        <input name="email" type="email" placeholder="Email" className="authentication__input"/>
        <input name="password" type="password" placeholder="Пароль" className="authentication__input" />
        <button  type="submit" className="authentication__submit-button">Зарегистрироваться</button>
      </form>  
      <p className="authentication__subtitle">Уже зарегистрированы? <Link className="authentication__subtitle-link" to='/sign-in'>Войти</Link></p>
    </section>
  )
}

export default Register;