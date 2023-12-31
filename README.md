# Создание «информационной системы для предварительного бронирования билетов».

## **Задача**

Разработать сайт бронирования билетов онлайн

## **Сущности**

### Кинозал

Помещение, в котором демонстрируются фильмы. Режим работы определяется расписанием на день. Зал — прямоугольный, состоит из N\*M различных зрительских мест.

### Зрительское место

Место в кинозале. Зрительские места могут быть VIP и обычные.

### Фильм

Информация о фильме заполняется администратором. Фильм связан с сеансом в кинозале.

### Сеанс

Сеанс — это временной промежуток, в котором в кинозале будет показываться фильм. На сеанс могут быть забронированы билеты.

### Билет

QR-код c уникальным кодом бронирования, в котором обязательно указаны место, ряд, сеанс. Билет действителен строго на свой сеанс. Для генерации QR-кода использован [QRCreator.js](https://github.com/slesareva-gala/QR-Code)

## **Роль пользователя**

### Гость

неавторизованный посетитель сайта

### Возможности гостя

- просмотр расписания
- просмотр информации о фильмах
- выбор места в кинозале
- бронирование билета

## **Стек технологий**

Проект выполнен на основе фреймворка React.
Проект был сгенерирован с помощью [create-react-app](https://github.com/facebook/create-react-app).
Css стили подключены глобально в корне проекта

### Основная структура проекта

```
cinema/src/
│
├── components/ # Папка с компонентами проекта
│ ├── App/ # Стартовый компонент приложени
│ ├── Film/ # Компонент отображающий карточку фильма
│ ├── HallPlaces/ # Компонент отображения мест в зале
│ └── NavDateSelector/ # Компонент выбора даты бронирования
│
├── date/ # Даные приложения
│ └── index.ts # Этот файл содержит класс для работы с локальным хранилищем и пользовательскими заказами.
|
├── routes/ # Навигация и постраничная навигация
│ ├── pages/ # Компоненты-страницы проекта
| | ├── ... # Другие страницы
| │ └── HallPage/ # Страница с выбором места в зале
│ └── index.tsx # Роутинг проекта
|
├── utils/ # Утилиты
│ └── sendRequest.ts # Функция отправляющая запрос на сервер
│
└── index.tsx # Корневой файл приложения
```

## **Реализация проекта**

- Адаптирована исходная верстка под планшетные и мобильные устройства. Верстка корректно отображается на устройствах с шириной экрана 320px и более.
- Разработана API для взаимодействия с Backend.
  - Получение списков всех залов, кинофильмов и сеансов
  - Получение актуальной схемы посадочных мест на выбранный сеанс
  - Заказ билета
-  Запрограммирована гостевая часть сайта


## Запуск и сборка проекта

 - `yarn start` Запуск проекта локально

 - `yarn build` Сборка проекта для публикации

## **[Демо](https://krutuychel.github.io/cinema/build/)**


