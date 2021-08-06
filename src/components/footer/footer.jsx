import React from 'react';

const Header = () => {
  return (
    <footer className="footer">
      <div className="footer__content"></div>
      <div className="footer__related-products">
        <div className="footer__content">
          <h2>Сопутствуюшие товары</h2>
          <ul className="footer__related-products-list">
            <li className="footer__related-products-item footer__related-products-item--poufs">
              <a href="#">
                <h3>Пуфы для ног</h3>
                <p>15 вариантов</p>
              </a>
            </li>
            <li className="footer__related-products-item footer__related-products-item--tables">
              <a href="#">
                <h3>Столы для ноутбуков</h3>
                <p>5 вариантов</p>
              </a>
            </li>
            <li className="footer__related-products-item footer__related-products-item--toppers">
              <a href="#">
                <h3>Матрасы для диванов (топперы)</h3>
                <p>125 вариантов</p>
              </a>
            </li>
            <li className="footer__related-products-item footer__related-products-item--chairs">
              <a href="#">
                <h3>Кресла</h3>
                <p>15 вариантов</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__info">
        <div className="footer__content">
          <div className="footer__contacts">
            <img className="footer__logo" src="./images/logo_white.svg" alt="Keller Home" />
            <h3>Магазин домашней и офисной мебели в Петрозаводске</h3>
            <h4>По всем вопросам</h4>
            <a className="footer__tel" href="tel:+79673434545">+7 967 343-45-45</a>
            <h4>По всем вопросам</h4>
            <div className="footer__links">
              <a href="#" className="footer__link footer__link--vk"></a>
              <a href="#" className="footer__link footer__link--instagramm"></a>
              <a href="mailto:someone@yoursite.com" className="footer__link">Напишите нам</a>
            </div>
          </div>
          <div className="footer__menu">
            <ul className="footer__about">
              <li className="footer__about-item"><h2>Информация</h2></li>
              <li className="footer__about-item"><a href="#">О компании</a></li>
              <li className="footer__about-item"><a href="#">Адреса магазинов</a></li>
              <li className="footer__about-item"><a href="#">Оптовикам</a></li>
              <li className="footer__about-item"><a href="#">Покупателям</a></li>
              <li className="footer__about-item"><a href="#">Доставка</a></li>
            </ul>
            <ul className="footer__rooms">
              <li className="footer__rooms-item"><h2>Комнаты</h2></li>
              <li className="footer__rooms-item"><a href="#">Прихожая</a></li>
              <li className="footer__rooms-item"><a href="#">Кухня</a></li>
              <li className="footer__rooms-item"><a href="#">Спальня</a></li>
              <li className="footer__rooms-item"><a href="#">Гостинная</a></li>
              <li className="footer__rooms-item"><a href="#">Ванная</a></li>
              <li className="footer__rooms-item"><a href="#">Детская</a></li>
            </ul>
            <ul className="footer__catalog">
              <li className="footer__catalog-item"><h2>Каталог</h2></li>
              <li className="footer__catalog-item"><a href="#">Вся мебель</a></li>
              <li className="footer__catalog-item"><a href="#">Диваны и кресла</a></li>
              <li className="footer__catalog-item"><a href="#">Столы и стулья</a></li>
              <li className="footer__catalog-item"><a href="#">Кухонная мебель</a></li>
              <li className="footer__catalog-item"><a href="#">Мебель для ванной</a></li>
              <li className="footer__catalog-item"><a href="#">Тумбы и комоды</a></li>
              <li className="footer__catalog-item"><a href="#">Кровати и матрасы</a></li>
              <li className="footer__catalog-item"><a href="#">Шкафа и стеллажи</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__credits">
        <div className="footer__content">
          <p>© Keller Home, 2020–2021</p>
          <a className="footer__credits-link" href="#">Пользовательское соглашение</a>
          <a className="footer__credits-link" href="#">Публичная оферта</a>
          <a className="footer__credits-logo-link" href="#">
            <img className="footer__studio-logo" src="./images/mkomov_studio_logo.svg" alt="Mkomov studio" width="92" height="54" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Header;
