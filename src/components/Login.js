import React from 'react';

function Login ({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(evt){
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onLogin({ email, password });
  }

  return (
    <section className="authentication">
      <form className="authentication__form">
        <h2 className="authentication__title">Вход</h2>
        <input value={email} onChange={handleChangeEmail} name="email" type="email" placeholder="Email" className="authentication__input"/>
        <input value={password} onChange={handleChangePassword} name="password" type="password" placeholder="Пароль" className="authentication__input" />
        <button  type="submit" onClick={handleLoginSubmit} className="authentication__submit-button">Войти</button>
      </form>  
    </section>
  )
}

export default Login;