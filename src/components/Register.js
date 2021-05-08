import React from 'react';

function Register () {
  return (
    <section className="authentication">
      <form className="authentication__form" noValidate>
        <h2 className="authentication__title">Регистрация</h2>
        <input name="email" placeholder="Email" className="authentication__input"/>
        <input name="password" placeholder="Пароль" className="authentication__input" />
        <button  type="submit" className="authentication__submit">Зарегистрироваться</button>
      </form>  
      <p>Уже зарегистрированы? Войти</p>
      
    </section>
  )

}

export default Register;