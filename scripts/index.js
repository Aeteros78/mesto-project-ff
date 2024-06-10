// @todo: Темплейт карточки
const cardTempate = document.querySelector('#card-template').content.querySelector('.places__item'); // создаем темплейт, забираем из него контент
// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list'); // добавляем в DOM список
// @todo: Функция создания карточки

const addCard = (card, onDelete) => {
    const newCard = cardTempate.cloneNode(true); // Ищем в темплейте шаблон и клонируем его
    const deleteButton = newCard.querySelector('.card__delete-button'); // Находим на карточке кнопку удалить
    newCard.querySelector('.card__image').src = card.link; // Добавляем ссылку на картинку
    newCard.querySelector('.card__image').alt = card.name; // Добавляем описание
    newCard.querySelector('.card__title').textContent = card.name; // Добавляем название
    deleteButton.addEventListener('click', () => { // На кнопку вешаем обработчик событий
        onDelete(newCard) // Удаляем карточку                          
    })
    return newCard; // Возращаем карточки
}

// @todo: Функция удаления карточки

const handleDeleteCard = (card) => {
    card.remove()
}

// @todo: Вывести карточки на страницу

initialCards.forEach((card) => { // Проходим по массиву
    const newCard = addCard(card, handleDeleteCard); // Получаем карточку и удаление на неё
    cardContainer.append(newCard); // Новая карточка помещается в начало
});