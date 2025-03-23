# Тестовое задание для компани [Неткрекер](https://www.netcracker.ru/)

### 🚀 Технологии

- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia-ru.netlify.app/)
- [Vite](https://vite.dev/)
- [Prettier](https://prettier.io/)
- [EsLint](https://eslint.org/)
- [SCSS](https://sass-scss.ru/guide/)
- [Axios](https://axios-http.com/ru/docs/intro)

### 📦 Установка

1. Склонировать репозиторий:
   `git clone https://github.com/punchalaken/netkreker-test`

2. Перейти в директорию прокта:
   `cd netkreker-test`

3. Установите зависимости:
   `npm install
или
yarn install`

### 🔨 Запуск проекта

1. Для разработки (локально):
   `npm run dev
или
yarn dev`

2. Для сборки проекта:
   `npm run build
или
yarn build`

### 📂 Структура проекта

    src/
      ├── app/                      # Основные файлы проекта
      │   └── styles                   # Стили для проекта
      │   │   └── scss                 # Файлы стилей scss
      │   │   │   └── index.scss             # Входящий файл scss
      │   │   │   └── mixins.scss            # Миксины scss
      │   │   │   └── variables.scss         # Переменные стилей scss
      │   │   └── main.scss               # Стили основного файла (шрифты)
      │   │   └── normalize.scss          # Нормализация стилей
      │   └── App.tsx                  # Главный компонент приложения
      ├── entities/                 # Сущности приложения
      |   └── FilmCard/                  # Карточка фильма
      ├── pages/                    # Страницы приложения
      │   └── MoviePage/               # Страница выбранного фильма
      │   └── FilmsPage/               # Страница с выбором фильмов
      │   └── NotFoundPage/            # Страница 404
      ├── router/                   # Конфигурационный файл роутинга
      ├── shared/                   # Переиспользуемые компоненты и изолированная бизнес-логика
      │   └── BackToListButton/        # Ссылка возвращения на страницу выбора фильмов
      │   └── CustomCheckBox/          # Кастомный чекбокс
      │   └── NotFoundText/            # Текст ошибки роутинга
      │   └── UnderlineWhite/          # Белая линия отделения
      ├── widgets                   # Самостоятельные виджеты приложения
      │   └── CardDuration/            # Отображение хронометража фильма
      │   └── FilmsHeader/             # Шапка страницы films
      │   └── FilmsList/               # Список фильмов выводимых на странице
      │   └── HeaderMain/              # Шапка сайта
      │   └── LoaderPrevue/            # Лоудер
      │   └── SortWidget/              # Панель сортировки
      ├── stores                    # Папка стора и типов к нему
      ├── main.tsx                  # Точка входа


      В папке publick находтся шрифты, иконки, гиф, robots.txt

### 📄 Запросы на сервер:

- Получение списка фильмов [GET](https://mashroom-movies-api.netlify.app/api/movies) - Данные кешируются в LocalStorage по ключу `filmsStorage`.
- Получение фильма по id [Get](https://mashroom-movies-api.netlify.app/api/movie/368539)
