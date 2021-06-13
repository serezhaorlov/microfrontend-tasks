### Проект на микрофронтэндах
#### Что работает:
Добавление, Удаление, Редактирование коллег
Добавление праздников, удаление праздников, 
Добавление коллег в соответствующие праздники, удаление коллег из праздников

Реализована концепция микрофронтэнда с помощью https://single-spa.js.org/, для использования сразу двух фреймворков в проекте.
Стартовая страница и роутинг по приложению реализованны на React, все остальные страницы на Vue, стор пришлось делать через window.store, потому что нормально ни один стейт менеджер пока с технологией не работает)


### Как запустить проект

#### git clone https://github.com/serezhaorlov/microfrontend-tasks.git
#### npm install
#### npm start
