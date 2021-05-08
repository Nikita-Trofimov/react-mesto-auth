import React from 'react';

function Login () {
  return (
    <section className="authentication">
      <form className="authentication__form">
        <h2 className="authentication__title">Вход</h2>
        <input name="email" type="email" placeholder="Email" className="authentication__input"/>
        <input name="password" type="password" placeholder="Пароль" className="authentication__input" />
        <button  type="submit" className="authentication__submit-button">Войти</button>
      </form>  
    </section>
  )
}

export default Login;