# fsd-step-2

Обучающее задание на фронтенд разработчика. Задание 2. Практика верстки. 2-4 месяца.

## Цель:

Подключить Webpack с Pug и SCSS, и согласно БЭМ сверстать UI Kit и сам сайт "по поиску номеров в отеле".

### Настраиваем Webpack

#### [Настройка Webpack 4 шаблона. Установка Babel 7 и webpack dev server. Настройка js на примере vue](https://tocode.ru/curses/nastroika-webpack4/js-babel7-webpack-dev-server/)

1.  Скачиваем и устанавливаем [Node.js](https://nodejs.org/en/).
    <details><summary>подробнее</summary>
    После установки Node.js - нам доступна команда "npm" в консоли (Node Package Manager). Позволяет устанавливать Javascript-библиотеки из сети Интернет.
    </details>

2.  В папке нашего проекта, в консоли инициализируем наш проект: `npm init` - создаётся файл "package.json".
    <details><summary>подробнее</summary>

    Переходим в папку проекта - я в VS Code нажимаю "Файл -> Открыть папку (тут же создаю её с нужным мне
    названием)".

    Сохраняю папку как проект - Расширение "Project Manager" в VS Code.

    Открываю консоль "Ctrl+`" (контр плюс Ё).

    Убеждаюсь что в консоли я тоже нахожусь в папке моего проекта. (к этому моменту у меня уже настроен git).

    Можем убедиться что у нас работет npm проверив его версию. Вводим в консоль: `npm -v`.

    Нам нужна "Инициализация нового пакета" который будет описывать наш проект и модули, которые будут
    использоваться в нашем проекте. Команда в консоль: `npm init`.

    </details>

3.  Установим пакеты (библиотеки) webpack, webpack-cli, webpack-dev-server, path.

    Вводим в консоль: `npm install webpack webpack-cli webpack-dev-server path --save-dev`

    Папка "node_modules" содержит очень много файлов, и смысла её коммитить нет.

    Открываем файл `Наш_проект\.git\info\exclude` и в конце добавляем строку `node_modules/`
    <details><summary>подробнее</summary>

    `--save-dev` - что бы в файле package.json, webpack был помещён в `devDependencies` - то что относится к
    разработке.

    По умолчанию установилось бы в `Dependencies` - то что относится в продакшену.

    После установки пакетов появилась папка `node_modules` (в ней Javascript-библиотеки), а в файл `package.json` внесена запись:

    ```js
    "devDependencies": {
      "path": "^0.12.7",
      "webpack": "^4.41.5",
      "webpack-cli": "^3.3.10",
      "webpack-dev-server": "^3.10.1"
    }
    ```

    </details>

4.  В package.json добавим два ярлыка - для запуска webpack в режиме Devrlopment и Production
    <details><summary>подробнее</summary>

    ```js
    "scripts": {
      "dev": "webpack-dev-server --mode development --open",
      "build": "webpack --mode production"
    }
    ```

    Для запуска webpack в режиме Devrlopment набрать в консоли: `npm run dev`

    Для запуска в режиме Production набрать в консоли: `npm run build`

    </details>

5. Переходим к настройкам Webpack - создадим файл **webpack.config.js**

   В **webpack.config.js** описываем точку входа entry, и описываем путь к файлу `./src/index.js`

   Создаём папку **src** и файл **index.js** (в index.js мы будем подключать все наши библиотеки)

   Так же в файле **webpack.config.js** описываем точку выхода `output`

   Для *devServer* укажем `overlay: true` что бы отображались ошибки в окне браузера
    <details><summary>подробнее</summary>

    В файле **webpack.config.js** мы будем описывать конфигурации нашего Webpack

    </details>

6. Создадим 2 файла: **index.html**, **./src/js/common.js**

    В **./src/js/common.js** опишем простую функцию сложения для проверки.

    В **index.html** вызовем эту функцию.

    В **index.js** импортируем код из **./src/js/common.js**

    При команде `npm run dev` Webpack в памяти компилирует проект, и не записывая файлов на диск выдаёт результат.

    При команде `npm run build` Webpack компилирует папку **dist** в корне проекта и файлы в ней (в том числе **app.js** *точка выхода*).
    <details><summary>подробнее</summary>

    **index.html**
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Webpack</title>
    </head>
    <body>
      <div class="wrapper">
        <h1>Webpack</h1>
      </div>
      <script src="/dist/app.js"></script>
    </body>
    </html>
    ```

    **src\index.js**
    ```js
    import './js/common'
    ```

    **src\js\common.js**
    ```js
    let add = (a,b) => a+b
    console.log(add(2,6))
    ```
    </details>
7. Что бы код написанный на современном языке работал во всех браузерах установим [Babel](https://babeljs.io/) - он преобразует современный синтаксис в "устаревший" что бы его понимали старые браузеры, которые не поддерживают новые стандарты.

    Команда: `npm install @babel/core @babel/preset-env babel-loader —save-dev`

    Устанавливаем Vue: `npm install vue --save`

    Подключаем в **index.js** добавляя строку `window.Vue = require('vue')`

***
#### [Настройка препроцессора SASS, подключение postcss плагинов](https://tocode.ru/curses/nastroika-webpack4/preprocessor-sass-postcss/)

1. Создание scss и css папок в webpack

2. Установка mini-css-extract-plugin

3. Webpack 4 SASS. Обработка

4. Настройка и установка postcss плагинов

#### [Обработка файлов, настройка webpack-merge и copy-webpack-plugin](https://tocode.ru/curses/nastroika-webpack4/obrabotka-failov-nastroika-merge)

1. Webpack-merge

2. Webpack devtool - карта для нашего CSS

3. Webpack обработка изображений. Подключаем file-loader

4. Устновка и настройка copy-webpack-plugin

5. Установка и настройка html-webpack-plugin в webpack 4

#### [Подключение и использование VUE и VUEX](https://tocode.ru/curses/nastroika-webpack4/podkluchenie-vue-vuex)

1. Webpack обработка .vue файлов

2. Плагин VueLoaderPlugin

3. Подключение vue компонентов