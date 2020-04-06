# fsd-step-2
Обучающее задание на фронтенд разработчика. Задание 2. Практика верстки. 2-4 месяца.

## Цель:
Подключить Webpack с Pug и SCSS, и согласно БЭМ сверстать UI Kit и сам сайт "по поиску номеров в отеле".

[разработчику](develop.md)

## Чтобы развернуть проект

Open the console and go to the directory in which you want to place the project folder.

Write in the console:

``` bash
# Download repository:
git clone https://github.com/DokSna/fsd-step-2.git fsd-step-2

# Go to the app:
cd fsd-step-2

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

### Установленные пакеты (плагины) - можно посмотреть в файле _package.json_

```json
"devDependencies": {
  "@babel/core": "^7.9.0",
  "@babel/preset-env": "^7.9.0",
  "autoprefixer": "^9.7.4",
  "babel-loader": "^8.1.0",
  "copy-webpack-plugin": "^5.1.1",
  "css-loader": "^3.4.2",
  "css-mqpacker": "^7.0.0",
  "cssnano": "^4.1.10",
  "file-loader": "^6.0.0",
  "html-webpack-plugin": "^3.2.0",
  "mini-css-extract-plugin": "^0.9.0",
  "node-sass": "^4.13.1",
  "path": "^0.12.7",
  "postcss-loader": "^3.0.0",
  "pug": "^2.0.4",
  "pug-loader": "^2.4.0",
  "sass-loader": "^8.0.2",
  "style-loader": "^1.1.3",
  "vue-loader": "^15.9.1",
  "vue-style-loader": "^4.1.2",
  "vue-template-compiler": "^2.6.11",
  "webpack": "^4.42.0",
  "webpack-cli": "^3.3.11",
  "webpack-dev-server": "^3.10.3",
  "webpack-merge": "^4.2.2"
},
"dependencies": {
  "vue": "^2.6.11",
  "vuex": "^3.1.3"
}
```

### Некоторые моменты
* Вёрстка сайта под браузеры:
  > "Firefox Browser" версия 74.0.1 (64-битный)
  > "Google Chrome" версия 80.0.3987.149 (Официальная сборка), (64 бит)
  > "Opera" версия:67.0.3575.115

