import {Switch, Route, Link} from "react-router-dom";
function Header() {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <div className="header__logo"></div>
          <div className="header__authentication">
            <span className="header__email">email</span>
            <Link to="/sign-in" className="header__authentication-link">Выйти</Link>  
          </div>
        </header>    
      </Route>
      <Route path="/sign-up">
        <header className="header">
          <div className="header__logo"></div>
          <div className="header__authentication">
            <Link to="/sign-in" className="header__authentication-link">Войти</Link>
          </div>
        </header>    
      </Route>
      <Route path="/sign-in">
        <header className="header">
          <div className="header__logo"></div>
          <div className="header__authentication">
            <Link to="/sign-up" className="header__authentication-link">Регистрация</Link>  
          </div>
        </header>    
      </Route>
    </Switch>
  )
}

export default Header;