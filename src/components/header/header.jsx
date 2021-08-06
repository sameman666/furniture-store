import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__login"><a href="#">Войти &gt;</a></div>
        <div className="header__board">
          <a href="#"><img src="./images/logo_dark.svg" alt="Keller Home" /></a>
          <button className="header__board-button" type="button">Каталог</button>
          <form className="header__board-form">
            <label htmlFor="search" className="visually-hidden">Поиск по каталогу</label>
            <input type="text" className="header__board-input" id="search" list="search_dropdown" placeholder="Поиск по каталогу" />
            <datalist id="search_dropdown">
              <option value="Диваны" />
              <option value="Кресла" />
              <option value="Кровати" />
              <option value="Пуфы" />
              <option value="Столы" />
            </datalist>
            <input type="submit" className="header__board-submit-button" value="" />
          </form>
          <a href="#" className="header__board-link header__board-link--favorites">Избранное</a>
          <a href="#" className="header__board-link header__board-link--cart">Корзина</a>
        </div>
        <nav className="header__navigation">
          <ul className="header__main-navigation">
            <li className="header__main-navigation-item"><a href="#">Диваны</a></li>
            <li className="header__main-navigation-item"><a href="#">Кресла</a></li>
            <li className="header__main-navigation-item"><a href="#">Кровати</a></li>
            <li className="header__main-navigation-item"><a href="#">Матрасы</a></li>
            <li className="header__main-navigation-item"><a href="#">Шкафы</a></li>
            <li className="header__main-navigation-item"><a href="#">Стеллажи</a></li>
            <li className="header__main-navigation-item"><a href="#">Столы</a></li>
            <li className="header__main-navigation-item"><a href="#">Стулья</a></li>
            <li className="header__main-navigation-item"><a href="#">Кухонная мебель</a></li>
          </ul>
          <ul className="header__sub-navigation">
            <li className="header__sub-navigation-item"><a href="#">Комнаты</a></li>
            <li className="header__sub-navigation-item"><a href="#">Блог</a></li>
            <li className="header__sub-navigation-item"><a href="#">Доставка</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
