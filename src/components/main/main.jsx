import React, {useState} from 'react';

const Main = () => {

  const Filters = {
    SIZE: `size`,
    TRANSFORM_MECHANISM: `transform mechanism`,
    FILLING: `filling`,
    EDGING_COLOR: `edging color`,
    BOX: `box`,
    COVER: `cover`,
    WEIGHT: `weight`,
    PACKAGE: `package`,
  };

  const initialState = {
    isModalOpen: false,
    isSizeFilterOpen: false,
    isTransformMechanismFilterOpen: false,
    isFillingFilterOpen: false,
    isEdgingColorFilterOpen: false,
    isBoxFilterOpen: false,
    isCoverFilterOpen: false,
    isWeightFilterOpen: false,
    isPackageFilterOpen: false
  };

  const [state, setState] = useState(initialState);

  const openModalHandler = () => {
    document.body.classList.toggle(`body__overflow`);
    setState({
      ...state,
      isModalOpen: !state.isModalOpen
    });
  };

  const openFilterHadler = (evt) => {
    const filter = evt.target.dataset.filter;
    switch (filter) {
      case Filters.SIZE:
        setState({
          ...state,
          isSizeFilterOpen: !state.isSizeFilterOpen
        });
        break;
      case Filters.TRANSFORM_MECHANISM:
        setState({
          ...state,
          isTransformMechanismFilterOpen: !state.isTransformMechanismFilterOpen
        });
        break;
      case Filters.FILLING:
        setState({
          ...state,
          isFillingFilterOpen: !state.isFillingFilterOpen
        });
        break;
      case Filters.EDGING_COLOR:
        setState({
          ...state,
          isEdgingColorFilterOpen: !state.isEdgingColorFilterOpen
        });
        break;
      case Filters.BOX:
        setState({
          ...state,
          isBoxFilterOpen: !state.isBoxFilterOpen
        });
        break;
      case Filters.COVER:
        setState({
          ...state,
          isCoverFilterOpen: !state.isCoverFilterOpen
        });
        break;
      case Filters.WEIGHT:
        setState({
          ...state,
          isWeightFilterOpen: !state.isWeightFilterOpen
        });
        break;
      case Filters.PACKAGE:
        setState({
          ...state,
          isPackageFilterOpen: !state.isPackageFilterOpen
        });
        break;
      default:
        return;
    }
  };

  return (
    <main className="main">
      <div className="main__content">
        <section className="main__bread-crumbs">
          <h2 className="visually-hidden">Bread Crumbs</h2>
          <p className="main__bread-crumbs-text">
            <a href="#">Главная</a> / <a href="#">Каталог</a> / <a href="#">Диваны</a>
          </p>
        </section>
        <section className="main__info">
          <h1 className="main__title">Каталог диванов</h1>
          <p className="main__description">В данном разделе вы найдете свой идеальный диван. Кожаный или текстильный, бюджетный или подороже, – в любом случае вы получите изделие высокого фабричного качества.</p>
        </section>
        <section className="main__sections">
          <ul className="main__sections-list">
            <li className="main__sections-list-item">
              <a href="">
                <img src="./images/all_sofas.jpg" alt="Все диваны" />
                <h2>Все диваны</h2>
              </a>
            </li>
            <li className="main__sections-list-item">
              <a href="">
                <img src="./images/sofa_beds.jpg" alt="Диваны-кровати" />
                <h2>Диваны-кровати</h2>
              </a>
            </li>
            <li className="main__sections-list-item">
              <a href="">
                <img src="./images/angle_leather_sofas.jpg" alt="Угловые кожанные диваны" />
                <h2>Угловые кожанные диваны</h2>
              </a>
            </li>
            <li className="main__sections-list-item">
              <a href="">
                <img src="./images/angle_fabric_sofas.jpg" alt="Угловые тканевые диваны" />
                <h2>Угловые тканевые диваны</h2>
              </a>
            </li>
            <li className="main__sections-list-item">
              <a href="">
                <img src="./images/straight_leather_sofas.jpg" alt="Прямые кожаные диваны" />
                <h2>Прямые кожаные диваны</h2>
              </a>
            </li>
            <li className="main__sections-list-item">
              <a href="">
                <img src="./images/straight_fabric_sofas.jpg" alt="Прямые тканевые диваны" />
                <h2>Прямые тканевые диваны</h2>
              </a>
            </li>
          </ul>
        </section>
        <section className="main__filters">
          <h2 className="visually-hidden">Фильтры</h2>
          <div className="main__available-filters">
            <div className="main__popular-filters">
              <button type="button">Размер</button>
              <button type="button">Спальное место</button>
              <button type="button">Механизмы</button>
              <button type="button">Цвет</button>
              <button type="button">Обивка</button>
            </div>
            <button className="main__popular-filters-all-button" type="button" onClick={openModalHandler}>Все фильтры</button>
          </div>
          <div className="main__actual-filters">
            <ul className="main__actual-filters-list">
              <li className="main__actual-filters-list-item">
                <p>Ширина: 80-440</p>
                <button type="button"></button>
              </li>
              <li className="main__actual-filters-list-item">
                <p>Высота: 52-156</p>
                <button type="button"></button>
              </li>
              <li className="main__actual-filters-list-item">
                <p>Механизм: Выкатной</p>
                <button type="button"></button>
              </li>
              <li className="main__actual-filters-list-item">
                <p>Тип: Еврокнижка</p>
                <button type="button"></button>
              </li>
            </ul>
            <button type="reset">Сбросить фильтры</button>
            <select>
              <option value="Сначала дешевле">Сначала дешевле</option>
              <option value="Сначала дороже">Сначала дороже</option>
            </select>
          </div>
        </section>
        <section className="main__result">
          <ul className="main__result-list">
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_1.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_2.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_3.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_4.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_5.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_6.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_1.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_2.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_3.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_4.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_5.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
            <li className="main__result-list-item">
              <a href="#">
                <img className="main__result-list-item-image" src="./images/klingsbo_6.jpg" alt="Klingsbo" />
                <h3 className="main__result-list-item-title">Klingsbo Клингсбу</h3>
                <p className="main__result-list-item-description">Угловой диван 2560 x 1620 x h980 см, спальное место 2130 x 1580 см, ящик для хранения</p>
                <p className="main__result-list-item-price">1 499 ₽</p>
              </a>
            </li>
          </ul>
        </section>
        <nav className="main__pagination">
          <a className="main__pagination-link main__pagination-link--active" href="#">1</a>
          <a className="main__pagination-link" href="#">2</a>
          <a className="main__pagination-link" href="#">3</a>
          <a className="main__pagination-link main__pagination-link--dots" href="#">...</a>
          <a className="main__pagination-link" href="#">8</a>
        </nav>
        <section className="main__advantages">
          <h2 className="visually-hidden">Советы</h2>
          <p>
            Многие модели в различных цветах и из разных материалов есть в наличии в нашем магазине. Чтобы вам было проще выбрать, мы прописали максимальные характеристики изделий: вид ткани, конфигурацию, состав наполнителя, размер, бренд.
          </p>
          <p>
            Выбирайте диван подходящего вам цвета, материала, формы и стиля и заказывайте онлайн или в магазине. Многие модели можно изготовить в индивидуальной расцветке или обивке. Напишите нам, расскажем подробности.
          </p>
        </section>
        <div className={`main__form-overlay ${state.isModalOpen === true ? `` : `main__form-overlay--hidden`}`}>
          <form className="main__filters-modal">
            <div className="main__filters-modal-head">
              <h2 className="main__filters-modal-title">Фильтры</h2>
              <button type="button" onClick={openModalHandler}></button>
            </div>
            <ul className="main__filters-modal-list">
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isSizeFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Размеры дивана</h3>
                  <button type="button" data-filter={Filters.SIZE} onClick={openFilterHadler}></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isSizeFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <h4>Ширина</h4>
                    <div className="main__filters-modal-list-item-body-settings-inputs">
                      <label htmlFor="min-width">от</label>
                      <input type="number" id="min-width" defaultValue="80" />
                      <input type="number" id="max-width" defaultValue="440"/>
                      <label htmlFor="max-width">до</label>
                    </div>
                    <div className="main__filters-modal-list-item-body-settings-range main__filters-modal-list-item-body-settings-range--width">
                      <div className="main__scale">
                        <div className="main__bar"></div>
                      </div>
                      <div className="main__toggle main__toggle--min"></div>
                      <div className="main__toggle main__toggle--max"></div>
                    </div>
                  </div>
                  <div className="main__filters-modal-list-item-body-settings">
                    <h4>Длинна</h4>
                    <div className="main__filters-modal-list-item-body-settings-inputs">
                      <label htmlFor="min-length">от</label>
                      <input type="number" id="min-length" defaultValue="225" />
                      <input type="number" id="max-length" defaultValue="452"/>
                      <label htmlFor="max-length">до</label>
                    </div>
                    <div className="main__filters-modal-list-item-body-settings-range main__filters-modal-list-item-body-settings-range--length">
                      <div className="main__scale">
                        <div className="main__bar"></div>
                      </div>
                      <div className="main__toggle main__toggle--min"></div>
                      <div className="main__toggle main__toggle--max"></div>
                    </div>
                  </div>
                  <div className="main__filters-modal-list-item-body-settings">
                    <h4>Высота</h4>
                    <div className="main__filters-modal-list-item-body-settings-inputs">
                      <label htmlFor="min-height">от</label>
                      <input type="number" id="min-height" defaultValue="52" />
                      <input type="number" id="max-height" defaultValue="156"/>
                      <label htmlFor="max-height">до</label>
                    </div>
                    <div className="main__filters-modal-list-item-body-settings-range main__filters-modal-list-item-body-settings-range--height">
                      <div className="main__scale">
                        <div className="main__bar"></div>
                      </div>
                      <div className="main__toggle main__toggle--min"></div>
                      <div className="main__toggle main__toggle--max"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Размеры спального места</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isTransformMechanismFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Механизм трансформации</h3>
                  <button data-filter={Filters.TRANSFORM_MECHANISM} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isTransformMechanismFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <ul className="main__filters-modal-list-item-body-settings-checkbox">
                      <li>
                        <input type="checkbox" name="accordeon" id="accordeon" />
                        <label htmlFor="accordeon">Аккордеон</label>
                      </li>
                      <li>
                        <input type="checkbox" name="roll-out" id="roll-out" defaultChecked={true} />
                        <label htmlFor="roll-out">Выкатной</label>
                      </li>
                      <li>
                        <input type="checkbox" name="eurobook" id="eurobook" defaultChecked={true} />
                        <label htmlFor="eurobook">Еврокнижка</label>
                      </li>
                      <li>
                        <input type="checkbox" name="dolphin" id="dolphin" />
                        <label htmlFor="dolphin">Дельфин</label>
                      </li>
                      <li>
                        <input type="checkbox" name="click-clack" id="click-clack" />
                        <label htmlFor="click-clack">Клик-кляк</label>
                      </li>
                      <li>
                        <input type="checkbox" name="book" id="book" />
                        <label htmlFor="book">Книжка</label>
                      </li>
                      <li>
                        <input type="checkbox" name="pantograph" id="pantograph" />
                        <label htmlFor="pantograph">Пантограф</label>
                      </li>
                      <li>
                        <input type="checkbox" name="puma" id="puma" />
                        <label htmlFor="puma">Пума</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Тип ткани</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Материал канта</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isFillingFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Наполнитель</h3>
                  <button data-filter={Filters.FILLING} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isFillingFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <ul className="main__filters-modal-list-item-body-settings-radio">
                      <li>
                        <input type="radio" name="filling" id="polyurethane" defaultValue="polyurethane"/>
                        <label htmlFor="polyurethane">Пенополиуритан</label>
                      </li>
                      <li>
                        <input type="radio" name="filling" id="dependent" defaultValue="dependent"/>
                        <label htmlFor="dependent">Зависимый пружинный блок</label>
                      </li>
                      <li>
                        <input type="radio" name="filling" id="independent" defaultValue="independent" />
                        <label htmlFor="independent">Независимый пружинный блок</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Пружинный блок</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isEdgingColorFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Цвет канта</h3>
                  <button data-filter={Filters.EDGING_COLOR} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isEdgingColorFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <ul className="main__filters-modal-list-item-body-settings-radio main__filters-modal-list-item-body-settings-radio--colors">
                      <li>
                        <input type="radio" name="edging" id="white" defaultValue="white"/>
                        <label htmlFor="white">Белый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="beige" defaultValue="beige"/>
                        <label htmlFor="beige">Бежевый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="brown" defaultValue="brown" />
                        <label htmlFor="brown">Коричневый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="black" defaultValue="black" />
                        <label htmlFor="black">Черный</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="gray" defaultValue="gray" />
                        <label htmlFor="gray">Серый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="yellow" defaultValue="yellow" />
                        <label htmlFor="yellow">Желтый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="red" defaultValue="red" />
                        <label htmlFor="red">Красный</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="purple" defaultValue="purple" />
                        <label htmlFor="purple">Фиолетовый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="blue" defaultValue="blue" />
                        <label htmlFor="blue">Синий</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="green" defaultValue="green" />
                        <label htmlFor="green">Зеленый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="pink" defaultValue="pink" />
                        <label htmlFor="pink">Розовый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="turquoise" defaultValue="turquoise" />
                        <label htmlFor="turquoise">Бирюзовый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="burgundy" defaultValue="burgundy" />
                        <label htmlFor="burgundy">Бордовый</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="print" defaultValue="print" />
                        <label htmlFor="print">Принт</label>
                      </li>
                      <li>
                        <input type="radio" name="edging" id="multicolor" defaultValue="multicolor" />
                        <label htmlFor="multicolor">Мультиколор</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Высота сиденья</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Глубина сиденья</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isBoxFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Ящик для белья</h3>
                  <button data-filter={Filters.BOX} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isBoxFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <input className="main__filters-switch" type="checkbox" name="box" id="box" />
                    <label className="main__filters-switch-label" htmlFor="box">Нет / Да</label>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Размер ящика для белья</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Объем ящика для белья (в литрах)</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isCoverFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Съёмный чехол</h3>
                  <button data-filter={Filters.COVER} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isCoverFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <input className="main__filters-switch" type="checkbox" name="cover" id="cover" />
                    <label className="main__filters-switch-label" htmlFor="cover">Нет / Да</label>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Подушки спинки</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Декоративные подушки</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Наличие подлокотников</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Наличие бара</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isWeightFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Общий вес с упаковкой</h3>
                  <button data-filter={Filters.WEIGHT} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isWeightFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <div className="main__filters-modal-list-item-body-settings-inputs">
                      <label htmlFor="min-weight-with-box">от</label>
                      <input type="number" id="min-weight-with-box" defaultValue="80" />
                      <input type="number" id="max-weight-with-box" defaultValue="440"/>
                      <label htmlFor="max-weight-with-box">до</label>
                    </div>
                    <div className="main__filters-modal-list-item-body-settings-range main__filters-modal-list-item-body-settings-range--weight-with-box">
                      <div className="main__scale">
                        <div className="main__bar"></div>
                      </div>
                      <div className="main__toggle main__toggle--min"></div>
                      <div className="main__toggle main__toggle--max"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className={`main__filters-modal-list-item-head ${state.isPackageFilterOpen ? `main__filters-modal-list-item-head--active` : ``}`}>
                  <h3>Упаковка</h3>
                  <button data-filter={Filters.PACKAGE} onClick={openFilterHadler} type="button"></button>
                </div>
                <div className={`main__filters-modal-list-item-body ${state.isPackageFilterOpen ? `` : `main__filters-modal-list-item-body--hidden`}`}>
                  <div className="main__filters-modal-list-item-body-settings">
                    <h4>Количество коробок</h4>
                    <div className="main__filters-modal-list-item-body-settings-inputs">
                      <label htmlFor="min-amount-of-boxes">от</label>
                      <input type="number" id="min-amount-of-boxes" defaultValue="80" />
                      <input type="number" id="max-amount-of-boxes" defaultValue="440"/>
                      <label htmlFor="max-amount-of-boxes">до</label>
                    </div>
                    <div className="main__filters-modal-list-item-body-settings-range main__filters-modal-list-item-body-settings-range--amount-of-boxes">
                      <div className="main__scale">
                        <div className="main__bar"></div>
                      </div>
                      <div className="main__toggle main__toggle--min"></div>
                      <div className="main__toggle main__toggle--max"></div>
                    </div>
                  </div>
                  <div className="main__filters-modal-list-item-body-settings">
                    <h4>Вес</h4>
                    <div className="main__filters-modal-list-item-body-settings-inputs">
                      <label htmlFor="min-weight">от</label>
                      <input type="number" id="min-weight" defaultValue="80" />
                      <input type="number" id="max-weight" defaultValue="440"/>
                      <label htmlFor="max-weight">до</label>
                    </div>
                    <div className="main__filters-modal-list-item-body-settings-range main__filters-modal-list-item-body-settings-range--amount-of-boxes">
                      <div className="main__scale">
                        <div className="main__bar"></div>
                      </div>
                      <div className="main__toggle main__toggle--min"></div>
                      <div className="main__toggle main__toggle--max"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Возможность обивки под заказ</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Товары в комплекте (комплектация)</h3>
                  <button type="button"></button>
                </div>
              </li>
              <li className="main__filters-modal-list-item">
                <div className="main__filters-modal-list-item-head">
                  <h3>Стиль интерьера</h3>
                  <button type="button"></button>
                </div>
              </li>
            </ul>
            <div className="main__filters-modal-buttons">
              <button type="submit">Смотреть (12)</button>
              <button type="reset">Очистить фильтр</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Main;
