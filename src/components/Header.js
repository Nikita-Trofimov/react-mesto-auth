import {Switch, Route, Link} from "react-router-dom";
function Header({userEmail}) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <div className="header__logo"></div>
          <nav className="header__authentication">
            <span className="header__email">{userEmail}</span>
            <Link to="/sign-in" className="header__authentication-link">Выйти</Link>  
          </nav>
        </header>    
      </Route>
      <Route path="/sign-up">
        <header className="header">
          <div className="header__logo"></div>
          <nav className="header__authentication">
            <Link to="/sign-in" className="header__authentication-link">Войти</Link>
          </nav>
        </header>    
      </Route>
      <Route path="/sign-in">
        <header className="header">
          <div className="header__logo"></div>
          <nav className="header__authentication">
            <Link to="/sign-up" className="header__authentication-link">Регистрация</Link>  
          </nav>
        </header>    
      </Route>
    </Switch>
  )
}

export default Header;