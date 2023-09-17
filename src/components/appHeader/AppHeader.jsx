import './appHeader.scss'
import logo from '../../resources/img/logo.svg'

function AppHeader() {

  const createLinks = () => {
    const links = ['Пицца', 'Паста', 'Супы', 'Салаты','Напитки', 'Десерты', 'Бакалея', 'Антипасти', 'Акции', 'Комбо', 'Контакты']
    console.log('create!')

    return (
      links.map((link, i) => {
      return (
        <li className="header__item" key = {i}>
          <a className='header__link' href='#'>{link}</a>
        </li>
      )
    }))
  }

  return (
    <header className='header'>
      <div className="container">
        <div className='header__box'>
          <div className='wrapper header__wrapper'>
            <div className='wrapper header__inner'>
              <a href='#' className='logo'>
                <img className='logo__img' src={logo} alt="Логотип Fibo Pasta Bar" />
              </a>
              <div className="header__info">
                <div className='header__title-wrapper'>
                  <h1 className="header__title">
                    Доставка пасты
                  </h1>
                  <span className="header__city">
                    Москва
                  </span>
                </div>
                <div className="header__info-box">
                  <div className="wrapper header__food">
                    <span className='header__food-yandex'/>
                    <span className='header__food-txt'>Яндекс еда</span>
                    <span className='header__food-num'>4.8</span>
                    <span className="header__food-star"/>
                  </div>
                  <div className="wrapper header__food">
                    <span className='header__food-txt'>Время доставки</span>
                    <span className='header__food-num'>от 31 мин</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='wrapper'>
              <button className='call-btn header__call-btn'>Заказать звонок</button> 
              <a href='tel:+84993918449' className="phone header__phone">
                8 499 391-84-49
              </a>
            </div>
          </div>
          <div className="wrapper header__menu">
            <nav className='header__nav'>
              <ul className="wrapper header__list">
                {createLinks()}
              </ul>
            </nav>
            <div className='wrapper header__menu-inner'>
              <button className="header__login-btn">
                Войти
              </button>
              <button className="wrapper header__cart-btn">
                <span className="header__cart-txt">
                  Корзина
                </span>
                <span className="header__cart-count">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;